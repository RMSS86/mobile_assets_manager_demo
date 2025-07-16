# Email sending Module
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders
# Systemn dependencies
import sys
from sqlalchemy import create_engine
import pandas as pd
import qrcode

# Kivy dependencies[ALL(in project)]
from kivy.lang import Builder
from kivy_garden.mapview import MapView, MapMarkerPopup
from kivymd.font_definitions import theme_font_styles
from kivymd.uix.datatables import MDDataTable, TableHeader, TableData, TablePagination
from kivy.uix.screenmanager import ScreenManager, Screen, \
    SwapTransition, SlideTransition, CardTransition, FadeTransition, WipeTransition, FallOutTransition
from kivy.clock import Clock
from kivy.metrics import dp
from kivymd.uix.menu import MDDropdownMenu
from kivymd.app import MDApp
from kivymd.uix.card import MDCard
from kivymd.uix.list import OneLineIconListItem
from kivy.properties import StringProperty
from kivy.properties import ObjectProperty
from kivy.core.window import Window
from kivy.core.image import Image as CoreImage
from kivy.uix.image import Image as kiImage
from kivy.core.text import LabelBase
from kivymd.uix.list import OneLineAvatarListItem
from kivymd.uix.button import MDFlatButton
from kivymd.uix.dialog import MDDialog
from kivymd.uix.tab import MDTabsBase
from kivy.uix.floatlayout import FloatLayout
from kivy.clock import Clock
from kivymd.app import MDApp
# from kivy_garden.zbarcam import ZBarCam #run test to see if loading from her is fater
from interface.Interface import KV
import os
from PIL import Image, ImageDraw, ImageFont
from io import BytesIO

###############################################
# UNUSED PACKEGES
from flask import Flask
# from flask_sqlalchemy import SQLAlchemy
import kivy
from kivy.utils import get_color_from_hex
from kivymd.theming import ThemableBehavior
from kivymd.uix.dialog import BaseDialog
from kivymd.uix.taptargetview import MDTapTargetView
from kivymd.toast import toast
from kivymd.uix.bottomsheet import MDListBottomSheet
from kivymd.uix.bottomsheet import MDGridBottomSheet
from email.mime.text import MIMEText
import pyodbc as po
import io
################################################

# //> GLOBAL VARIABLES
################################################
################################################

# //> Window main size
Window.size = (320, 600)

# //> fictional data for database content
code = 'ICON_EP15ALV1'
CAT = 'CPU'

ICON = None  # for Qr code and SPx requests
content = None  # for image on QR label send

################################################
################################################

class EMP_Cycle_DataTable(MDDataTable):
    pass


class Item_Cycle_DataTable(MDDataTable):
    pass


# KIVY ELEMENTS GLOBAL DECLARATION
################################################
################################################
class Card(MDCard):
    pass


class Tab(FloatLayout, MDTabsBase):
    pass

class IconListItem(OneLineIconListItem):
    icon = StringProperty()

class Intro(Screen):
    pass

class LogIn(Screen):
    pass

class MenuScreen(Screen):
    pass

class InventoryScreen(Screen):
    pass

class Item(OneLineAvatarListItem):
    divider = None
    source = StringProperty()
################################################
################################################


################################################
# MAIN APP DECLARATION
################################################

class MainApp(MDApp):
    txtReadData = StringProperty()
    dialog = None
    dialog_2 = None
    data_item_cycle_table = ObjectProperty(None)
    data_EMP_cycle_table = ObjectProperty(None)

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

        # DataBasde Credentials
        self.DATA_EMP = None
        self.marker_EMP = None
        self._EMP_coor_lat = None
        self.EMPLOYEES = None
        self.EMP_responsive_log = None
        self.item_cycle_values = None
        self.item_cycle_cols = None
        self.DATA_ITEM = None
        self._return_COMP_Account = None
        self.to_dealocation_dialog_emp_name = None
        self.data_iten_cycle_raw = None
        self.mapview_EMP = None
        self.on_deallocation_scratch_loc_ID = None
        self.on_deallocation_scratch_emp_ID = None
        self.item_current_condition_ID = None
        self.last_movement_type_checker = None
        self.item_last_move = None
        self.Current_Item_ID = None
        self._checker_qr = None
        self.item_dsc_items = None
        self.item_ID_request = None
        self._in_val = None
        self.ITEM_DSC = None
        self.QR_code_on_last_move = None
        self.ITEM_DSC_RAW = None
        self.TRX_allower = None
        self.data_item_DSC_raw = None
        self._c_getter = None
        self.account_items = None
        self.ACCOUNTS = None
        self.data_accounts_raw = None
        self.sub_category_items = None
        self.data_sub_categories_raw = None
        self.tree_sub_cat_selected = None
        self.tree_sub_cat_selector = None
        self.cat_menu = None
        self.category_items = None
        self.CATEGORIES = None
        self.data_categories_raw = None
        self._return_code = None
        self.SERVER = os.environ['TARGET_ENVIRONMENT_SERVER']
        self.DATABASE = os.environ['EDR_ONE_Test_LN']
        self.DRIVER = 'SQL Server Native Client 11.0'
        self.USERNAME = 'sa'
        self.PASSWORD = os.environ['ENVIRONMENT_PASSWORD']
        ##########Variables for onstart vs on demand QUERIES
        self.SUB_CATEGORIES = []
        self.ALL_INITIAL_LISTS = ['Load Entries']
        self.user_ID = '2'

    def _Conection(self):
        self.DATABASE_CONNECTION = f'mssql://{self.USERNAME}:{self.PASSWORD}@{self.SERVER}/{self.DATABASE}?driver={self.DRIVER}'
        self.engine = create_engine(self.DATABASE_CONNECTION, execution_options={'stream_results': True})
        self.connection = self.engine.connect()
        return self.connection

    ######################################################
    # Invoking database info modules##################
    # NO BACK END SERVER, PURE TO DB INQUIRY
    ###############################################

    ########REGISTRSTION CATEGORIES DROPDOWN FUNCTION
    def data_categories(self, *args):
        self.data_categories_raw = pd.read_sql_query(
            "select Category_DSC from iCAT_Category ",
            self._Conection())

        self.CATEGORIES = self.data_categories_raw['Category_DSC'].to_list()

        self.category_items = [
            {
                "viewclass": "OneLineListItem",
                "icon": "plus",
                "height": dp(56),
                "text": f" {i}",
                "right_text": f"ICON",
                "on_release": lambda x=f"{i}": self.set_item(x),
            } for i in self.CATEGORIES]

        self.cat_menu = MDDropdownMenu(
            caller=self.menu.ids.category,
            items=self.category_items,
            position="center",
            width_mult=4,
        )

        # print(self.CATEGORIES)
        return self.CATEGORIES

    ########REGISTRSTION SUB_CATEGORIES DROPDOWN FUNCTION
    def data_sub_categories(self, *args):
        if not self.SUB_CATEGORIES:
            self.data_sub_categories_raw = pd.read_sql_query(
                "select * from iCAT_Sub_Category ",
                self._Conection())

            self.SUB_CATEGORIES = self.data_sub_categories_raw['Sub_Category_DSC'].to_list()
            # self-Generated tags from data base consult!
            # Tag from TOP for QR ID
            # Tag from Category from
            # print(self.SUB_CATEGORIES)
            return self.SUB_CATEGORIES

        else:
            self.tree_sub_cat_selector = pd.read_sql_query(
                f"select Category_ID from iCAT_Category where Category_DSC='{self.category_requested}'",
                self._Conection())
            # print(self.tree_sub_cat_selector)

            self.tree_sub_cat_selected = str(self.tree_sub_cat_selector['Category_ID'][0])

            # print(self.tree_sub_cat_selected)

            self.data_sub_categories_raw = pd.read_sql_query(
                f"select * from iCAT_Sub_Category where Category_ID='{self.tree_sub_cat_selected}'",
                self._Conection())

            self.SUB_CATEGORIES = self.data_sub_categories_raw['Sub_Category_DSC'].to_list()
            # self-Generated tags from data base consult!
            # Tag from TOP for QR ID
            # Tag from Category from

            self.sub_category_items = [
                {
                    "viewclass": "OneLineListItem",
                    "icon": "plus",
                    "height": dp(56),
                    "text": f" {s}",
                    "right_text": f"ICON",
                    "on_release": lambda x=f"{s}": self.set_sub_item(x),
                } for s in self.SUB_CATEGORIES]

            self.sub_menu = MDDropdownMenu(
                caller=self.menu.ids.sub_category,
                items=self.sub_category_items,
                position="center",
                width_mult=4,
            )

            # print(self.SUB_CATEGORIES)
            return self.SUB_CATEGORIES

    ########REGISTRSTION ACCOUNTS DROPDOWN FUNCTION
    def data_accounts(self, *args):
        self.data_accounts_raw = pd.read_sql_query(
            "select * from iCAT_Account ",
            self._Conection())

        self.ACCOUNTS = self.data_accounts_raw['Account_DSC'].to_list()
        # self-Generated tags from data base consult!
        # Tag from TOP for QR ID
        # Tag from Category from

        self.account_items = [
            {
                "viewclass": "OneLineListItem",
                "icon": "plus",
                "height": dp(56),
                "text": f" {a}",
                "right_text": f"ICON",
                "on_release": lambda x=f"{a}": self.set_account_item(x),
            } for a in self.ACCOUNTS]

        self.account_menu = MDDropdownMenu(
            caller=self.menu.ids.account_category,
            items=self.account_items,
            position="center",
            width_mult=4,
        )
        # print(self.ACCOUNTS)
        return self.ACCOUNTS

    def data_item_DSC(self, *args):
        try:
            self.data_item_DSC_raw = pd.read_sql_query(
                f"select Item_DSC from iCAT_Item_Description where Category_ID='{self.category_id_requested}' and Sub_Category_ID='{self.sub_category_id_requested}'",
                self._Conection())

            self.ITEM_DSC_RAW = self.data_item_DSC_raw['Item_DSC'].to_list()
            self.ITEM_DSC = [x.replace("\r\n", "") for x in self.ITEM_DSC_RAW]
            # newlist = [self.ITEM_DSC_RAW.replace("\r\n", "") for x in self.ITEM_DSC_RAW]
            self.item_dsc_items = [
                {
                    "viewclass": "OneLineListItem",
                    "icon": "plus",
                    "height": dp(56),
                    "text": f" {a}",
                    "right_text": f"ICON",
                    "on_release": lambda x=f"{a}": self.set_item_dsc_item(x),  # pending
                } for a in self.ITEM_DSC]

            self.item_DSC_menu = MDDropdownMenu(
                caller=self.menu.ids.item_description_list,
                items=self.item_dsc_items,
                position="center",
                width_mult=4,
            )
            # print(self.ITEM_DSC)

            return self.ITEM_DSC
        except:
            self.show_alert_dialog_no_cat_subcat_selected()

    # .replace("\r\n", "")

    ####################################################################
    #################READIN THE QR/REQUESTING DATA SECTION####################
    ##########################################################################

    ####Reading the code and changing tab to Resume>>>>
    def ReadQr_Spx(self, _read_code):
        self._c_getter = _read_code
        self._in_val = self._c_getter
        self._checker_qr = self._c_getter.split('_')
        # Let the Bounce Begin!
        if self._in_val == [] or self._in_val is None or self._in_val == '':
            self.show_alert_dialog_No_Item_Secanned()
        else:
            if self._checker_qr[0] == 'ICON':
                try:
                    self.SQL_Main_request()
                    if self._return_code['QR'][0] != '':
                        self.show_alert_dialog_Item_Secanned()
                        try:
                            self.SQL_last_move_Request()
                        except:
                            self.show_alert_dialog_Iten_with_no_moves()
                        try:
                            self.SQL_Sub_requests()
                        except:
                            self.show_alert_dialog_Iten_with_no_moves()
                        try:
                            self.SQL_COMP_requests()
                        except:
                            self.show_alert_dialog_sql_COMP_not_fetchable()
                except:
                    self.show_alert_dialog_icon_Item_Secanned_not_saved()
            else:
                self.show_alert_dialog_No_Item_Secanned()

    # TODO: make modular operators to disable actions when not required(unabling buttons or screens!)

    ####Initial SQL request manager>>>>>
    def SQL_Main_request(self):
        ###GENERIC SQL REQUEST######SPx FOR All Info from Scanner request! ...

        self._return_code = pd.read_sql_query(
            f'exec ixSP_Leer_QR {self._c_getter}',
            self._Conection())
        # print(self._return_code)
        # print(self.item_last_move['Movement_Type_SC'][0])

        # Selected Tag
        self.menu.ids.list_icon.text = self._return_code['QR'][0]  # Tag from TOP for QR ID

        # Primary info
        self.menu.ids.list_category.text = self._return_code['Category_DSC'][0]  # Tag from Category from
        self.menu.ids.list_sub_category.text = self._return_code['Sub_Category_DSC'][0]  # Tag from Category from
        self.menu.ids.list_item_dsc.text = self._return_code['Item_DSC'][0]  # Tag from sub_Category from
        self.menu.ids.list_item_cycle_dsc.text = self._return_code['Item_DSC'][0]

        self.Current_Item_ID = self._return_code['Item_ID'][0]

        return self._return_code

    ####Logical operator for direct to Window
    def SQL_last_move_Request(self):
        self.item_ID_request = self._return_code['Item_ID'][0]
        # print(self.item_ID_request)
        self.item_last_move = pd.read_sql_query(
            f"exec ixSP_Ciclo_Item_Ultimo_Paso {self.item_ID_request}",
            self._Conection())
        # print(self.item_last_move)

        self.last_movement_type_checker = self.item_last_move['Movement_Type_DSC'][0]
        self.item_current_condition_ID = self.item_last_move['Condition_ID'][0]
        ####get employee from last move
        self.on_deallocation_scratch_emp_ID = self.item_last_move['Employee_ID'][0]
        self.on_deallocation_scratch_loc_ID = self.item_last_move['Location_ID'][0]
        # print(self.on_deallocation_scratch_emp_ID)
        # print(self.on_deallocation_scratch_loc_ID)
        # TODO: create alert 'unable to get last move'

    def Assignations_alerts_manager(self):
        # TODO: Logical Operators on las movement judge[ move to tabs and disable actions ]
        if self.last_movement_type_checker == 'Purchase':
            self.show_alert_dialog_moving_to_assgin()


        elif self.last_movement_type_checker == 'Assignment':
            self.show_alert_dialog_moving_to_unassing()
            self.TRX_allower = None


        elif self.last_movement_type_checker == 'Deallocation':
            self.show_alert_dialog_moving_to_assgin()
            self.TRX_allower = None


        elif self.last_movement_type_checker == 'Scratch':
            self.show_alert_dialog_item_in_scratch()
            self.TRX_allower = None


        elif self.last_movement_type_checker == 'WareHouse A' or self.last_movement_type_checker == 'WareHouse B':
            # TODO: Create dialog for action next allowed action hint!
            self.show_alert_dialog_item_in_warehouse()
            self.TRX_allower = None
            print('Assign')
            # change botton to New Assignation AND make an alert on OK-> go to Assignations.

    #
    #

    def SQL_Sub_requests(self):

        self.QR_code_on_last_move = self.item_last_move['QR'][0]
        self.menu.ids.list_QR_code.text = self.item_last_move['QR'][0]  # works

        # Item_Condition
        self.menu.ids.list_item_condition.text = self.item_last_move['Condition_DSC'][0]  # works
        # Current Status
        self.menu.ids.list_status.text = self.item_last_move['Movement_Type_DSC'][0]
        self.menu.ids.list_transaction_time.text = str(self.item_last_move['Date_Time'][0])  # works
        self.menu.ids.list_user_made.text = self.item_last_move['User_DSC'][0]
        # Assigned to
        self.menu.ids.list_emp_name.text = self.item_last_move['Employee_DSC'][0]
        self.menu.ids.list_location_cat.text = self.item_last_move['Location_DSC'][0]
        self.menu.ids.list_utm_x.text = str(self.item_last_move['UTM_X'][0])
        self.menu.ids.list_utm_y.text = str(self.item_last_move['UTM_Y'][0])
        self.menu.ids.list_emp_id.text = str(self.item_last_move['Employee_ID'][0])

        ####Item Life Cycle tab on Scan Screen
        self.menu.ids.list_item_cycle_qr.text = self.item_last_move['QR'][0]  # works

        ###Assignation Tab on Assginations SCREEN
        self.menu.ids.list_assg_qr.text = self.item_last_move['QR'][0]
        self.menu.ids.list_assg_item_dsc.text = self.item_last_move['Item_DSC'][0]
        self.menu.ids.list_assg_item_condition.text = self.item_last_move['Condition_DSC'][0]

        ###Un-Assignation Tab on Assginations SCREEN
        self.menu.ids.list_un_assg_qr.text = self.item_last_move['QR'][0]
        self.menu.ids.list_un_assg_item_dsc.text = self.item_last_move['Item_DSC'][0]
        self.menu.ids.list_un_assg_item_las_condition.text = self.item_last_move['Condition_DSC'][0]
        self.menu.ids.list_un_assg_agent.text = self.item_last_move['Employee_DSC'][0]

        ###Scratch Tab on Scratch SCREEN
        self.menu.ids.list_scratch_qr.text = self.item_last_move['QR'][0]
        self.menu.ids.list_scratch_item_dsc.text = self.item_last_move['Item_DSC'][0]
        self.menu.ids.list_scratch_item_condition.text = self.item_last_move['Condition_DSC'][0]
        self.menu.ids.list_scratch_last_agent.text = self.item_last_move['Employee_DSC'][0]

        self.to_dealocation_dialog_emp_name = self.item_last_move['Employee_DSC'][0]
        #

    def SQL_COMP_requests(self):
        # account class
        self._return_COMP_Account = pd.read_sql_query(
            f"exec ixSP_Get_Employee '{self.item_last_move['Employee_ID'][0]}'",
            self._Conection())

        #
        self.menu.ids.list_account.text = self._return_COMP_Account['Account_DSC'][0]
        self.menu.ids.list_emp_account.text = self._return_COMP_Account['Account_DSC'][0]
        self.menu.ids.list_account_index.text = self._return_COMP_Account['Account_CD'][0]
        self.menu.ids.list_emp_position.text = self._return_COMP_Account['Position_Account_DSC'][0]

        return self._return_COMP_Account

    def Data_Item_Cycle(self):
        try:
            self.data_iten_cycle_raw = pd.read_sql_query(
                f"exec ixSP_Ciclo_Item '{self.Current_Item_ID}'",
                self._Conection())
            self.Data_Item_Cycle_table()
            # return self.data_iten_cycle_raw
        except AttributeError:
            self.loading_Fetch_Error()

    def Data_Item_Cycle_table(self):
        try:
            self.menu.ids.list_item_cycle_purchase_date.text = str(self.data_iten_cycle_raw['Date_Time'][0])
        except:
            # TODO: Create dialog for unable to get puchase date!
            print('Unable to get purchase date')
        try:

            self.DATA_ITEM = self.data_iten_cycle_raw

            self.DATA_ITEM = self.DATA_ITEM.iloc[:, 1:]
            self.item_cycle_cols = self.DATA_ITEM.columns.values
            self.item_cycle_values = self.DATA_ITEM.values

            self.data_item_cycle_table = MDDataTable(

                size_hint=(0.9, 0.6),
                use_pagination=True,

                column_data=[
                    (col, dp(40))
                    for col in self.item_cycle_cols
                ],
                row_data=self.item_cycle_values
            )
            # self.data_item_cycle_table.bind(on_row_press=self.on_row_press)
            # self.data_item_cycle_table.bind(on_check_press=self.on_check_press)

            self.item_Cycle_table_exec()
            return self.data_item_cycle_table
        except:
            self.loading_Fetch_Error()

    def item_Cycle_table_exec(self):
        # print(f'from table exec function \n {self.item_cycle_cols}\n {self.item_cycle_values}')
        try:
            # print(type(self.data_item_cycle_table))
            self.sm.current_screen.ids['table_holder_item'].add_widget(self.data_item_cycle_table)
        except:
            self.loading_Fetch_Error()
            # print('Not completed...')
        # return self.data_iten_cycle_raw

    ##########Table creation!
    def Data_Responsive_EMP(self, *args):
        try:
            self.EMP_responsive_log = pd.read_sql_query(
                f'exec ixSP_Responsiva_Empleado {self.employee_resp_requested}',
                # create self.#variable for employee id on demand just like in Assigment tab
                self.connection)
            self._EMP_coor_lat = str(self.EMP_responsive_log['UTM_X'][0])
            self._EMP_coor_lon = str(self.EMP_responsive_log['UTM_Y'][0])
            print(self._EMP_coor_lat)
            print(self._EMP_coor_lon)
            self.Data_EMP_Responsive_table()
            self.Map_EMP_location_()

        # make drop down on EMP report item or check dialog asking if user would like to go with current item assigned agent
        except AttributeError:
            self.loading_Fetch_Error()

    def Data_EMP_Responsive_table(self):
        try:
            self.DATA_EMP = self.EMP_responsive_log
            # print(f'from data_EMP_responsicve () : {self.DATA_EMP}')
            self.DATA_EMP = self.DATA_EMP.iloc[:, 1:]
            self.EMP_cycle_cols = self.DATA_EMP.columns.values
            self.EMP_cycle_values = self.DATA_EMP.values

            self.data_EMP_cycle_table = MDDataTable(

                size_hint=(0.9, 0.6),
                use_pagination=True,

                column_data=[
                    (col, dp(40))
                    for col in self.EMP_cycle_cols
                ],
                row_data=self.EMP_cycle_values
            )
            # self.data_item_cycle_table.bind(on_row_press=self.on_row_press)
            # self.data_item_cycle_table.bind(on_check_press=self.on_check_press)

            self.item_EMP_table_exec()
            return self.data_EMP_cycle_table
        except:
            self.loading_Fetch_Error()

    def item_EMP_table_exec(self):
        # print(f'from table exec function \n {self.item_cycle_cols}\n {self.item_cycle_values}')
        try:
            # print(type(self.data_EMP_cycle_table))
            self.sm.current_screen.ids['EMP_responsive_'].add_widget(self.data_EMP_cycle_table)
        except:
            self.loading_Fetch_Error()
            # print('Not completed...')
        # return self.data_iten_cycle_raw

    #########MAPS Creation
    def Map_EMP_location_(self):
        self.mapview_EMP = MapView(zoom=15, lat=self._EMP_coor_lat, lon=self._EMP_coor_lon)
        self.marker_EMP = MapMarkerPopup(lat=self._EMP_coor_lat, lon=self._EMP_coor_lon,
                                         source='icons/location-pin.png')  # source='icons/pin.png'
        self.item_EMP_MAP_exec()

    def item_EMP_MAP_exec(self):
        # print(f'from table exec function \n {self.item_cycle_cols}\n {self.item_cycle_values}')
        try:
            print(type(self.mapview_EMP))
            print(type(self.marker_EMP))

            self.sm.current_screen.ids['EMP_location_'].add_widget(self.mapview_EMP)
            # self.sm.current_screen.ids['EMP_location_'].add_widget(self.marker_EMP)
            self.mapview_EMP.add_marker(self.marker_EMP)
        except:
            self.loading_Fetch_Error()
            # print('Not completed...')
        # return self.data_iten_cycle_raw

    ##################ASSGIMENT  DROP DOWN FUNCTIONS

    ########REGISTRSTION Employee DROPDOWN FUNCTION
    def data_employee(self, *args):
        self.data_employee_raw = pd.read_sql_query(
            "select * from iCAT_Employee",
            self._Conection())

        self.EMPLOYEES = self.data_employee_raw['Employee_ID'].to_list()

        self.employee_items = [
            {
                "viewclass": "OneLineListItem",
                "icon": "plus",
                "height": dp(56),
                "text": f" {i}",
                "right_text": f"ICON",
                "on_release": lambda x=f"{i}": self.set_employee_item(x),
            } for i in self.EMPLOYEES]

        self.emp_menu = MDDropdownMenu(
            caller=self.menu.ids.list_emp_assigning_to,
            items=self.employee_items,
            position="center",
            width_mult=4,
        )

        # print(self.EMPLOYEES)
        return self.EMPLOYEES

    def data_employee_location(self, *args):
        self.data_employee_location_raw = pd.read_sql_query(
            "select * from iCAT_Location where Agent_ASG = 'Yes'",
            self._Conection())

        self.EPM_LOCATION = self.data_employee_location_raw['Location_DSC'].to_list()

        self.emp_location_items = [
            {
                "viewclass": "OneLineListItem",
                "icon": "plus",
                "height": dp(56),
                "text": f" {i}",
                "right_text": f"ICON",
                "on_release": lambda x=f"{i}": self.set_employee_location_item(x),
            } for i in self.EPM_LOCATION]

        self.emp_location_menu = MDDropdownMenu(
            caller=self.menu.ids.list_emp_location,
            items=self.emp_location_items,
            position="center",
            width_mult=4,
        )
        # print(self.EPM_LOCATION)
        return self.EPM_LOCATION

    def data_item_return_condition(self, *args):
        self.data_item_contidion_raw = pd.read_sql_query(
            "select Condition_DSC from iCAT_Condition where NOT Condition_STC = 'INI'",
            self._Conection())

        self.ITEM_RETURN_CONDITION = self.data_item_contidion_raw['Condition_DSC'].to_list()

        self.item_condition_items = [
            {
                "viewclass": "OneLineListItem",
                "icon": "plus",
                "height": dp(56),
                "text": f" {i}",
                "right_text": f"ICON",
                "on_release": lambda x=f"{i}": self.set_return_contidion_item(x),
            } for i in self.ITEM_RETURN_CONDITION]

        self.item_condition_return_menu = MDDropdownMenu(
            caller=self.menu.ids.list_un_assigning_item_status,
            items=self.item_condition_items,
            position="center",
            width_mult=4,
        )

        # print(self.ITEM_RETURN_CONDITION)
        return self.ITEM_RETURN_CONDITION

    def data_item_return_location(self, *args):
        self.data_item_return_location_raw = pd.read_sql_query(
            "select Location_DSC from iCAT_Location where Deallocation_ASG = 'Yes'",
            self._Conection())

        self.ITEM_RETURN_LOCATION = self.data_item_return_location_raw['Location_DSC'].to_list()

        self.item_return_location_items = [
            {
                "viewclass": "OneLineListItem",
                "icon": "plus",
                "height": dp(56),
                "text": f" {i}",
                "right_text": f"ICON",
                "on_release": lambda x=f"{i}": self.set_return_place_item(x),
            } for i in self.ITEM_RETURN_LOCATION]

        self.item_return_location_menu = MDDropdownMenu(
            caller=self.menu.ids.list_un_assg_location,
            items=self.item_return_location_items,
            position="center",
            width_mult=4,
        )
        # print(self.ITEM_RETURN_LOCATION)
        return self.ITEM_RETURN_LOCATION

    def data_item_emp_discount(self, *args):

        self.ITEM_EMP_DISCOUNT = ['Generate Discount', 'Agent Exempt']

        # print(self.ITEM_EMP_DISCOUNT)
        return self.ITEM_EMP_DISCOUNT

    def data_item_scratch_condition(self, *args):
        self.data_item_scratch_condition_raw = pd.read_sql_query(
            "select  condition_DSC from iCAT_Condition where Condition_STC = 'YES' AND Condition_END = 'YES'",
            self._Conection())

        self.ITEM_SCRATCH_COMDITION = self.data_item_scratch_condition_raw['condition_DSC'].to_list()

        self.item_scratch_condition_items = [
            {
                "viewclass": "OneLineListItem",
                "icon": "plus",
                "height": dp(56),
                "text": f" {i}",
                "right_text": f"ICON",
                "on_release": lambda x=f"{i}": self.set_scratch_assigning_item(x),
            } for i in self.ITEM_SCRATCH_COMDITION]

        self.item_scratch_conditon_menu = MDDropdownMenu(
            caller=self.menu.ids.list_scratch_item_status,
            items=self.item_scratch_condition_items,
            position="center",
            width_mult=4,
        )
        # print(self.ITEM_SCRATCH_COMDITION)
        return self.ITEM_SCRATCH_COMDITION

    def data_employee_resp(self, *args):
        self.data_employee_resp_raw = pd.read_sql_query(
            "select * from iCAT_Employee",
            self._Conection())

        self.EMPLOYEES_RESP = self.data_employee_resp_raw['Employee_ID'].to_list()

        self.employee_resp_items = [
            {
                "viewclass": "OneLineListItem",
                "icon": "plus",
                "height": dp(56),
                "text": f" {i}",
                "right_text": f"ICON",
                "on_release": lambda x=f"{i}": self.set_employee_resp_item(x),
            } for i in self.EMPLOYEES_RESP]

        self.emp_menu_responsive = MDDropdownMenu(
            caller=self.reportery.ids.EMP_responsive_lister,
            items=self.employee_resp_items,
            position="center",
            width_mult=4,
        )

        # print(self.EMPLOYEES_RESP)
        return self.EMPLOYEES_RESP

    ##############################################################
    # MODULAR CREATION OF APP/SCREENS#########################
    ########################################################

    def build(self):
        self.theme_cls.theme_style = "Dark"  # "Light"
        self.theme_cls.material_style = "M3"
        LabelBase.register(
            name="Poppins-Regular",
            fn_regular="fonts/AmaticSC-Bold.ttf")

        theme_font_styles.append('Poppins-Regular')
        self.theme_cls.primary_palette = "Gray"
        self.theme_cls.primary_hue = "800"
        self.theme_cls.font_styles["Poppins-Regular"] = [
            "Poppins-Regular",
            16,
            False,
            0.15,
        ]

        # Creating Screen Manager
        self.sm = ScreenManager(transition=FadeTransition())

        # creating windows
        self.intro = Intro(name='intro')
        self.sm.add_widget(self.intro)
        self.log = LogIn(name='log')
        self.sm.add_widget(self.log)
        self.menu = MenuScreen(name='menu')
        self.sm.add_widget(self.menu)
        self.reportery = InventoryScreen(name='reports')
        self.sm.add_widget(self.reportery)

        # TODO: remember to create a module to invoke data from the real Test_TN data base!!!

        ########REGISTRSTION CATEGORIES DROPDOWN
        self.category_items = [
            {
                "viewclass": "OneLineListItem",
                "icon": "plus",
                "height": dp(56),
                "text": f" {i}",
                "right_text": f"ICON",
                "on_release": lambda x=f"{i}": self.set_item(x),
            } for i in self.data_categories()]

        self.cat_menu = MDDropdownMenu(
            caller=self.menu.ids.category,
            items=self.category_items,
            position="center",
            width_mult=4,
        )

        ########REGISTRSTION SUB_CATEGORIES  DROPDOWN
        self.sub_category_items = [
            {
                "viewclass": "OneLineListItem",
                "icon": "plus",
                "height": dp(56),
                "text": f" {s}",
                "right_text": f"ICON",
                "on_release": lambda x=f"{s}": self.set_sub_item(x),
            } for s in self.data_sub_categories()]

        self.sub_menu = MDDropdownMenu(
            caller=self.menu.ids.sub_category,
            items=self.sub_category_items,
            position="center",
            width_mult=4,
        )

        ########REGISTRSTION ACCOUNTS DROPDOWN
        self.account_items = [
            {
                "viewclass": "OneLineListItem",
                "icon": "plus",
                "height": dp(56),
                "text": f" {a}",
                "right_text": f"ICON",
                "on_release": lambda x=f"{a}": self.set_account_item(x),
            } for a in self.ALL_INITIAL_LISTS]

        self.account_menu = MDDropdownMenu(
            caller=self.menu.ids.account_category,
            items=self.account_items,
            position="center",
            width_mult=4,
        )

        self.item_dsc_items = [
            {
                "viewclass": "OneLineListItem",
                "icon": "plus",
                "height": dp(56),
                "text": f" {a}",
                "right_text": f"ICON",
                "on_release": lambda x=f"{a}": self.set_item_dsc_item(x),  #####
            } for a in self.ALL_INITIAL_LISTS]

        self.item_DSC_menu = MDDropdownMenu(
            caller=self.menu.ids.item_description_list,
            items=self.item_dsc_items,
            position="center",
            width_mult=4,
        )

        ########REGISTRSTION EMPLOYEE DROPDOWN(For Assignations!)
        self.employee_items = [
            {
                "viewclass": "OneLineListItem",
                "icon": "plus",
                "height": dp(56),
                "text": f" {i}",
                "right_text": f"ICON",
                "on_release": lambda x=f"{i}": self.set_employee_item(x),
            } for i in self.ALL_INITIAL_LISTS]

        self.emp_menu = MDDropdownMenu(
            caller=self.menu.ids.list_emp_assigning_to,
            items=self.employee_items,
            position="center",
            width_mult=4,
        )

        ########REGISTRSTION EMPLOYEE DROPDOWN(For Assignations!)
        self.emp_location_items = [
            {
                "viewclass": "OneLineListItem",
                "icon": "plus",
                "height": dp(56),
                "text": f" {i}",
                "right_text": f"ICON",
                "on_release": lambda x=f"{i}": self.set_employee_location_item(x),
            } for i in self.ALL_INITIAL_LISTS]

        self.emp_location_menu = MDDropdownMenu(
            caller=self.menu.ids.list_emp_location,
            items=self.emp_location_items,
            position="auto",
            width_mult=4,
        )

        self.item_condition_items = [
            {
                "viewclass": "OneLineListItem",
                "icon": "plus",
                "height": dp(56),
                "text": f" {i}",
                "right_text": f"ICON",
                "on_release": lambda x=f"{i}": self.set_return_contidion_item(x),
            } for i in self.ALL_INITIAL_LISTS]

        self.item_condition_return_menu = MDDropdownMenu(
            caller=self.menu.ids.list_un_assigning_item_status,
            items=self.item_condition_items,
            position="center",
            width_mult=4,
        )

        self.item_return_location_items = [
            {
                "viewclass": "OneLineListItem",
                "icon": "plus",
                "height": dp(56),
                "text": f" {i}",
                "right_text": f"ICON",
                "on_release": lambda x=f"{i}": self.set_return_place_item(x),
            } for i in self.ALL_INITIAL_LISTS]

        self.item_return_location_menu = MDDropdownMenu(
            caller=self.menu.ids.list_un_assg_location,
            items=self.item_return_location_items,
            position="center",
            width_mult=4,
        )
        self.item_emp_discount_items = [
            {
                "viewclass": "OneLineListItem",
                "icon": "plus",
                "height": dp(56),
                "text": f" {i}",
                "right_text": f"ICON",
                "on_release": lambda x=f"{i}": self.set_scratcher_employee_discount_item(x),
            } for i in self.data_item_emp_discount()]

        self.item_emp_discount_menu = MDDropdownMenu(
            caller=self.menu.ids.list_scratch_to_discount_agent,
            items=self.item_emp_discount_items,
            position="center",
            width_mult=4,
        )

        self.item_scratch_condition_items = [
            {
                "viewclass": "OneLineListItem",
                "icon": "plus",
                "height": dp(56),
                "text": f" {i}",
                "right_text": f"ICON",
                "on_release": lambda x=f"{i}": self.set_scratch_assigning_item(x),
            } for i in self.ALL_INITIAL_LISTS]

        self.item_scratch_conditon_menu = MDDropdownMenu(
            caller=self.menu.ids.list_scratch_item_status,
            items=self.item_scratch_condition_items,
            position="center",
            width_mult=4,
        )

        self.employee_resp_items = [
            {
                "viewclass": "OneLineListItem",
                "icon": "plus",
                "height": dp(56),
                "text": f" {i}",
                "right_text": f"ICON",
                "on_release": lambda x=f"{i}": self.set_employee_resp_item(x),
            } for i in self.ALL_INITIAL_LISTS]

        self.emp_menu_responsive = MDDropdownMenu(
            caller=self.reportery.ids.EMP_responsive_lister,
            items=self.employee_resp_items,
            position="center",
            width_mult=4,
        )

        ################################################################
        return self.sm  #############SCREEEN MANAGER!!!###############
        ########################################################

    #######################ALL FUNCTIONS GOES AFTER THIS MODUE!#########################

    ###Intro log in animation###
    def on_start(self):
        Clock.schedule_once(self.logg, 7)

    def logg(self, *args):
        self.sm.current = 'menu'  # change to 'log' eventualy.

    ####Generative States of Label and Display form database!
    def set_item(self, text__item):
        self.menu.ids.category.text = text__item
        self.category_requested = text__item

        self.cat_id = pd.read_sql_query(
            f"select Category_ID, Category_CD from iCAT_Category where Category_DSC='{self.category_requested}' ",
            self._Conection())

        ########Realtive tags and to print label info!
        self.category_id_requested = self.cat_id['Category_ID'][0]
        self.to_label_cat_id = self.cat_id['Category_CD'][0]
        self.menu.ids.label_suffix_category.text = self.to_label_cat_id
        # print(f'from set_item: {self.category_id_requested}')
        self.cat_menu.dismiss()

    def set_sub_item(self, text__item):
        self.menu.ids.sub_category.text = text__item
        self.sub_category_requested = text__item

        self.sub_cat_id = pd.read_sql_query(
            f"select Sub_Category_ID from iCAT_Sub_Category where Sub_Category_DSC='{self.sub_category_requested}' ",
            self._Conection())
        self.sub_cat_DSC = pd.read_sql_query(
            f"select Sub_Category_DSC from iCAT_Sub_Category where Sub_Category_DSC='{self.sub_category_requested}' ",
            self._Conection())

        ########Realtive tags and to print label info!
        self.to_print_sub_cat_DSC = self.sub_cat_DSC['Sub_Category_DSC'][0]
        self.to_print_sub_cat_id = str(self.sub_cat_id['Sub_Category_ID'][0])

        self.menu.ids.label_sub_suffix_category.text = self.to_print_sub_cat_id
        self.sub_category_id_requested = self.to_print_sub_cat_id

        # print(f'from set_sub_item: {self.to_print_sub_cat_id}')
        self.sub_menu.dismiss()

    def set_account_item(self, text__item):
        self.menu.ids.account_category.text = text__item
        self.account_requested = text__item

        self.account_id = pd.read_sql_query(
            f"select Account_CD, Account_ID from iCAT_Account where Account_DSC='{self.account_requested}' ",
            self._Conection())

        # print(self.account_id)
        # print(f'from set_account_item: {self.account_id_selected}')

        ########Realtive tags and to print label info!
        self.to_print_account_id = str(self.account_id['Account_CD'][0])
        self.account_id_selected = str(self.account_id['Account_ID'][0])

        self.menu.ids.label_suffix_account.text = self.to_print_account_id
        try:
            self.index_phaser_raw = pd.read_sql_query(
                f"exec ixSP_Get_Product_Index '{self.account_requested}','{self.category_requested}','{self.to_print_sub_cat_DSC}' ",
                self._Conection())
            self.index_phaser = self.index_phaser_raw[''][0]

            if self.index_phaser == None or self.index_phaser == '':
                self.index_phaser = '1'
                self.menu.ids.label_suffix_account_series.text = str(self.index_phaser)
            else:
                self.menu.ids.label_suffix_account_series.text = str(self.index_phaser)

            print(self.index_phaser)

        except:
            print('unable to check on INdex Phase')
            # TODO: make dialog for please select Category, sub category before to continue registration!

        print(self.account_requested)
        self.account_menu.dismiss()

    def set_item_dsc_item(self, text__item):
        self.menu.ids.item_description_list.text = text__item
        self.item_dsc_requested = text__item
        self.sub_cat_DSC_header = text__item

        # print(self.item_dsc_requested)
        self.item_DSC_menu.dismiss()

    ####Generative States of Label and Display form database!
    def set_employee_item(self, text__item):
        self.menu.ids.list_emp_assigning_to.text = text__item
        self.employee_requested = text__item
        ########Calling First Name

        self.emp_info_raw = pd.read_sql_query(
            f"select First_Name, Last_Name, Account_ID from iCAT_Employee where Employee_ID ='{self.employee_requested}'",
            self._Conection())
        # print(self.emp_info_raw)
        ########Calling Last Name

        self.emp_name = self.emp_info_raw['First_Name'][0]
        self.emp_last_name = self.emp_info_raw['Last_Name'][0]
        self.assgn_acc_id = self.emp_info_raw['Account_ID'][0]
        self.full_name = f'{self.emp_name} {self.emp_last_name}'
        self.emp_account_raw = pd.read_sql_query(
            f"select Account_DSC from iCAT_Account where Account_ID='{self.assgn_acc_id}'",
            self._Conection())
        # print(self.assgn_acc_id)

        #######Realtive tags and to print label info!
        self.assgn_acc_dsc = self.emp_account_raw['Account_DSC'][0]

        self.menu.ids.list_assg_item_to_emp.text = f'{self.full_name} from {self.assgn_acc_dsc}'

        self.emp_menu.dismiss()

    def set_employee_location_item(self, text__item):
        self.menu.ids.list_emp_location.text = text__item
        self.employee_location_requested = text__item

        self.emp_location_to_record_raw = pd.read_sql_query(
            f"select Location_ID from iCAT_location where Location_DSC ='{self.employee_location_requested}'",
            self._Conection())
        # print(self.emp_location_to_record_raw)
        self.emp_location_to_record = self.emp_location_to_record_raw['Location_ID'][0]
        #######IF work from home verify address from geo locator!
        #######IF no Address registered, use Python to find the geocodes from Address!
        self.emp_location_menu.dismiss()  # cha ge the menu name

    def set_return_contidion_item(self, text__item):
        self.menu.ids.list_un_assigning_item_status.text = text__item
        self.item_contidion_requested = text__item

        if self.item_contidion_requested == 'Scratch' or self.item_contidion_requested == 'Bad Condition' or self.item_contidion_requested == 'Physically Lost':
            self.show_alert_dialog_Iten_scratch_selected()
            # print('Scratch confirmation')
        else:
            self.item_return_condition_getter_raw = pd.read_sql_query(
                f"select Condition_ID from iCAT_Condition where Condition_DSC='{self.item_contidion_requested}'",
                self._Conection())
            self.item_return_condition_getter = self.item_return_condition_getter_raw['Condition_ID'][0]
            # print(self.item_return_condition_getter)
        #######IF work from home verify address from geo locator!
        #######IF no Address registered, use Python to find the geocodes from Address!
        self.item_condition_return_menu.dismiss()  # cha ge the menu name

    def set_return_place_item(self, text__item):
        self.menu.ids.list_un_assg_location.text = text__item
        self.item_return_location_requested = text__item
        if self.item_return_location_requested == 'Scratch':
            self.show_alert_dialog_Iten_scratch_selected()
        # TODO: IF work from home verify address from geo locator!! IF no Address registered, use Python to find the geocodes from Address!
        # TODO: Get IP Addres with function def IP_Address_Decoder(self):
        self.item_return_location_menu.dismiss()  # cha ge the menu name

    #

    ####Generative States of Label and Display form database!
    def set_scratcher_employee_discount_item(self, text__item):
        self.menu.ids.list_scratch_to_discount_agent.text = text__item
        self.discount_requested = text__item
        # TODO: If discout, generate the letter discount with the price, description and send it over destinators including contability, mamagements, IT, HR agent.

        self.item_emp_discount_menu.dismiss()

    def set_scratch_assigning_item(self, text__item):
        self.menu.ids.list_scratch_item_status.text = text__item
        self.item_scratch_condition_requested = text__item
        self.item_scratch_condition_ID_req_raw = pd.read_sql_query(
            f"select Condition_ID from iCAT_Condition where Condition_DSC ='{self.item_scratch_condition_requested}'",
            self._Conection())
        self.item_scratch_to_scratcher_do = self.item_scratch_condition_ID_req_raw['Condition_ID'][0]

        # print(self.item_scratch_to_scratcher_do)
        if self.item_scratch_to_scratcher_do == '1006':
            self.item_scratch_to_scratcher_do = '1005'
        #######IF work from home verify address from geo locator!
        #######IF no Address registered, use Python to find the geocodes from Address!
        self.item_scratch_conditon_menu.dismiss()  # cha ge the menu name

    def set_employee_resp_item(self, text__item):
        self.reportery.ids.EMP_responsive_lister.text = text__item
        self.employee_resp_requested = text__item
        ########Calling First Name
        self.emp_resp_info_raw = pd.read_sql_query(
            f"select First_Name, Last_Name, Account_ID from iCAT_Employee where Employee_ID ='{self.employee_resp_requested}'",
            self._Conection())
        # print(self.emp_resp_info_raw)
        # print(self.employee_resp_requested)
        self.Data_Responsive_EMP()

        # ########Calling Last Name

        self.resp_emp_name = self.emp_resp_info_raw['First_Name'][0]
        self.resp_emp_last_name = self.emp_resp_info_raw['Last_Name'][0]
        self.resp_assgn_acc_id = self.emp_resp_info_raw['Account_ID'][0]
        self.resp_full_name = f'{self.resp_emp_name} {self.resp_emp_last_name}'
        self.resp_emp_account_raw = pd.read_sql_query(
            f"select Account_DSC from iCAT_Account where Account_ID='{self.resp_assgn_acc_id}'",
            self._Conection())
        # print(self.resp_assgn_acc_id)

        #######Realtive tags and to print label info!
        self.resp_assgn_acc_dsc = self.resp_emp_account_raw['Account_DSC'][0]

        self.reportery.ids.list_EMP_responsive_w_name.text = f'{self.resp_full_name} from {self.resp_assgn_acc_dsc}'
        # if self.data_EMP_cycle_table:
        #     self.remove_widget(self.data_EMP_cycle_table)
        self.emp_menu_responsive.dismiss()

    #####GENERATING AND DISPLAYING LABEL QR#################
    def QR_gen(self, *args):
        try:
            # Invoke QR Generator
            qr = qrcode.QRCode(
                version=1,
                error_correction=qrcode.constants.ERROR_CORRECT_L,
                box_size=10,
                border=4,
            )
            ### Add data to be generated
            self.QR_product_Code = f'ICON_{self.to_label_cat_id}{self.to_print_sub_cat_id}{self.to_print_account_id}{self.index_phaser}'
            qr.add_data(self.QR_product_Code)
            qr.make(fit=True)
            self.img = qr.make_image(fill_color="black", back_color="white")
            draw = ImageDraw.Draw(im=self.img)
            ##header taken dirctly from Item_DSC selector
            ### Add text to the image
            font = ImageFont.truetype(font='fonts/Poppins-SemiBold.ttf', size=18)
            draw.text(xy=(70, 250), text=self.QR_product_Code, font=font, fill='#000000')
            draw.text(xy=(35, 10), text=self.sub_cat_DSC_header, font=font, fill='#000000')
            # img.show()
            # print(type(img))
            self.labeled_qr = self.img
            ### Convert to string
            canvas_img = self.labeled_qr
            data = BytesIO()
            canvas_img.save(data, format='png')
            data.seek(0)
            self.im = CoreImage(BytesIO(data.read()), ext='png')
            self.beeld = kiImage()
            self.beeld.texture = self.im.texture

            self.menu.ids.qrshow.texture = self.beeld.texture
            return self.img
        except AttributeError:
            self.show_alert_dialog_QR_not_Saver()

    def save_QR_to_disc(self, *args):
        # self.labeled_qr.save(f'{self.QR_product_Code}.png')
        self.New_Porduct_Registration()

        # self.label_saved_successfuly()
        # self.Product_validator_gate()

    def New_Porduct_Registration(self, *args):

        # TODO: Verify if record exist after the compeltion of the insert new p and show the successfull message
        ########Worked already but takes too long
        try:

            ####Inserting new product Query!
            self.return_from_save_raw = pd.read_sql_query(
                f"insert into iCAT_Item(QR,Item_DSC,Category_ID,Sub_Category_ID,Index_SRS,QR_Label_IMG,Account_ID) values( '{self.QR_product_Code}', '{self.item_dsc_requested}', '{self.category_id_requested}', '{self.to_print_sub_cat_id}', '{str(self.index_phaser)}', '{self.QR_gen()}', '{self.account_id_selected}')",
                self._Conection())
            # print(self.return_from_save_raw)
        except:
            try:
                self.response_check = pd.read_sql_query(
                    f"exec ixSP_Existing_Item_checker '{self.QR_product_Code}' ",
                    # on this query change for to be saved QR
                    self._Conection())
                self.record_exist_check = self.response_check['Record'][0]
                self.record_exist_Item_ID = self.response_check['Item_ID'][0]
                print(self.record_exist_check)
                print(self.record_exist_Item_ID)
                if self.record_exist_check == 'Record Exist':
                    self.label_saved_successfuly()
                    print(
                        f'product {self.QR_product_Code} Saved Succesfully! {self.record_exist_check}, please add a new')  ### create dialog on record already exist.
                    #############################################
                    #######Logger for Item Puchase registration
                    ###########################################
                    self.TRX_Item_Registration_Logger()

                elif self.record_exist_check == 'Record does not Exist':
                    # create the query to create a record! hOHOHO on insert into iCAT_Item(QR_Label_IMG, ...) values('{self.QR_gen()}', ... )
                    print(
                        f'product {self.QR_product_Code} not found {self.record_exist_check}')  ### dialog and use  delay the record created for 2 secs
            except:
                print('Create dialog when no item is found or transaction is not competed.')
                print('Unable to record...')
                # insert the record checker

    #######Logger for Item Puchase registration
    def TRX_Item_Registration_Logger(self):
        try:

            pd.read_sql_query(
                f"insert into iTRX_Movement(Moment_Type_ID, Date_Time, Item_ID, Employee_ID, Location_ID, Condition_ID, User_ID) values('1', CURRENT_TIMESTAMP, '{str(self.record_exist_Item_ID)}', '99999', '1', '1', '3')",
                self._Conection())
        except:
            print('Pssed')
            # TODO: Change for transaction regusted compelte dialog!
            self.label_saved_successfuly()

    def TRX_Item_Asignation_Logger(self, *args):

        try:  # Moment_Type_ID, Date_Time, Item_ID, Employee_ID, Location_ID, Condition_ID, User_ID
            pd.read_sql_query(
                f"insert into iTRX_Movement(Moment_Type_ID, Date_Time, Item_ID, Employee_ID, Location_ID, Condition_ID, User_ID) values('2', CURRENT_TIMESTAMP, '{str(self.Current_Item_ID)}', '{str(self.employee_requested)}', '{str(self.emp_location_to_record)}', '{str(self.item_current_condition_ID)}', '{str(self.user_ID)}' )",
                self._Conection())
        except:
            self.product_assigend_successfuly()

    def TRX_Item_Deallocation_Logger(self, *args):
        try:  # Moment_Type_ID , Date_Time           , Item_ID                      , Employee_ID                                 , Location_ID                             , Condition_ID                      , User_ID
            pd.read_sql_query(
                f"insert into iTRX_Movement(Moment_Type_ID, Date_Time, Item_ID, Employee_ID, Location_ID, Condition_ID, User_ID) values('3', CURRENT_TIMESTAMP, '{str(self.Current_Item_ID)}', '{str(self.on_deallocation_scratch_emp_ID)}', '{str(self.on_deallocation_scratch_loc_ID)}', '{str(self.item_return_condition_getter)}', '{str(self.user_ID)}' )",
                self._Conection())
        except:
            self.product_un_assigend_successfuly()

    def TRX_Item_scratcher_Logger(self, *args):
        try:  # Moment_Type_ID , Date_Time           , Item_ID                      , Employee_ID                              , Location_ID                                  , Condition_ID                      , User_ID
            pd.read_sql_query(
                f"insert into iTRX_Movement(Moment_Type_ID, Date_Time, Item_ID, Employee_ID, Location_ID, Condition_ID, User_ID) values('6', CURRENT_TIMESTAMP, '{str(self.Current_Item_ID)}', '{str(self.on_deallocation_scratch_emp_ID)}', '{str(self.on_deallocation_scratch_loc_ID)}', '{str(self.item_scratch_to_scratcher_do)}', '{str(self.user_ID)}' )",
                self._Conection())
        except:
            self.product_scratched_successfuly()

    ##
    ##

    def Move_to_Scratcher_do(self, *args):
        self.menu.ids.bottom_nav.switch_tab('scratch')

    def Move_to_Assignation_do(self, *args):
        self.menu.ids.bottom_nav.switch_tab('assign')

    def Move_to_allocation_do(self, *args):
        self.menu.ids.bottom_nav.switch_tab('assign')
        self.menu.ids.as_tabs.switch_tab('Un-Assign')

    def Move_back_to_Scanner_do(self, *args):
        self.menu.ids.bottom_nav.switch_tab('scan')
        self.menu.ids.tabs.switch_tab('Scanner')
        self.master_reset_do()

    # Todo find a way to send image from memory(or temporal file) to email attachment
    def Label_email_dialer(self, attachment):
        try:
            attachment = f'{self.QR_product_Code}.png'

            msg = MIMEMultipart()
            msg['Subject'] = f'New Printable label: {self.QR_product_Code}'
            msg['Body'] = f'''Hello,
            This is a QR label for Icon Solutions Product!: {self.QR_product_Code}
            '''

            msg['From'] = "rsolis@clientservice1.com"
            msg['To'] = "rsolis@clientservice1.com"

            part = MIMEBase('application', "octet-stream")
            part.set_payload(open(attachment, "rb").read())
            encoders.encode_base64(part)

            part.add_header('Content-Disposition', 'attachment', filename=attachment)

            msg.attach(part)

            with smtplib.SMTP('smtp.gmail.com', 587) as server:
                server.ehlo()
                server.starttls()
                server.ehlo()

                server.login('rsolis@clientservice1.com', 'Rsservice3334#')
                server.send_message(msg)
        except:
            self.show_alert_dialog_No_Item_to_email()

    def open_table_item(self):  # , instance
        self.data_item_cycle_table.open()  # call from scan button the fucntion to call the values on the table

    def remove_item_table(self):
        try:
            self.sm.current_screen.ids['table_holder_item'].remove_widget(self.data_item_cycle_table)
        except:
            print('No Widget was deleted')

    #
    def remove_EMP_table(self):
        try:
            self.sm.current_screen.ids['EMP_responsive_'].remove_widget(self.data_EMP_cycle_table)
        except:
            print('Unable to Print')

    def remove_EMP_MAP_table(self):
        try:
            self.sm.current_screen.ids['EMP_location_'].remove_widget(self.mapview_EMP)
        except:
            print('Unable to remotable or does not exist!')

    def print_qr(self):
        # TODO: Make the discuont/recived/Assigned Letter for agent to be printed!!!
        pass

    def master_reset_do(self):
        self.remove_item_table()
        self.remove_EMP_table()
        self.remove_EMP_MAP_table()
        #####From _Scaner / _Evals
        self._c_getter = None
        self._in_val = None
        self._checker_qr = None
        #####From SQL_Main_Request
        self._return_code = None
        self.menu.ids.list_icon.text = 'Load Entry'
        self.menu.ids.list_category.text = 'Load Entry'
        self.menu.ids.list_sub_category.text = 'Load Entry'
        self.menu.ids.list_item_dsc.text = 'Load Entry'
        self.menu.ids.list_item_cycle_dsc.text = 'Load Entry'
        self.Current_Item_ID = None
        ####From SQL_last_move_Request
        self.item_ID_request = None
        self.item_last_move = None
        self.last_movement_type_checker = None
        self.item_current_condition_ID = None
        self.on_deallocation_scratch_emp_ID = None
        self.on_deallocation_scratch_loc_ID = None
        ####from SQL_Sub_requests(self):
        self.QR_code_on_last_move = None
        self.menu.ids.list_QR_code.text = 'Load Entry'
        # Item_Condition
        self.menu.ids.list_item_condition.text = 'Load Entry'
        # Current Status
        self.menu.ids.list_status.text = 'Load Entry'
        self.menu.ids.list_transaction_time.text = 'Load Entry'
        self.menu.ids.list_user_made.text = 'Load Entry'
        # Assigned to
        self.menu.ids.list_emp_name.text = 'Load Entry'
        self.menu.ids.list_location_cat.text = 'Load Entry'
        self.menu.ids.list_utm_x.text = 'Load Entry'
        self.menu.ids.list_utm_y.text = 'Load Entry'
        self.menu.ids.list_emp_id.text = 'Load Entry'
        ####Item Life Cycle tab on Scan Screen
        self.menu.ids.list_item_cycle_qr.text = 'Load Entry'
        ###Assignation Tab on Assginations SCREEN
        self.menu.ids.list_assg_qr.text = 'Load Entry'
        self.menu.ids.list_assg_item_dsc.text = 'Load Entry'
        self.menu.ids.list_assg_item_condition.text = 'Load Entry'
        ###Un-Assignation Tab on Assginations SCREEN
        self.menu.ids.list_un_assg_qr.text = 'Load Entry'
        self.menu.ids.list_un_assg_item_dsc.text = 'Load Entry'
        self.menu.ids.list_un_assg_item_las_condition.text = 'Load Entry'
        self.menu.ids.list_un_assg_agent.text = 'Load Entry'
        ###Scratch Tab on Scratch SCREEN
        self.menu.ids.list_scratch_qr.text = 'Load Entry'
        self.menu.ids.list_scratch_item_dsc.text = 'Load Entry'
        self.menu.ids.list_scratch_item_condition.text = 'Load Entry'
        self.menu.ids.list_scratch_last_agent.text = 'Load Entry'
        self.to_dealocation_dialog_emp_name = None
        ####FromSQL_COMP_requests(self):
        # account class
        self._return_COMP_Account = None
        self.menu.ids.list_account.text = 'Load Entry'
        self.menu.ids.list_emp_account.text = 'Load Entry'
        self.menu.ids.list_account_index.text = 'Load Entry'
        self.menu.ids.list_emp_position.text = 'Load Entry'
        ###From Data_Item_Cycle(self):
        self.data_iten_cycle_raw = None
        ###From Data_Item_Cycle_table(self):
        self.menu.ids.list_item_cycle_purchase_date.text = 'Load Entry'
        self.DATA_ITEM = None
        self.item_cycle_cols = None
        self.item_cycle_values = None
        # self.data_item_cycle_table = None
        ###From Data_Responsive_EMP(self, *args):
        self.EMP_responsive_log = None
        self._EMP_coor_lat = None
        self._EMP_coor_lon = None
        ####From Data_EMP_Responsive_table(self):
        self.DATA_EMP = None
        self.EMP_cycle_cols = None
        self.EMP_cycle_values = None
        #########MAPS Creation
        # Map_EMP_location_(self):
        self.mapview_EMP = None
        self.marker_EMP = None
        # From def set_item(self, text__item):
        self.menu.ids.category.text = 'Load Entry'
        self.category_requested = 'Load Entry'
        self.cat_id = None
        ########Realtive tags and to print label info!
        self.category_id_requested = None
        self.to_label_cat_id = None
        self.menu.ids.label_suffix_category.text = 'Load Entry'
        # From def set_sub_item(self, text__item):
        self.menu.ids.sub_category.text = 'Load Entry'
        self.sub_category_requested = 'Load Entry'
        self.sub_cat_id = None
        self.sub_cat_DSC = None
        ########Realtive tags and to print label info!
        self.to_print_sub_cat_DSC = None
        self.to_print_sub_cat_id = None
        self.menu.ids.label_sub_suffix_category.text = 'Load Entry'
        self.sub_category_id_requested = None
        # From def set_account_item(self, text__item):
        self.menu.ids.account_category.text = 'Load Entry'
        self.account_requested = None
        self.account_id = None
        ########Realtive tags and to print label info!
        self.to_print_account_id = None
        self.account_id_selected = None
        self.menu.ids.label_suffix_account.text = 'Load Entry'
        self.index_phaser_raw = None
        self.index_phaser = None
        # From def set_item_dsc_item(self, text__item):
        self.menu.ids.item_description_list.text = 'Load Entry'
        self.item_dsc_requested = 'Load Entry'
        self.sub_cat_DSC_header = 'Load Entry'
        ####Generative States of Label and Display form database!
        # From def set_employee_item(self, text__item):
        self.menu.ids.list_emp_assigning_to.text = 'Load Entry'
        self.employee_requested = 'Load Entry'
        ########Calling First Name
        self.emp_info_raw = None
        ########Calling Last Name
        self.emp_name = None
        self.emp_last_name = None
        self.assgn_acc_id = None
        self.full_name = None
        self.emp_account_raw = None
        #######Realtive tags and to print label info!
        self.assgn_acc_dsc = None
        self.menu.ids.list_assg_item_to_emp.text = 'Load Entry'
        # From def set_employee_location_item(self, text__item):
        self.menu.ids.list_emp_location.text = 'Load Entry'
        self.employee_location_requested = 'Load Entry'
        self.emp_location_to_record_raw = None
        # print(self.emp_location_to_record_raw)
        self.emp_location_to_record = None
        # From def set_return_contidion_item(self, text__item):
        self.menu.ids.list_un_assigning_item_status.text = 'Load Entry'
        self.item_contidion_requested = 'Load Entry'
        # print('Scratch confirmation')
        self.item_return_condition_getter_raw = None
        self.item_return_condition_getter = None
        # From def set_return_place_item(self, text__item):
        self.menu.ids.list_un_assg_location.text = 'Load Entry'
        self.item_return_location_requested = 'Load Entry'
        ####Generative States of Label and Display form database!
        # From def set_scratcher_employee_discount_item(self, text__item):
        self.menu.ids.list_scratch_to_discount_agent.text = 'Load Entry'
        self.discount_requested = 'Load Entry'
        # From def set_scratch_assigning_item(self, text__item):
        self.menu.ids.list_scratch_item_status.text = 'Load Entry'
        self.item_scratch_condition_requested = 'Load Entry'
        self.item_scratch_condition_ID_req_raw = None
        self.item_scratch_to_scratcher_do = None
        # From def set_employee_resp_item(self, text__item):
        self.reportery.ids.EMP_responsive_lister.text = 'Load Entry'
        self.employee_resp_requested = None
        ########Calling First Name
        self.emp_resp_info_raw = None
        self.resp_emp_name = None
        self.resp_emp_last_name = None
        self.resp_assgn_acc_id = None
        self.resp_full_name = None
        self.resp_emp_account_raw = None
        #######Realtive tags and to print label info!
        self.resp_assgn_acc_dsc = None
        self.reportery.ids.list_EMP_responsive_w_name.text = 'Load Entry'
        # From def QR_gen(self, *args):
        self.QR_product_Code = None
        self.img = None
        self.labeled_qr = None
        self.menu.ids.qrshow.texture = None
        # From def New_Porduct_Registration(self, *args):
        self.return_from_save_raw = None
        self.response_check = None
        self.record_exist_check = None
        self.record_exist_Item_ID = None

        ######################################################

    #########################################################################
    ##########################ALERT DIALOGS!!!!!###############################
    ########################################################################

    # AFTER LABEL CREATION DIALOG
    def show_alert_dialog_on_save(self):
        if not self.dialog:
            self.dialog = MDDialog(
                title="Done with the Label?",
                text="Please select one of the following options.",
                buttons=[
                    MDFlatButton(
                        text="SAVE",
                        text_color=self.theme_cls.primary_color, on_press=self.close_dialog,
                        on_release=self.save_QR_to_disc
                    ),
                    MDFlatButton(
                        text="EMAIL", text_color=self.theme_cls.primary_color, on_press=self.close_dialog

                    ),
                    MDFlatButton(
                        text="CANCEL", text_color=self.theme_cls.primary_color, on_release=self.close_dialog
                    ),
                ],
            )
        self.dialog.open()

    def show_alert_dialog_No_Item_to_email(self):

        if not self.dialog:
            self.dialog = MDDialog(
                title="Unable to Send",
                text="Please complete Generating the Icon Product Label",
                buttons=[
                    MDFlatButton(
                        text="OK", text_color=self.theme_cls.primary_color, on_release=self.close_dialog
                    ),

                    MDFlatButton(
                        text="CANCEL", text_color=self.theme_cls.primary_color, on_release=self.close_dialog
                    ),
                ],
            )
            self.dialog.open()

    def show_alert_dialog_Iten_scratch_selected(self):
        if not self.dialog:
            self.dialog = MDDialog(
                title=f"Is {self._c_getter} Scratch?",
                text="Please confirm if product needs to get Refurbished or Declared Scratch",
                buttons=[
                    MDFlatButton(
                        text="SCRATCH", text_color=self.theme_cls.primary_color, on_press=self.close_dialog,
                        on_release=self.Move_to_Scratcher_do,
                    ),

                    MDFlatButton(
                        text="CANCEL", text_color=self.theme_cls.primary_color, on_release=self.close_dialog
                    ),
                ],
            )
        self.dialog.open()

    # No Item Scanned before moving on!
    def show_alert_dialog_No_Item_Secanned(self):
        if not self.dialog:
            self.dialog = MDDialog(
                title="No Item Have Being Scanned!",
                text="Please scan a Valid Icon Product Label",
                buttons=[
                    MDFlatButton(
                        text="OK", text_color=self.theme_cls.primary_color, on_release=self.close_dialog
                    ),

                    MDFlatButton(
                        text="CANCEL", text_color=self.theme_cls.primary_color, on_release=self.close_dialog
                    ),
                ],
            )
        self.dialog.open()

    # No Item Scanned before moving on!
    def show_alert_dialog_Item_Secanned(self):
        if not self.dialog:
            self.dialog = MDDialog(
                title=f"Icon Product {self._c_getter} Successfully Detected!",
                text="Please press OK to continue.",
                buttons=[
                    MDFlatButton(
                        text="OK", text_color=self.theme_cls.primary_color, on_release=self.close_dialog
                    ),

                ],
            )
        self.dialog.open()

    # No Item Scanned before moving on!
    def show_alert_dialog_Iten_with_no_moves(self):
        if not self.dialog:
            self.dialog = MDDialog(
                title=f"No Assignations yet for {self._c_getter}",
                text="Please assign product to agent or send to Scratch",
                buttons=[
                    MDFlatButton(
                        text="OK", text_color=self.theme_cls.primary_color, on_release=self.close_dialog
                    ),

                    MDFlatButton(
                        text="CANCEL", text_color=self.theme_cls.primary_color, on_release=self.close_dialog
                    ),
                ],
            )
        self.dialog.open()

    # No Item Scanned before moving on!
    def show_alert_dialog_icon_Item_Secanned_not_saved(self):
        if not self.dialog:
            self.dialog = MDDialog(
                title=f"Oops Icon Label {self._c_getter} Not registered!",
                text="Please make sure product was registered correctly.",
                buttons=[
                    MDFlatButton(
                        text="OK", text_color=self.theme_cls.primary_color, on_release=self.close_dialog
                    ),

                ],
            )
        self.dialog.open()

    ###########For QR not Complete Scan
    def show_alert_dialog_QR_not_Saver(self):
        if not self.dialog:
            self.dialog = MDDialog(
                title="Missing a Selection",
                text="Please select respective Category, Sub_Category, Account and/or Item Description",
                buttons=[
                    MDFlatButton(
                        text="OK", text_color=self.theme_cls.primary_color, on_release=self.close_dialog
                    ),

                ],
            )
        self.dialog.open()

    # when saved ok
    def label_saved_successfuly(self, *args):
        if not self.dialog:
            self.dialog = MDDialog(
                title="Saved!",
                text=f"A new label for {self.QR_code_on_last_move} was saved Successfully",
                buttons=[
                    MDFlatButton(
                        text="THANKS!", text_color=self.theme_cls.primary_color, on_release=self.close_dialog
                    ),

                ],
            )
        self.dialog.open()

    def loading_please_wait(self, *args):
        if not self.dialog:
            self.dialog = MDDialog(
                title="Loading...",
                text=f"Please wait a moment short.",
                buttons=[
                    MDFlatButton(
                        text="THANKS!", text_color=self.theme_cls.primary_color, on_release=self.close_dialog
                    ),

                ],
            )
        self.dialog.open()

    def show_alert_dialog_sql_COMP_not_fetchable(self):
        if not self.dialog:
            self.dialog = MDDialog(
                title="Fetching Data Error!",
                text="Sorry we had troubles Fetching some information, please try again",
                buttons=[
                    MDFlatButton(
                        text="TRY AGAIN",
                        text_color=self.theme_cls.primary_color, on_press=self.close_dialog,
                        on_release=self.save_QR_to_disc
                    ),

                    MDFlatButton(
                        text="CANCEL", text_color=self.theme_cls.primary_color, on_release=self.close_dialog
                    ),
                ],
            )
        self.dialog.open()

    def show_alert_dialog_Assignation_to_Agent(self, *args):
        if not self.dialog:
            self.dialog = MDDialog(
                title=f"Assigning Item {self._c_getter}",
                text=f"Complete Assignation to agent?",
                buttons=[
                    MDFlatButton(
                        text="YES", text_color=self.theme_cls.primary_color, on_press=self.close_dialog,
                        on_release=self.TRX_Item_Asignation_Logger
                    ),
                    MDFlatButton(
                        text="CANCEL", text_color=self.theme_cls.primary_color, on_release=self.close_dialog
                    ),

                ],
            )
        self.dialog.open()

    def show_alert_dialog_dealocation_from_Agent(self, *args):
        if not self.dialog:
            self.dialog = MDDialog(
                title=f"Un-Assigning Item {self._c_getter}",
                text=f"Complete Item Return from agent {self.to_dealocation_dialog_emp_name}?",
                buttons=[
                    MDFlatButton(
                        text="YES", text_color=self.theme_cls.primary_color, on_press=self.close_dialog,
                        on_release=self.TRX_Item_Deallocation_Logger,
                    ),
                    MDFlatButton(
                        text="CANCEL", text_color=self.theme_cls.primary_color, on_release=self.close_dialog
                    ),

                ],
            )
        self.dialog.open()

    def show_alert_dialog_scratch_from_Agent_do(self, *args):
        if not self.dialog:
            self.dialog = MDDialog(
                title=f"Scratch request",
                text=f"Proceed to declare Item {self._c_getter} as Scratch?",
                buttons=[
                    MDFlatButton(
                        text="PROCEED", text_color=self.theme_cls.primary_color, on_press=self.close_dialog,
                        on_release=self.TRX_Item_scratcher_Logger
                    ),
                    MDFlatButton(
                        text="CANCEL", text_color=self.theme_cls.primary_color, on_release=self.close_dialog
                    ),

                ],
            )
        self.dialog.open()

    def loading_Fetch_Error(self, *args):
        if not self.dialog:
            self.dialog = MDDialog(
                title="Sorry Data could not be fetched...",
                text=f"Please try again.",
                buttons=[
                    MDFlatButton(
                        text="OK", text_color=self.theme_cls.primary_color, on_release=self.close_dialog
                    ),

                ],
            )
        self.dialog.open()

    # TODO: Clasify these dialogs>>>>>>
    def show_alert_dialog_moving_to_assgin(self, *args):
        if not self.dialog:
            self.dialog = MDDialog(
                title=f"Assignations",
                text=f"Ready to Make Assignment on Product Item {self._c_getter}?",
                buttons=[
                    MDFlatButton(
                        text="ASSIGN", text_color=self.theme_cls.primary_color, on_press=self.close_dialog,
                        on_release=self.Move_to_Assignation_do
                    ),
                    MDFlatButton(
                        text="CANCEL", text_color=self.theme_cls.primary_color, on_release=self.close_dialog
                    ),
                ],
            )
        self.dialog.open()

    def show_alert_dialog_moving_to_unassing(self, *args):
        if not self.dialog:
            self.dialog = MDDialog(
                title=f"Ready to Un-Assign",
                text=f"Deallocating Product {self._c_getter} from {self.to_dealocation_dialog_emp_name}?",
                buttons=[
                    MDFlatButton(
                        text="PROCEED", text_color=self.theme_cls.primary_color, on_press=self.close_dialog,
                        on_release=self.Move_to_allocation_do
                    ),
                    MDFlatButton(
                        text="CANCEL", text_color=self.theme_cls.primary_color, on_release=self.close_dialog
                    ),
                ],
            )
        self.dialog.open()

    def show_alert_dialog_item_in_scratch(self, *args):
        if not self.dialog:
            self.dialog = MDDialog(
                title=f"Scratched Item!",
                text=f"Status verified for {self._c_getter} currently in Scratch, want to declare as refurbished?",
                buttons=[
                    MDFlatButton(
                        text="REFURBISHED", text_color=self.theme_cls.primary_color, on_release=self.close_dialog
                    ),
                    MDFlatButton(
                        text="CANCEL", text_color=self.theme_cls.primary_color, on_release=self.close_dialog
                    ),

                ],
            )
        self.dialog.open()

    def show_alert_dialog_item_in_warehouse(self, *args):
        if not self.dialog:
            self.dialog = MDDialog(
                title=f"Assigning Stored Item!",
                text=f"Status verified for {self._c_getter} currently in {self.last_movement_type_checker}.",
                buttons=[
                    MDFlatButton(
                        text="ASSIGN", text_color=self.theme_cls.primary_color, on_release=self.close_dialog
                    ),
                    MDFlatButton(
                        text="CANCEL", text_color=self.theme_cls.primary_color, on_release=self.close_dialog
                    ),

                ],
            )
        self.dialog.open()

    #

    def show_alert_dialog_logout_or_exit(self, *args):
        if not self.dialog:
            self.dialog = MDDialog(
                title=f"Done for now?",
                text=f"Log out or Exit App?",
                buttons=[
                    MDFlatButton(
                        text="LOGOUT", text_color=self.theme_cls.primary_color, on_press=self.close_dialog
                    ),
                    MDFlatButton(
                        text="EXIT", text_color=self.theme_cls.primary_color, on_press=self.close_dialog,
                        on_release=self.btnClose
                    ),
                    MDFlatButton(
                        text="CANCEL", text_color=self.theme_cls.primary_color, on_press=self.close_dialog
                    ),
                ],
            )
        self.dialog.open()

    def show_alert_dialog_no_cat_subcat_selected(self, *args):
        if not self.dialog:
            self.dialog = MDDialog(
                title=f"Unable to Fetch...",
                text=f"Please select Category and Sub_Category Fields",
                buttons=[
                    MDFlatButton(
                        text="OK", text_color=self.theme_cls.primary_color, on_release=self.close_dialog
                    ),

                ],
            )
        self.dialog.open()

    #

    def product_assigend_successfuly(self, *args):
        if not self.dialog:
            self.dialog = MDDialog(
                title="Assigned!",
                text=f"Assignation of product {self.QR_code_on_last_move} to agent {self.to_dealocation_dialog_emp_name} was Successful!",
                buttons=[
                    MDFlatButton(
                        text="THANKS!", text_color=self.theme_cls.primary_color, on_press=self.Move_back_to_Scanner_do,
                        on_release=self.close_dialog
                    ),

                ],
            )
        self.dialog.open()

    def product_un_assigend_successfuly(self, *args):
        if not self.dialog:
            self.dialog = MDDialog(
                title="Product Returned!",
                text=f"Product {self.QR_code_on_last_move} was Successfully returned from agent {self.to_dealocation_dialog_emp_name}!",
                buttons=[
                    MDFlatButton(
                        text="THANKS!", text_color=self.theme_cls.primary_color, on_press=self.Move_back_to_Scanner_do,
                        on_release=self.close_dialog
                    ),

                ],
            )
        self.dialog.open()

    def product_scratched_successfuly(self, *args):
        if not self.dialog:
            self.dialog = MDDialog(
                title="Completed",
                text=f"Product {self.QR_code_on_last_move} was Successfully Declared as Scratch",
                buttons=[
                    MDFlatButton(
                        text="THANKS!", text_color=self.theme_cls.primary_color, on_press=self.Move_back_to_Scanner_do,
                        on_release=self.close_dialog
                    ),

                ],
            )
        self.dialog.open()

    def close_dialog(self, obj):
        self.dialog.dismiss()
        self.dialog = None

    def save_qr(self, obj):
        # TODO: crete dialog and place in code.
        print('QR saved')

    def btnClose(self):
        sys.exit()

    # ON REPORT SCREEN: include this to sort info by nature/need using a button menu bar!>>>>


#
Builder.load_string(KV)
if __name__ == "__main__":
    MainApp().run()

