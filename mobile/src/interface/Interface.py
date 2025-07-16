"""
COMPLETE INTERFACE FOR MOBILE APP WRITTEN IN KIVYMD,
DEVELOPED PROTOTYPE FOR CLIENT, UTILITIES AND ASSETS AVAILABLE IN ASSETS FOLDER
kyvy FORMAT IS A INDENTATION SENSITIVE FORMATE, BE AWARE OF CODE LINES HIERARCHY
"""
################################
####BUILDER###################
#############################

KV = '''

                                          #######UTILIES######
#:import get_color_from_hex kivy.utils.get_color_from_hex

############Screen Conditions#################
<Box@BoxLayout>:
    bg: 0, 0, 0, 0

    canvas:
        Color:
            rgba: root.bg
        Rectangle:
            pos: self.pos
            size: self.size

#######declaration of general Icons######
<IconListItem>

    IconLeftWidget:
        icon: root.icon

<ItemConfirm>
    on_release: root.set_icon(check)

    CheckboxRightWidget:
        id: check
        group: "check"

<Item>

    ImageLeftWidget:
        source: root.source


                   ########################################################################
                    ###########################SCREENS SECTION##############################
                     ########################################################################

<Intro>:
    name: 'pre-splash'  
    FitImage:
        source: 'images/Icon-splash-main.jpeg' 
    MDFloatLayout:
        # 
        # Image:
        #     source:'asserts/Icon.png'
        #     size_hint:.20,.20
        #     pos_hint:{'center_x':0.7,'center_y':.9}
        # MDLabel:
        #     text:'Icon Solutions'
        #     pos_hint:{'center_x':0.5,'center_y':.40}
        #     halign: 'center'
        #     theme_text_color: 'Custom'
        #     text_color: 255,255,255,1
        #     font_size: '35sp'
        #     font_name:'fonts/Poppins-SemiBold.ttf'
        MDLabel:
            text:'Actives Manager 1.0'
            pos_hint:{'center_x':0.33,'center_y':.86}
            halign: 'center'
            theme_text_color: 'Custom'
            text_color: 1,1,1,1
            font_size: '18sp'
            font_name:'fonts/Poppins-LightItalic.ttf'
        Image:
            source:'icons/icons8-android-64.png'
            size_hint:.1,.1
            pos_hint:{'center_x':0.45,'center_y':.8}
        Image:
            source:'icons/icons8-ios-logo-50.png'
            size_hint:.1,.1
            pos_hint:{'center_x':0.55,'center_y':.8}


<MenuScreen>:


    MDBottomNavigation:
        id: bottom_nav
        panel_color: get_color_from_hex("#636363") 
        text_color_item_normal: app.theme_cls.primary_color
        selected_color_background: get_color_from_hex("#97ecf8")
        text_color_active: 0, 0, 0, 1
        #font_name: "path/to/font.ttf"


        MDBottomNavigationItem:

            name: 'work_flow'
            text: 'Menu'
            icon: 'clipboard-flow'

            MDFloatLayout:
                orientation: "vertical"
                FitImage:
                    source: 'images/pexels-dalila-dalprat-2043569.jpg'  
                Card:
                    elevation: 10
                    radius: [36, ]
                    size_hint_y: .35
                    pos_hint: {"top": 1}
                    md_bg_color: app.theme_cls.bg_light
                    FitImage:
                        id: bg_image
                        source: "images/pexels-dlkr-5676478-4.jpg"
                        size_hint_y: .35
                        pos_hint: {"top": 1}
                        radius: 0,0, 36, 36    

                MDLabel:

                    text: "Actives Manager"
                    # theme_text_color: 'Custom'
                    # text_color:150/255, 146/255, 144/255,1  
                    halign: "center"
                    font_type: "fonts/Poppins-SemiBold.ttf"
                    text_color: get_color_from_hex("#97ecf8") #app.theme_cls.primary_dark
                    font_size: "30sp"
                    pos_hint:{'center_x':0.5,'center_y':.92}



                ############################WORK FLOW AREA##############################                  
                ############################Consult Step 1!#############################

                MDLabel:
                    text: "Consult"
                    halign: "center"
                    font_style: "Poppins-Regular"
                    text_color: app.theme_cls.primary_dark
                    font_size: "18sp"
                    pos_hint:{'center_x':0.30,'center_y':.67}

                Image:
                    source: 'icons/circle_white_2.png'    
                    pos_hint:{'center_x':0.30,'center_y':.75}
                    size_hint: 0.21,0.21


                MDFloatingActionButton:
                    # text: 'hello'
                    font_size: '30'
                    # size_hint: 0.3,0.3
                    md_bg_color: app.theme_cls.bg_light
                    pos_hint:{'center_x':0.30,'center_y':.75}
                    on_release: app.menu.ids.bottom_nav.switch_tab('scan')
                    Image:
                        source: 'icons/qr.png'
                        center_x: self.parent.center_x
                        center_y: self.parent.center_y

                #Arrow #One (Right-Down)       
                Image:
                    source: 'icons/curve-arrow-right.png'    
                    pos_hint:{'center_x':0.51,'center_y':.7}
                    size_hint: 0.2,0.2        


                ############################REGISTER Step 2!######################
                MDLabel:

                    text: "Register"
                    halign: "center"
                    font_style: "Poppins-Regular"
                    text_color: app.theme_cls.primary_dark
                    font_size: "18sp"
                    pos_hint:{'center_x':0.7,'center_y':.67}

                Image:
                    source: 'icons/circle_white_2.png'    
                    pos_hint:{'center_x':0.70,'center_y':.75}
                    size_hint: 0.21,0.21


                MDFloatingActionButton:
                    # text: 'hello'
                    font_size: '30'
                    # size_hint: 0.3,0.3
                    md_bg_color: app.theme_cls.bg_light
                    pos_hint:{'center_x':0.70,'center_y':.75}
                    on_release: 
                        print('Register selected!')
                        app.menu.ids.bottom_nav.switch_tab('register')
                    Image:
                        source: 'icons/add.png'
                        center_x: self.parent.center_x
                        center_y: self.parent.center_y

                #Arrow #Two (Right-Down)       
                Image:
                    source: 'icons/curve-arrow-down_right.png'    
                    pos_hint:{'center_x':0.82,'center_y':.6}
                    size_hint: 0.2,0.2   

                ##################################CONSULT Step 3!####################
                MDLabel:

                    text: "Un-Assign"
                    halign: "center"
                    font_style: "Poppins-Regular"
                    text_color: app.theme_cls.primary_dark
                    font_size: "18sp"
                    pos_hint:{'center_x':0.30,'center_y':.42}

                Image:
                    source: 'icons/circle_white_2.png'    
                    pos_hint:{'center_x':0.30,'center_y':.5}
                    size_hint: 0.21,0.21


                MDFloatingActionButton:
                    # text: 'hello'
                    font_size: '30'
                    # size_hint: 0.3,0.3
                    md_bg_color: app.theme_cls.bg_light
                    pos_hint:{'center_x':0.30,'center_y':.5}
                    on_release: app.menu.ids.bottom_nav.switch_tab('assign')
                    Image:
                        source: 'icons/exchange.png'
                        center_x: self.parent.center_x
                        center_y: self.parent.center_y

                #Arrow #three (Right-Down)       
                Image:
                    source: 'icons/curve-arrow-left.png'    
                    pos_hint:{'center_x':0.5,'center_y':.42}
                    size_hint: 0.21,0.21     


                ###########################ASSING Step 4!#####################
                MDLabel:

                    text: "Assign"
                    halign: "center"
                    font_style: "Poppins-Regular"
                    text_color: app.theme_cls.primary_dark
                    font_size: "18sp"
                    pos_hint:{'center_x':0.7,'center_y':.42}

                Image:
                    source: 'icons/circle_white_2.png'    
                    pos_hint:{'center_x':0.70,'center_y':.5}
                    size_hint: 0.21,0.21


                MDFloatingActionButton:
                    # text: 'hello'
                    font_size: '30'
                    # size_hint: 0.3,0.3
                    md_bg_color: app.theme_cls.bg_light
                    pos_hint:{'center_x':0.70,'center_y':.5}
                    on_release: app.menu.ids.bottom_nav.switch_tab('assign')
                    Image:
                        source: 'icons/list.png'
                        center_x: self.parent.center_x
                        center_y: self.parent.center_y

                #Arrow #Four (Right-Down)       
                Image:
                    source: 'icons/curve-arrow-down_left.png'    
                    pos_hint:{'center_x':0.15,'center_y':.35}
                    size_hint: 0.2,0.2                

                #########################UN-ASSING Step 5!#####################
                MDLabel:

                    text: "Scratch"
                    halign: "center"
                    font_style: "Poppins-Regular"
                    text_color: app.theme_cls.primary_dark
                    font_size: "18sp"
                    pos_hint:{'center_x':0.30,'center_y':.17}

                Image:
                    source: 'icons/circle_white_2.png'    
                    pos_hint:{'center_x':0.30,'center_y':.25}
                    size_hint: 0.21,0.21


                MDFloatingActionButton:
                    # text: 'hello'
                    font_size: '30'
                    # size_hint: 0.3,0.3
                    md_bg_color: app.theme_cls.bg_light
                    pos_hint:{'center_x':0.30,'center_y':.25}
                    on_release: app.menu.ids.bottom_nav.switch_tab('scratch')
                    Image:
                        source: 'icons/damaged-package.png'
                        center_x: self.parent.center_x
                        center_y: self.parent.center_y

                # #Arrow #Five (Right-Down)       
                # Image:
                #     source: 'icons/curve-arrow-right.png'    
                #     pos_hint:{'center_x':0.51,'center_y':.20}
                #     size_hint: 0.2,0.2           


                ###########################REPORTS Step 6!#####################
                MDLabel:

                    text: "Reports"
                    halign: "center"
                    font_style: "Poppins-Regular"
                    text_color: app.theme_cls.primary_dark
                    font_size: "18sp"
                    pos_hint:{'center_x':0.75,'center_y':.12}

                Image:
                    source: 'icons/circle_white_2.png'    
                    pos_hint:{'center_x':0.75,'center_y':.20}
                    size_hint: 0.23,0.23


                MDFloatingActionButton:
                    # text: 'hello'
                    font_size: '30'
                    # size_hint: 0.3,0.3
                    md_bg_color: app.theme_cls.bg_light
                    pos_hint:{'center_x':0.75,'center_y':.20}
                    on_release: 
                        root.manager.current = 'reports'
                        # app.ReadQr_Spx('ICON_EP15ALV01')
                        # app.item_cycle()
                        # app.Responsive_EMP()
                        # print('Reports selected!')
                    Image:
                        source: 'icons/report.png'
                        center_x: self.parent.center_x
                        center_y: self.parent.center_y

                #Arrow #One (Right-Down)       
                # Image:
                #     source: 'icons/circle_white_2.png'    
                #     pos_hint:{'center_x':0.25,'center_y':.8}
                #     size_hint: 0.2,0.2              




            #Bottom line Bar code icon(scan product page again!)
            MDFloatingActionButton:
                id: button
                icon: "logout"
                pos: 10, 10
                md_bg_color: app.theme_cls.bg_light
                on_release: app.show_alert_dialog_logout_or_exit()   




            #######################################################
        ####################REGISTER SCREEN###################
     ###################################################

        MDBottomNavigationItem:
            name: 'register'
            text: 'Register'
            icon: 'plus'
            badge_icon: "numeric-10"
            MDBoxLayout:
                md_bg_color: app.theme_cls.bg_light
                orientation: "vertical"
                ActionBar:
                    pos_hint: {'top':1}
                    ActionView:
                        use_separator: True
                        ActionPrevious:
                            title: "Register"
                            with_previous: False
                        ActionGroup:
                            text: "    Navigation    "
                            font_size: '16sp'
                            font_name: 'fonts/poppins-Regular.ttf'
                            mode: 'spinner'
                            ActionButton:
                                text: 'Scan Equipment'
                                font_name: 'fonts/Poppins-LightItalic.ttf'
                                font_size: '18sp'
                                on_press:
                                    # root.manager.current = 'read'
                            ActionButton:
                                text: 'Inventory Stats'
                                font_name: 'fonts/Poppins-LightItalic.ttf'
                                font_size: '18sp'
                                on_press:
                                    # root.manager.current = 'stats'
                            ActionButton:
                                text: 'Back'
                                font_name: 'fonts/Poppins-LightItalic.ttf'
                                font_size: '18sp'
                                on_press:
                                    app.menu.ids.bottom_nav.switch_tab('work_flow')
                            ActionButton:
                                text: 'Log Out'
                                font_name: 'fonts/Poppins-LightItalic.ttf'
                                font_size: '18sp'
                                on_press:
                                    # root.manager.current = 'menu'        
                            ActionButton:
                                text: 'Quit'
                                font_name: 'fonts/Poppins-LightItalic.ttf'
                                font_size: '18sp'
                                on_press: app.btnClose()
                ########
                MDFloatLayout:
                    md_bg_color: app.theme_cls.bg_light
                    FitImage:
                        source: 'images/pexels-huy-phan-1391293.jpg'
                    MDLabel:
                        text: 'Select Index'
                        theme_text_color: 'Custom'
                        text_color:232/255, 188/255, 188/255,1                       
                        pos_hint: {'center_x':0.65,'center_y':0.98}
                        font_name: 'fonts/Righteous-Regular.ttf'
                        font_size: '15sp'            
                    MDLabel:
                        id: label_icon
                        text: 'ICON_'
                        theme_text_color: 'Custom'
                        text_color: 138, 136, 136,1
                        pos_hint: {'center_x':0.66,'center_y':0.93}
                        font_name: 'fonts/Righteous-Regular.ttf'
                        font_size: '27sp'                         
                    MDLabel:
                        id: label_suffix_category
                        text: 'XX'
                        pos_hint: {'center_x':0.90,'center_y':0.93}
                        font_name: 'fonts/Righteous-Regular.ttf'
                        font_size: '27sp' 
                    MDLabel:
                        id: label_sub_suffix_category
                        text: 'XX'
                        pos_hint: {'center_x':1.0,'center_y':0.93}
                        font_name: 'fonts/Righteous-Regular.ttf'
                        font_size: '27sp' 
                    MDLabel:
                        id: label_suffix_account
                        text: 'XXX'
                        pos_hint: {'center_x':1.10,'center_y':0.93}
                        font_name: 'fonts/Righteous-Regular.ttf'
                        font_size: '27sp'
                    MDLabel:
                        id: label_suffix_account_series
                        text: 'XX'
                        pos_hint: {'center_x':1.25,'center_y':0.93}
                        font_name: 'fonts/Righteous-Regular.ttf'
                        font_size: '27sp'                                                  
                    MDLabel:
                        text: 'Please make a selection'
                        theme_text_color: 'Custom'
                        text_color:232/255, 188/255, 188/255,1                       
                        pos_hint: {'center_x':.70,'center_y':0.88}
                        font_name: 'fonts/Righteous-Regular.ttf'
                        font_size: '10sp'                           
########################MDTabs!
                    ScrollView: 
                        pos_hint: {'center_x':0.70,'center_y':0.38}  
                        ######Listings#######
                        MDList:
                            id: list_resume      
                            MDTextField:
                                id: category
                                pos_hint: {'center_x': .5, 'center_y': .5}
                                size_hint_x: None
                                width: "200dp"
                                hint_text: "Category"
                                on_focus: if self.focus: app.data_categories(), app.cat_menu.open()

                            MDTextField:
                                id: sub_category
                                pos_hint: {'center_x': .5, 'center_y': .5}
                                size_hint_x: None
                                width: "200dp"
                                hint_text: "sub_category"
                                on_focus: if self.focus: app.data_sub_categories(), app.sub_menu.open()
                            MDTextField:
                                id: account_category
                                pos_hint: {'center_x': .5, 'center_y': .5}
                                size_hint_x: None
                                width: "200dp"
                                hint_text: "Account"
                                on_focus: if self.focus: app.data_accounts(), app.account_menu.open()

                            MDTextField:
                                id: item_description_list
                                pos_hint: {'center_x': .5, 'center_y': .5}
                                size_hint_x: None
                                width: "200dp"
                                hint_text: "Item Description"
                                on_focus: if self.focus: app.data_item_DSC(), app.item_DSC_menu.open()

                    Image:
                        id: qrshow
                        size_hint: 0.50,0.31 #ORI on 0.6,0.4
                        pos_hint: {'center_x': .5, 'center_y': .30}
                        radius: [36, 36]

                    MDBottomAppBar:
                        pos_hint: {"bottom": 1}
                        # md_bg_color: app.theme_cls.bg_normal

                        MDToolbar:
                            title: 'QR'
                            icon: 'plus'
                            type: 'bottom'
                            elevation: 5
                            text_color: app.theme_cls.bg_normal
                            left_action_items: [["content-save", lambda x: app.show_alert_dialog_on_save()]]
                            on_action_button:
                                app.QR_gen()
                                # print('Generated!')
                                # print(app.qrgen.ids.to_qr.text)
                                # app.qrgen.QR_gen(app)
                                # app.SQLAlchemy_module()


          #################################################################
        ###########################FREEE SCAN SCREEN###################### 
      ##################################################################

        MDBottomNavigationItem:
            name: 'scan'
            text: 'Scan'
            icon: 'barcode'
            badge_icon: "numeric-10"

            MDBoxLayout:
                md_bg_color: app.theme_cls.bg_light
                orientation: "vertical"
                ActionBar:
                    pos_hint: {'top':1}
                    ActionView:
                        use_separator: True
                        ActionPrevious:
                            title: "Scan"
                            with_previous: False
                        ActionGroup:
                            text: "    Navigation    "
                            font_size: '16sp'
                            font_name: 'fonts/poppins-Regular.ttf'
                            mode: 'spinner'
                            ActionButton:
                                text: 'Inventory Stats'
                                font_name: 'fonts/Poppins-LightItalic.ttf'
                                font_size: '18sp'
                                on_press:
                                    # root.manager.current = 'read'
                            ActionButton:
                                text: 'Menu'
                                font_name: 'fonts/Poppins-LightItalic.ttf'
                                font_size: '18sp'
                                on_press:
                                    app.menu.ids.bottom_nav.switch_tab('work_flow')
                            ActionButton:
                                text: 'Log Out'
                                font_name: 'fonts/Poppins-LightItalic.ttf'
                                font_size: '18sp'
                                on_press:
                                    # root.manager.current = 'menu'
                            ActionButton:
                                text: 'Quit'
                                font_name: 'fonts/Poppins-LightItalic.ttf'
                                font_size: '18sp'
                                on_press: app.btnClose()

                MDFloatLayout:
                    md_bg_color: app.theme_cls.bg_light
                    MDTabs:
                        id: tabs
                        text_color_normal: 0, 0, 0, 1
                        text_color_active: 1, 1, 1, 1
                        text: 'Scan Active'
                        # theme_text_color: 'Custom'
                        # text_color:232/255, 188/255, 188/255,1 
                        # on_tab_switch: app.on_tab_switch(*args)

                  ###########################################      
                ###############TABS ON DEMAND!#############
                        Tab:
                            id: scan
                            text: 'Scanner'
                            icon: 'icons/icons8-qr-code-48.png'
                            adaptive_height: True

                            MDFloatLayout:
                                FitImage:
                                    source: 'images/pexels-dids-3045825.jpg'
                            #     ZBarCam:
                            #         id: qrcodecam
                            #         size_hint: 2.1,2.1
                            #         pos_hint: {'center_x':0.5,'center_y':0.5}

                                    # optional, by default checks all types

                                    Label:
                                        id: qrcode
                                        size_hint: None, None
                                        pos_hint: {'center_x':0.5,'center_y':0.1}
                                        font_size: '24sp'
                                        font_name:'fonts/Righteous-Regular.ttf'
                                        size: self.texture_size[0], 50
                                        # text: ' '.join([(symbol.data).decode('UTF-8') for symbol in qrcodecam.symbols])
                                Image: 
                                    source: 'icons/icons8-qr-code-48.png'
                                    pos_hint: {'center_x':0.5,'center_y':0.9}


                                MDFillRoundFlatButton
                                    text: "Detect Equipment"
                                    icon: 'plus'
                                    pos_hint: {'center_x':0.5,'center_y':0.10}
                                    size_hint: None,None
                                    on_press:
                                        # app.ReadQr_Spx(' '.join([(symbol.data).decode('UTF-8') for symbol in qrcodecam.symbols]))

                                    on_release:
                                        app.ReadQr_Spx('ICON_EP15ALV1')  # ICON_EP15ALV3 ICON_TM02 ###Fix the if label is not registered with try: exception
                                        app.Data_Item_Cycle()
                                        root.ids.tabs.switch_tab('Resume')



                #####################################
                ########RESUMING TAB##################
                ######################################
                        Tab:
                            id: resume
                            text: 'Resume'
                            icon: 'icons/icons8-qr-code-48.png'
                            adaptive_height: True

                            MDFloatLayout:
                                # canvas.before:
                                #     Color(rgba=(223, 239, 0250 0.98))
                                FitImage:
                                    source: 'images/pexels-huy-phan-1391293.jpg'

                           #######################################         
                        ##############Heading!##################
                                MDLabel:
                                    text: 'Selected:'
                                    theme_text_color: 'Custom'
                                    text_color:232/255, 188/255, 188/255,1                       
                                    pos_hint: {'center_x':0.63,'center_y':0.95}
                                    font_name: 'fonts/Righteous-Regular.ttf'
                                    font_size: '20sp'
                                MDLabel:
                                    id: list_icon
                                    text: 'Not Scanned'
                                    # theme_text_color: 'Custom'
                                    # text_color:250/255, 219/255, 183/255,1                       
                                    pos_hint: {'center_x':0.93,'center_y':0.95}
                                    # font_name: 'fonts/Righteous-Regular.ttf'
                                    font_size: '18sp'

                                ######################
                                ################Body :: CAT- SUB_CAT!###########################
                                ##############################################################

                                ScrollView: 
                                    pos_hint: {'center_x':0.55,'center_y':0.4}

                                    ######Listings#######
                                    MDList:
                                        id: list_resume      
                                        OneLineListItem:
                                            text: "Primary Info"


                                        TwoLineAvatarListItem:
                                            id: list_category
                                            text: "--"
                                            secondary_text: "Category"

                                            ImageLeftWidget:
                                                source: "icons/arrow-right-m.png"

                                        TwoLineAvatarListItem:
                                            id: list_sub_category
                                            text: "--"
                                            secondary_text: "Sub_Category"

                                            ImageLeftWidget:
                                                source: "icons/arrow-right-m.png"

                                        TwoLineAvatarListItem:
                                            id: list_item_dsc
                                            text: "--"
                                            secondary_text: "Item Description"

                                            ImageLeftWidget:
                                                source: "icons/arrow-right-m.png"


                                        OneLineListItem:
                                            text: "Account Class"          


                                        TwoLineAvatarListItem:
                                            id: list_account
                                            text: "--"
                                            secondary_text: "Account"

                                            ImageLeftWidget:
                                                source: "icons/arrow-right-m.png"

                                        TwoLineAvatarListItem:
                                            id: list_account_index
                                            text: "--" #create index colum in Test_LN:: dbo.iCAT_Account
                                            secondary_text: "Index"      

                                            ImageLeftWidget:
                                                source: "icons/arrow-right-m.png"


                                        OneLineListItem:
                                            text: "Item Class"          


                                        TwoLineAvatarListItem:
                                            id: list_QR_code
                                            text: "--"
                                            secondary_text: "QR Code"

                                            ImageLeftWidget:
                                                source: "icons/arrow-right-m.png"

                                        # TwoLineAvatarListItem:
                                        #     id: list_item_dsc
                                        #     text: "Relative" #create relative colum in Test_LN:: dbo.iCAT_Account
                                        #     secondary_text: "Relative Code here"    
                                        #     ImageLeftWidget:
                                        #         source: "icons/arrow-right-m.png"

                                        OneLineListItem:
                                            text: "Item Condition"          


                                        TwoLineAvatarListItem:
                                            id: list_item_condition
                                            text: "--"
                                            secondary_text: "Current Condition"

                                            ImageLeftWidget:
                                                source: "icons/arrow-right-m.png"    

                                        OneLineListItem:
                                            text: "Current Status"

                                        TwoLineAvatarListItem:
                                            id: list_status
                                            text: "--"
                                            secondary_text: "Current Status"

                                            ImageLeftWidget:
                                                source: "icons/arrow-right-m.png"     

                                        TwoLineAvatarListItem:
                                            id: list_transaction_time
                                            text: "--" 
                                            secondary_text: "Date / Time "   
                                            ImageLeftWidget:
                                                source: "icons/arrow-right-m.png"    

                                        TwoLineAvatarListItem:
                                            id: list_user_made
                                            text: "--"
                                            secondary_text: "Changed by User"

                                            ImageLeftWidget:
                                                source: "icons/arrow-right-m.png"                                                                         

                                        OneLineListItem:
                                            text: "Assigned to"          

                                        TwoLineAvatarListItem:
                                            id: list_emp_id
                                            text: "--" #create relative colum in Test_LN:: dbo.iCAT_Account
                                            secondary_text: "Employee ID"   
                                            ImageLeftWidget:
                                                source: "icons/arrow-right-m.png"

                                        TwoLineAvatarListItem:
                                            id: list_emp_name
                                            text: "--"
                                            secondary_text: "Agents Name"

                                            ImageLeftWidget:
                                                source: "icons/arrow-right-m.png"

                                        # TwoLineAvatarListItem:
                                        #     id: list_emp_last_name
                                        #     text: "--"
                                        #     secondary_text: "Last Name"
                                        # 
                                        #     ImageLeftWidget:
                                        #         source: "icons/arrow-right-m.png"   

                                        TwoLineAvatarListItem:
                                            id: list_emp_account
                                            text: "--"
                                            secondary_text: "Current Account"

                                            ImageLeftWidget:
                                                source: "icons/arrow-right-m.png"

                                        TwoLineAvatarListItem:
                                            id: list_emp_position
                                            text: "--"
                                            secondary_text: "Position"

                                            ImageLeftWidget:
                                                source: "icons/arrow-right-m.png" 


                                        OneLineListItem:
                                            text: "Item Location"      

                                        TwoLineAvatarListItem:
                                            id: list_location_cat
                                            text: "--"
                                            secondary_text: "Current Location"

                                            ImageLeftWidget:
                                                source: "icons/arrow-right-m.png"    

                                        TwoLineAvatarListItem:
                                            id: list_utm_x
                                            text: "--"
                                            secondary_text: "GeoLocation X"

                                            ImageLeftWidget:
                                                source: "icons/arrow-right-m.png"

                                        TwoLineAvatarListItem:
                                            id: list_utm_y
                                            text: "--"
                                            secondary_text: "GeoLocation Y"

                                            ImageLeftWidget:
                                                source: "icons/arrow-right-m.png"         

################################TO ASSIGN/UN-ASSIGN DATA##############################################
                                MDFillRoundFlatButton
                                    text: " +   Assignment   "
                                    icon: 'plus'
                                    theme_icon_color: "Custom"
                                    md_bg_color: get_color_from_hex('#91295f')
                                    icon_color: get_color_from_hex('#311021')
                                    pos_hint: {'center_x':0.5,'center_y':0.05}
                                    size_hint: None,None
                                    on_press:
                                        # app.menu.ids.bottom_nav.switch_tab('assign')
                                        #Function that evaluates the last move from item to assign or un-ass

                                    on_release:
                                        app.Assignations_alerts_manager()
                                        #shows dialog with logical conclusion and directs to respective window/tab
                                        #after the message is accepted.


                #####################################
                ########iTEM CYCLE TAB##################
                ######################################
                        Tab:
                            id: cycle
                            text: 'Item life Cycle'
                            icon: 'icons/icons8-qr-code-48.png'
                            adaptive_height: True

                            MDFloatLayout:
                                # canvas.before:
                                #     Color(rgba=(223, 239, 0250 0.98))
                                FitImage:
                                    source: 'images/pexels-huy-phan-1391293.jpg'

                           #######################################         
                        ##############Heading!##################
                                MDLabel:
                                    text: 'Selected:'
                                    theme_text_color: 'Custom'
                                    text_color:232/255, 188/255, 188/255,1                       
                                    pos_hint: {'center_x':0.63,'center_y':0.95}
                                    font_name: 'fonts/Righteous-Regular.ttf'
                                    font_size: '20sp'
                                MDLabel:
                                    id: list_item_cycle_qr
                                    text: 'Not Scanned'
                                    # theme_text_color: 'Custom'
                                    # text_color:250/255, 219/255, 183/255,1                       
                                    pos_hint: {'center_x':0.93,'center_y':0.95}
                                    # font_name: 'fonts/Righteous-Regular.ttf'
                                    font_size: '18sp'
                                MDList:
                                    pos_hint: {'center_x':0.5,'center_y':0.80}

                                    OneLineListItem:
                                        id: list_item_cycle_dsc
                                        text: "Not Selected"

                                    TwoLineAvatarListItem:
                                        id: list_item_cycle_purchase_date
                                        text: "--"
                                        secondary_text: "Purchased On"

                                        ImageLeftWidget:
                                            source: "icons/arrow-right-m.png"






                                BoxLayout:
                                    id: table_holder_item    
                                    pos_hint: {'top':1}




#############################################################
   ####################ASSIGNMENT PAGE######################  
      ####################################################  
        MDBottomNavigationItem:
            name: 'assign'
            text: 'Assign'
            icon: 'arrow-up-bold-box'
            badge_icon: "numeric-10"
            MDBoxLayout:
                md_bg_color: app.theme_cls.bg_light
                orientation: "vertical"
                ActionBar:
                    pos_hint: {'top':1}
                    ActionView:
                        use_separator: True
                        ActionPrevious:
                            title: "Assignations"
                            with_previous: False
                        ActionGroup:
                            text: "    Navigation    "
                            font_size: '16sp'
                            font_name: 'fonts/poppins-Regular.ttf'
                            mode: 'spinner'
                            ActionButton:
                                text: 'Inventory Stats'
                                font_name: 'fonts/Poppins-LightItalic.ttf'
                                font_size: '18sp'
                                on_press:
                                    # root.manager.current = 'read'
                            ActionButton:
                                text: 'Back'
                                font_name: 'fonts/Poppins-LightItalic.ttf'
                                font_size: '18sp'
                                on_press:
                                    app.menu.ids.bottom_nav.switch_tab('work_flow')
                            ActionButton:
                                text: 'Log Out'
                                font_name: 'fonts/Poppins-LightItalic.ttf'
                                font_size: '18sp'
                                on_press:
                                    # root.manager.current = 'menu'
                            ActionButton:
                                text: 'Quit'
                                font_name: 'fonts/Poppins-LightItalic.ttf'
                                font_size: '18sp'
                                on_press: app.btnClose()

                MDFloatLayout:
                    md_bg_color: app.theme_cls.bg_light
                    MDTabs:
                        id: as_tabs
                        text_color_normal: 0, 0, 0, 1
                        text_color_active: 1, 1, 1, 1
                        text: 'Selected: None'
                        # theme_text_color: 'Custom'
                        # text_color:232/255, 188/255, 188/255,1 
                        # on_tab_switch: app.on_tab_switch(*args)

                  ###########################################      
                ###############TABS ON DEMAND!#############

###########################ASSIGNMENT TAB
                        Tab:
                            id: assigner
                            text: 'Assignation'
                            icon: 'icons/icons8-qr-code-48.png'
                            adaptive_height: True

                            MDFloatLayout:
                                FitImage:
                                    source: 'images/pexels-huy-phan-1391293.jpg'

                            ScrollView: 
                                pos_hint: {'center_x':0.55,'center_y':0.52}
                                ######Listings#######CHange ICons!#######
                                MDList:
                                    id: list_assignations      
                                    OneLineListItem:
                                        id: list_assg_qr
                                        text: "Not Selected"

                                    TwoLineIconListItem:
                                        id: list_assg_item_dsc
                                        text: "--"
                                        secondary_text: "Item Description"

                                        ImageLeftWidget:
                                            source: "icons/arrow-right-m.png"

                                    TwoLineIconListItem:
                                        id: list_assg_item_condition
                                        text: "--"
                                        secondary_text: "Item Current Condition"

                                        ImageLeftWidget:
                                            source: "icons/arrow-right-m.png"

                                    TwoLineIconListItem:
                                        id: list_assg_item_to_emp
                                        text: "--"
                                        secondary_text: "Assigning Employee"

                                        ImageLeftWidget:
                                            source: "icons/arrow-right-m.png"

                            ########################MDTabs!

                                    MDList:
                                        id: list_assg_list      
                                        MDTextField:
                                            id: list_emp_assigning_to
                                            pos_hint: {'center_x': .5, 'center_y': .5}
                                            size_hint_x: None
                                            width: "200dp"
                                            hint_text: "Select Employee by ID" 
                                            on_focus: if self.focus: app.data_employee(), app.emp_menu.open()


                                        MDTextField:
                                            id: list_emp_location
                                            pos_hint: {'center_x': .5, 'center_y': .5}
                                            size_hint_x: None
                                            width: "200dp"
                                            hint_text: "Select Location"
                                            on_focus: if self.focus: app.data_employee_location(), app.emp_location_menu.open()

                            MDBottomAppBar:
                                pos_hint: {"bottom": 1}
                                # md_bg_color: app.theme_cls.bg_normal

                                MDToolbar:
                                    title: 'Assignment'
                                    icon: 'arrow-up-bold-box'
                                    type: 'bottom'
                                    mode: "end"
                                    elevation: 5
                                    text_color: app.theme_cls.bg_normal
                                    left_action_items: [ ["arrow-up-drop-circle", lambda x: x]]
                                    on_action_button: app.show_alert_dialog_Assignation_to_Agent()


###########################UNASSMENT TAB

                        Tab:
                            id: un_assigner
                            text: 'Un-Assign'
                            icon: 'icons/icons8-qr-code-48.png'
                            adaptive_height: True

                            MDFloatLayout:
                                FitImage: 
                                    source: 'images/pexels-huy-phan-1391293.jpg'      

                            ScrollView: 
                                pos_hint: {'center_x':0.55,'center_y':0.52}
                                ######Listings#######CHange ICons!#######
                                MDList:
                                    id: list_un_assignments      
                                    OneLineListItem:
                                        id: list_un_assg_qr
                                        text: "Not Selected"

                                    TwoLineAvatarListItem:
                                        id: list_un_assg_item_dsc
                                        text: "--"
                                        secondary_text: "Item Description"

                                        ImageLeftWidget:
                                            source: "icons/arrow-right-m.png"

                                    TwoLineAvatarListItem:
                                        id: list_un_assg_item_las_condition
                                        text: "--"
                                        secondary_text: "Item Assigned Condition"

                                        ImageLeftWidget:
                                            source: "icons/arrow-right-m.png"

                                    TwoLineAvatarListItem:
                                        id: list_un_assg_agent
                                        text: "--"
                                        secondary_text: "From Agent"

                                        ImageLeftWidget:
                                            source: "icons/arrow-right-m.png"

                            ########################MDTabs!

                                    MDList:
                                        id: list_un_assg_list      
                                        MDTextField:
                                            id: list_un_assigning_item_status
                                            pos_hint: {'center_x': .5, 'center_y': .5}
                                            size_hint_x: None
                                            width: "200dp"
                                            hint_text: "Select Item returned Condition" #from iCAT_Status
                                            on_focus: if self.focus: app.data_item_return_condition(), app.item_condition_return_menu.open()

                                        MDTextField:
                                            id: list_un_assg_location
                                            pos_hint: {'center_x': .5, 'center_y': .5}
                                            size_hint_x: None
                                            width: "200dp"
                                            hint_text:  "Select Next Location" #from iCAT_Loacations
                                            on_focus: if self.focus: app.data_item_return_location(), app.item_return_location_menu.open()

                            MDBottomAppBar:
                                pos_hint: {"bottom": 1}
                                # md_bg_color: app.theme_cls.bg_normal

                                MDToolbar:
                                    title: 'Un-Assignment'
                                    icon: 'arrow-down-bold-box'
                                    type: 'bottom'
                                    mode: "end"
                                    elevation: 5
                                    text_color: app.theme_cls.bg_normal
                                    left_action_items: [ ["arrow-down-drop-circle", lambda x: x]]
                                    on_action_button: app.show_alert_dialog_dealocation_from_Agent()








  ########################################################
 ###########################SCRATCH######################    
#######################################################
        MDBottomNavigationItem:
            name: 'scratch'
            text: 'Scratch'
            icon: 'image-broken-variant'
            badge_icon: "numeric-10"
            MDBoxLayout:
                md_bg_color: app.theme_cls.bg_light
                orientation: "vertical"
                ActionBar:
                    pos_hint: {'top':1}
                    ActionView:
                        use_separator: True
                        ActionPrevious:
                            title: "Scratch"
                            with_previous: False
                        ActionGroup:
                            text: "    Navigation    "
                            font_size: '16sp'
                            font_name: 'fonts/poppins-Regular.ttf'
                            mode: 'spinner'
                            ActionButton:
                                text: 'Inventory Stats'
                                font_name: 'fonts/Poppins-LightItalic.ttf'
                                font_size: '18sp'
                                on_press:
                                    # root.manager.current = 'read'
                            ActionButton:
                                text: 'Back'
                                font_name: 'fonts/Poppins-LightItalic.ttf'
                                font_size: '18sp'
                                on_press:
                                    app.menu.ids.bottom_nav.switch_tab('work_flow')
                            ActionButton:
                                text: 'Log Out'
                                font_name: 'fonts/Poppins-LightItalic.ttf'
                                font_size: '18sp'
                                on_press:
                                    # root.manager.current = 'menu'
                            ActionButton:
                                text: 'Quit'
                                font_name: 'fonts/Poppins-LightItalic.ttf'
                                font_size: '18sp'
                                on_press: app.btnClose()

                MDFloatLayout:
                    md_bg_color: app.theme_cls.bg_light
                    MDTabs:
                        id: scratch_tabs
                        text_color_normal: 0, 0, 0, 1
                        text_color_active: 1, 1, 1, 1
                        text: 'Selected: None'
                        # theme_text_color: 'Custom'
                        # text_color:232/255, 188/255, 188/255,1 
                        # on_tab_switch: app.on_tab_switch(*args)

                  ###########################################      
                ###############TABS ON DEMAND!#############
###########################SCRATCH TAB
                        Tab:
                            id: scratcher
                            text: 'Scratcher'
                            icon: 'icons/icons8-qr-code-48.png'
                            adaptive_height: True

                            MDFloatLayout:
                                FitImage:
                                    source: 'images/pexels-huy-phan-1391293.jpg'

                            ScrollView: 
                                pos_hint: {'center_x':0.55,'center_y':0.52}
                                ######Listings#######CHange ICons!#######
                                MDList:
                                    id: list_scratcher      
                                    OneLineListItem:
                                        id: list_scratch_qr
                                        text: "Not Selected"

                                    TwoLineAvatarListItem:
                                        id: list_scratch_item_dsc
                                        text: "--"
                                        secondary_text: "Item Description"

                                        ImageLeftWidget:
                                            source: "icons/arrow-right-m.png"

                                    TwoLineAvatarListItem:
                                        id: list_scratch_item_condition
                                        text: "--"
                                        secondary_text: "Item Assigned Condition"

                                        ImageLeftWidget:
                                            source: "icons/arrow-right-m.png"

                                    TwoLineAvatarListItem:
                                        id: list_scratch_last_agent
                                        text: "--"
                                        secondary_text: "Last Agent Assigned"

                                        ImageLeftWidget:
                                            source: "icons/arrow-right-m.png"

                            ########################MDTabs!

                                    MDList:
                                        id: list_scratch_list 
                                        MDTextField:
                                            id: list_scratch_to_discount_agent
                                            pos_hint: {'center_x': .5, 'center_y': .5}
                                            size_hint_x: None
                                            width: "200dp"
                                            hint_text: "Generate Discount?"
                                            on_focus: if self.focus: app.data_item_emp_discount(), app.item_emp_discount_menu.open()

                                        MDTextField:
                                            id: list_scratch_item_status
                                            pos_hint: {'center_x': .5, 'center_y': .5}
                                            size_hint_x: None
                                            width: "200dp"
                                            hint_text: "Select Item Condition" 
                                            on_focus: if self.focus: app.data_item_scratch_condition(), app.item_scratch_conditon_menu.open()



                            MDBottomAppBar:
                                pos_hint: {"bottom": 1}
                                # md_bg_color: app.theme_cls.bg_normal

                                MDToolbar:
                                    title: 'Scratch'
                                    icon: 'minus-circle'
                                    type: 'bottom'
                                    mode: "end"
                                    elevation: 5
                                    text_color: app.theme_cls.bg_normal
                                    left_action_items: [ ["image-broken-variant", lambda x: x]]
                                    on_action_button: app.show_alert_dialog_scratch_from_Agent_do()











#####################################################################################################




####################################################
#TODO: REPORTS SCREEN
##################################################
<InventoryScreen>:


    MDBottomNavigation:
        id: bottom_nav
        panel_color: get_color_from_hex("#636363") 
        text_color_item_normal: app.theme_cls.primary_color
        selected_color_background: get_color_from_hex("#97ecf8")
        text_color_active: 0, 0, 0, 1
        #font_name: "path/to/font.ttf"



        MDBottomNavigationItem:

            name: 'employee'
            text: 'EMP Report'
            icon: 'file-presentation-box'
            md_bg_color: app.theme_cls.bg_light                     
            MDBoxLayout:

                orientation: "vertical"
                ActionBar:
                    pos_hint: {'top':1}
                    ActionView:
                        use_separator: True
                        ActionPrevious:
                            title: "Register"
                            with_previous: False
                        ActionGroup:
                            text: "    Navigation    "
                            font_size: '16sp'
                            font_name: 'fonts/poppins-Regular.ttf'
                            mode: 'spinner'
                            ActionButton:
                                text: 'Scan Equipment'
                                font_name: 'fonts/Poppins-LightItalic.ttf'
                                font_size: '18sp'
                                on_press:
                                    # root.manager.current = 'read'
                            ActionButton:
                                text: 'Inventory Stats'
                                font_name: 'fonts/Poppins-LightItalic.ttf'
                                font_size: '18sp'
                                on_press:
                                    # root.manager.current = 'stats'
                            ActionButton:
                                text: 'Back'
                                font_name: 'fonts/Poppins-LightItalic.ttf'
                                font_size: '18sp'
                                on_press:
                                    root.manager.current = 'menu'  
                            ActionButton:
                                text: 'Log Out'
                                font_name: 'fonts/Poppins-LightItalic.ttf'
                                font_size: '18sp'
                                on_press:
                                    # root.manager.current = 'menu'        
                            ActionButton:
                                text: 'Quit'
                                font_name: 'fonts/Poppins-LightItalic.ttf'
                                font_size: '18sp'
                                on_press: app.btnClose()



                MDFloatLayout:
                    md_bg_color: app.theme_cls.bg_light
                    MDTabs:
                        id: EMP_tabs
                        text_color_normal: 0, 0, 0, 1
                        text_color_active: 1, 1, 1, 1
                        text: 'Scan Active'
                        # theme_text_color: 'Custom'
                        # text_color:232/255, 188/255, 188/255,1 
                        # on_tab_switch: app.on_tab_switch(*args)

                        Tab:
                            id: _EMP_responsive_tab
                            text: 'EMP Holder'
                            icon: 'icons/icons8-qr-code-48.png'
                            adaptive_height: True

                            MDFloatLayout:
                                FitImage:
                                    source: 'images/pexels-huy-phan-1391293.jpg'			
	                            MDLabel:

                                    text: "Employee Report"
                                    # theme_text_color: 'Custom'
                                    # text_color:150/255, 146/255, 144/255,1  
                                    halign: "center"
                                    font_type: "fonts/Poppins-SemiBold.ttf"
                                    text_color: get_color_from_hex("#97ecf8") #app.theme_cls.primary_dark
                                    font_size: "30sp"
                                    pos_hint:{'center_x':0.5,'center_y':.92}


                                MDTextField:
                                    id: EMP_responsive_lister
                                    pos_hint:{'center_x':0.5,'center_y':.80}
                                    size_hint_x: None
                                    width: "200dp"
                                    hint_text: "Select Employee by ID" 
                                    on_focus: if self.focus: app.data_employee_resp(), app.emp_menu_responsive.open()    
                                    # on_release: app.Data_Responsive_EMP()
                                TwoLineAvatarListItem:
                                    id: list_EMP_responsive_w_name
                                    pos_hint:{'center_x':0.5,'center_y':.70}
                                    text: "--"
                                    secondary_text: "Agent's Name"

                                    ImageLeftWidget:
                                        source: "icons/arrow-right-m.png"                               

                                MDBoxLayout:
                                    id: EMP_responsive_
                                    size: root.width, root.height
                                    # pos_hint:{'center_x':0.5,'center_y':.65}
                                    # md_bg_color: app.theme_cls.bg_light





                        Tab:
                            id: _EMP_location_Map
                            text: 'Employee Location'
                            icon: 'icons/icons8-qr-code-48.png'
                            adaptive_height: True

                            MDFloatLayout:
                                # canvas.before:
                                #     Color(rgba=(223, 239, 0250 0.98))
                                FitImage:
                                    source: 'images/pexels-huy-phan-1391293.jpg'

                                MDBoxLayout:
                                    id: EMP_location_   









#                 MDFloatLayout:
#                     bg: app.theme_cls.bg_normal
#                     MDLabel:
# 
#                         text: "Employee Report"
#                         # theme_text_color: 'Custom'
#                         # text_color:150/255, 146/255, 144/255,1  
#                         halign: "center"
#                         font_type: "fonts/Poppins-SemiBold.ttf"
#                         text_color: get_color_from_hex("#97ecf8") #app.theme_cls.primary_dark
#                         font_size: "30sp"
#                         pos_hint:{'center_x':0.5,'center_y':.92}
# 
#                         
#                     MDTextField:
#                         id: EMP_responsive_lister
#                         pos_hint:{'center_x':0.5,'center_y':.80}
#                         size_hint_x: None
#                         width: "200dp"
#                         hint_text: "Select Employee by ID" 
#                         on_focus: if self.focus: app.data_employee_resp(), app.emp_menu_responsive.open()    
#                         # on_release: app.Data_Responsive_EMP()
#                     
#                     # MDBoxLayout: 
#                     GridLayout:
# 		                cols:1
# 		                rows:2
# 		                # size: root.width, root.height
# # split in tabs!
#                         MDBoxLayout:
#                             id: EMP_responsive_
#                             size: root.width, root.height
#                             # md_bg_color: app.theme_cls.bg_light
#                             
#                         MDBoxLayout:
#                             id: EMP_location_    
# 


        MDBottomNavigationItem:

            name: 'chart'
            text: 'Stadistics'
            icon: 'chart-box'

            MDBoxLayout:
                md_bg_color: app.theme_cls.bg_light     
                orientation: "vertical"
                ActionBar:
                    pos_hint: {'top':1}
                    ActionView:
                        use_separator: True
                        ActionPrevious:
                            title: "Register"
                            with_previous: False
                        ActionGroup:
                            text: "    Navigation    "
                            font_size: '16sp'
                            font_name: 'fonts/poppins-Regular.ttf'
                            mode: 'spinner'
                            ActionButton:
                                text: 'Scan Equipment'
                                font_name: 'fonts/Poppins-LightItalic.ttf'
                                font_size: '18sp'
                                on_press:
                                    # root.manager.current = 'read'
                            ActionButton:
                                text: 'Inventory Stats'
                                font_name: 'fonts/Poppins-LightItalic.ttf'
                                font_size: '18sp'
                                on_press:
                                    # root.manager.current = 'stats'
                            ActionButton:
                                text: 'Back'
                                font_name: 'fonts/Poppins-LightItalic.ttf'
                                font_size: '18sp'
                                on_press:
                                    root.manager.current = 'menu'  
                            ActionButton:
                                text: 'Log Out'
                                font_name: 'fonts/Poppins-LightItalic.ttf'
                                font_size: '18sp'
                                on_press:
                                    # root.manager.current = 'menu'        
                            ActionButton:
                                text: 'Quit'
                                font_name: 'fonts/Poppins-LightItalic.ttf'
                                font_size: '18sp'
                                on_press: app.btnClose()

                MDFloatLayout:
                    bg: app.theme_cls.bg_normal
                    MDLabel:

                        text: "Distribution"
                        # theme_text_color: 'Custom'
                        # text_color:150/255, 146/255, 144/255,1  
                        halign: "center"
                        font_type: "fonts/Poppins-SemiBold.ttf"
                        text_color: get_color_from_hex("#97ecf8") #app.theme_cls.primary_dark
                        font_size: "30sp"
                        pos_hint:{'center_x':0.5,'center_y':.92}

        MDBottomNavigationItem:

            name: 'stock'
            text: 'Stock'
            icon: 'file-restore'

            MDBoxLayout:
                md_bg_color: app.theme_cls.bg_light     
                orientation: "vertical"
                ActionBar:
                    pos_hint: {'top':1}
                    ActionView:
                        use_separator: True
                        ActionPrevious:
                            title: "Register"
                            with_previous: False
                        ActionGroup:
                            text: "    Navigation    "
                            font_size: '16sp'
                            font_name: 'fonts/poppins-Regular.ttf'
                            mode: 'spinner'
                            ActionButton:
                                text: 'Scan Equipment'
                                font_name: 'fonts/Poppins-LightItalic.ttf'
                                font_size: '18sp'
                                on_press:
                                    # root.manager.current = 'read'
                            ActionButton:
                                text: 'Inventory Stats'
                                font_name: 'fonts/Poppins-LightItalic.ttf'
                                font_size: '18sp'
                                on_press:
                                    # root.manager.current = 'stats'
                            ActionButton:
                                text: 'Back'
                                font_name: 'fonts/Poppins-LightItalic.ttf'
                                font_size: '18sp'
                                on_press:
                                    root.manager.current = 'menu'  
                            ActionButton:
                                text: 'Log Out'
                                font_name: 'fonts/Poppins-LightItalic.ttf'
                                font_size: '18sp'
                                on_press:
                                    # root.manager.current = 'menu'        
                            ActionButton:
                                text: 'Quit'
                                font_name: 'fonts/Poppins-LightItalic.ttf'
                                font_size: '18sp'
                                on_press: app.btnClose()

                MDFloatLayout:
                    bg: app.theme_cls.bg_normal
                    MDLabel:

                        text: "Availabilities"
                        # theme_text_color: 'Custom'
                        # text_color:150/255, 146/255, 144/255,1  
                        halign: "center"
                        font_type: "fonts/Poppins-SemiBold.ttf"
                        text_color: get_color_from_hex("#97ecf8") #app.theme_cls.primary_dark
                        font_size: "30sp"
                        pos_hint:{'center_x':0.5,'center_y':.92}

                        '''