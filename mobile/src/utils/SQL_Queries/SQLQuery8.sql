select * from iCAT_Sub_Category 

select * from iCAT_Movement_Type

/*DELETE FROM iCAT_Item_Descrption WHERE Category_ID='2';*/

select * from iCAT_Condition

select * from iCAT_Item

select * from iCAT_Category

select * from iCAT_Location

select * from iCAT_User




select * from iCAT_Category

select * from iCAT_Item_Description
select * from iCAT_Sub_Category 



select * from iCAT_Category where Category_ID='2'
select Category_ID from iCAT_Category where Category_DSC='Equipment'

select * from iCAT_Sub_Category where Category_ID='2'

select * from iCAT_Category where Category_DSC='Equipment'

select Sub_Category_ID from iCAT_Sub_Category where Sub_Category_DSC='UPS'

select Condition_DSC from iCAT_Condition where NOT Condition_STC = 'INI'
select  condition_DSC from iCAT_Condition where Condition_STC = 'YES' AND Condition_END = 'YES'

select * from iCAT_Account	
select * from iCAT_Location where Agent_ASG = 'Yes'

select * from iCAT_Item
select * from iCAT_Condition
select * from iCAT_Employee
select * from iCAT_Position_Account
select * from iCAT_Location


select *  from iCAT_Movement_Type
select * from iTRX_Movement

select * from iCAT_User


select *  from iCAT_Movement_Type
select * from iTRX_Movement
select * from iCAT_Account
select * from iCAT_Employee
exec ixSP_Leer_QR 'ICON_TM02'


exec ixSP_Responsiva_Empleado '777'

exec ixSP_Ciclo_Item '3'

exec ixSP_Ciclo_Item_Ultimo_Paso '3'

-----------------------------------------------------------

select *
from iTRX_Movement




select * from iCAT_Employee
select * from iCAT_Account
select * from iCAT_POsition_Account

select * from iCAT_Movement_Type	




exec ixSP_Leer_QR 'ICON_TM02'

exec ixSP_Ciclo_Item 3

exec ixSP_Responsiva_Empleado 777



exec ixSP_Ciclo_Item_Ultimo_Paso 3



select * from iCAT_Item


alter procedure ixSP_Leer_QR (@QR nvarchar(100))
as
begin

	select P.Item_ID
	      ,P.QR
	      ,P.Item_DSC
		  ,Q.Category_DSC
		  ,R.Sub_Category_DSC
	from iCAT_Item P inner join iCAT_Category Q     on P.Category_ID=Q.Category_ID
	                 inner join iCAT_Sub_Category R on P.Sub_Category_ID=R.Sub_Category_ID

	where QR=@QR


end



	select P.Item_ID
	      ,P.QR
	      ,P.Item_DSC
		  ,Q.Category_DSC
		  ,R.Sub_Category_DSC
	from iCAT_Item P inner join iCAT_Category Q     on P.Category_ID = Q.Category_ID
	                 inner join iCAT_Sub_Category R on P.Sub_Category_ID = R.Sub_Category_ID
					 

	where QR= 'ICON_EP15ALV01'




select * from iCAT_Category


select * from iCAT_Category where Category_ID='2'
select Category_ID from iCAT_Category where Category_DSC='Equipment'

select * from iCAT_Sub_Category where Category_ID='2'

select * from iCAT_Category where Category_DSC='Equipment'

select Sub_Category_ID from iCAT_Sub_Category where Sub_Category_DSC='UPS'

select Account_DSC from iCAT_Account where Account_ID = '1'



select UTM_X, UTM_Y from iCAT_Location where Location_ID ='1'
select First_Name, Last_Name, Account_ID from iCAT_Employee where Employee_ID = '777'
select  condition_DSC from iCAT_Condition where Condition_STC = 'YES'

select Employee_ID 
		, Account_ID
		, Position_Account_ID 
		from iCAT_Employee where  First_Name = 'Juan' and  Last_Name = 'Ugarte' 

select * from iCAT_Account
select * from iCAT_Item
select * from iCAT_Condition
select * from iCAT_Employee
select * from iCAT_Position_Account
select * from iCAT_Location
select * from iCAT_Item_Description

select *  from iCAT_Movement_Type
select * from iTRX_Movement

select * from iCAT_User


select *  from iCAT_Movement_Type
select * from iTRX_Movement
select * from iCAT_Account
select * from iCAT_Employee
	exec ixSP_Leer_QR 'ICON_EP15ALV01'


exec ixSP_Responsiva_Empleado '934'

exec ixSP_Ciclo_Item '43'

exec ixSP_Ciclo_Item_Ultimo_Paso '43'

	declare @Ultimo_paso int=(select max(Movement_ID) as Movement_ID
	                          from iTRX_Movement
							  where Item_ID='3' )

	select P.Movement_ID
		  ,Q.Movement_Type_DSC
		  ,V.User_DSC
		  ,T.Location_DSC
		  ,case
			  when P.Location_ID=6 then S.UTM_X
			  else T.UTM_X
		   end UTM_X
		  ,case
			  when P.Location_ID=6 then S.UTM_Y
			  else T.UTM_Y
		   end UTM_Y
		  ,P.Date_Time as Date_Time
		  ,R.Item_DSC
		  ,R.QR
		  ,S.First_Name+' '+S.Last_Name as Employee_DSC
		  ,U.Condition_DSC
		  ,P.Employee_ID
	from iTRX_Movement as P inner join iCAT_Movement_Type as Q on P.Moment_Type_ID = Q.Movement_Type_ID
							inner join iCAT_Item          as R on P.Item_ID = R.Item_ID
							inner join iCAT_Employee      as S on P.Employee_ID = S.Employee_ID
							inner join iCAT_Location      as T on P.Location_ID=T.Location_ID
							inner join iCAT_Condition     as U on P.Condition_ID=U.Condition_ID
							inner join iCAT_User          as V on P.User_ID=V.User_ID
							inner join iCAT_Employee	  as Y on P.Employee_ID = Y.Employee_ID
							


	where P.Movement_ID= '43'
	order by P.Date_Time

select * from iCAT_Item
select Item_DSC from iCAT_Item where QR = 'ICON_EP15ALV1'  

Insert into iCAT_Item(QR_Label_IMG) values('test') where QR = 'ICON_EP15ALV1'  


select QR_Label_IMG from iCAT_Item where QR = 'ICON_EP15ALV1' and insert into QR_Label_IMG values('test')

select Q.Item_DSC
	,Q.QR_Label_IMG
	from iCAT_Item Q  where QR = 'ICON_EP15ALV1'  

select * from iCAT_Item Q  insert into Q.QR_Label_IMG values('test') where Q.QR = 'ICON_EP15ALV1' 

insert into iCAT_Item(QR_Label_IMG) values('test')  

insert into iCAT_Item(Index_SRS) values('01') select * from  iCAT_Item where QR = 'ICON_EP15ALV1' 

update iCAT_Item set Index_SRS = '01' where QR = 'ICON_EP15ALV1' 
update iCAT_Item set Account_ID = '01' where QR = 'ICON_EP15ALV1' 





select * from iCAT_Item

* from iCAT_Item as Q
, where QR = 'ICON_EP15ALV1' 


	select P.Item_ID
	      ,P.QR
	      ,P.Item_DSC
		  ,Q.Category_DSC
		  ,R.Sub_Category_DSC
	from iCAT_Item P inner join iCAT_Category Q     on P.Category_ID=Q.Category_ID
	                 inner join iCAT_Sub_Category R on P.Sub_Category_ID=R.Sub_Category_ID

	where QR=@QR



select * from iCAT_Item
select Item_DSC from iCAT_Item where QR = 'ICON_EP15ALV1'  

Insert into iCAT_Item(QR_Label_IMG) values('test') where QR = 'ICON_EP15ALV1'  


select QR_Label_IMG from iCAT_Item where QR = 'ICON_EP15ALV1' and insert into QR_Label_IMG values('test')

select Q.Item_DSC
	,Q.QR_Label_IMG
	from iCAT_Item Q  where QR = 'ICON_EP15ALV1'  

select * from iCAT_Item Q  insert into Q.QR_Label_IMG values('test') where Q.QR = 'ICON_EP15ALV1' 

insert into iCAT_Item(QR_Label_IMG) values('test')  

insert into iCAT_Item(Index_SRS) values('01') select * from  iCAT_Item where QR = 'ICON_EP15ALV1' 

update iCAT_Item set Index_SRS = '01' where QR = 'ICON_EP15ALV1' 


* from iCAT_Item as Q
, where QR = 'ICON_EP15ALV1' 


	select P.Item_ID
	      ,P.QR
	      ,P.Item_DSC
		  ,Q.Category_DSC
		  ,R.Sub_Category_DSC
	from iCAT_Item P inner join iCAT_Category Q     on P.Category_ID=Q.Category_ID
	                 inner join iCAT_Sub_Category R on P.Sub_Category_ID=R.Sub_Category_ID

	where QR=@QR



	
DECLARE @product NVARCHAR(50) = 'ICON_EP15ALV1' 
IF EXISTS(SELECT 1 FROM iCAT_Item WITH(NOLOCK)
          WHERE QR = @product)
    BEGIN
        PRINT 'Record Exist'

    END
ELSE
    BEGIN
        PRINT 'Record does not Exist'

    END






	DECLARE @product NVARCHAR(50)  = 'ICON_EP15ALV1' 
IF EXISTS(SELECT 1 FROM iCAT_Item WITH(NOLOCK)
          WHERE QR = @product)
    BEGIN
        select 'Record Exist'

    END
ELSE
    BEGIN
        select 'Record does not Exist'

    END


	exec ixSP_Existing_Item_checker 'ICON_EP15ALV1'


	declare @Index_ int = (select max(Movement_ID) as _Movement_ID from iTRX_Movement where Item_ID = '3')

	declare @current_index int = ( select max(Index_SRS) from iCAT_Item where Account_ID = '1' and Category_ID = '2' and Sub_Category_ID = '15')

	select @current_index + 1


	declare @current_index int = ( 
		select max(Index_SRS) 
		from iCAT_Item 
		where 
		Account_ID = (select Account_ID from iCAT_Account where Account_CD = 'ALV' ) /*'1' Alleviate*/
		and Category_ID = (select Category_ID from iCAT_Category where Category_CD = 'EP') /*'2' Equipment */
		and Sub_Category_ID = (select Sub_Category_ID from iCAT_Sub_Category where Sub_Category_DSC = 'CPU') /*'15' CPU*/
		)

	select @current_index + 1



	declare @current_index int = ( 
			select max(Index_SRS) 
			from iCAT_Item 
			where 
			Account_ID = (select Account_ID from iCAT_Account where Account_DSC = 'Alleviate' ) /*'1' Alleviate Account_CD ALV*/
			and Category_ID = (select Category_ID from iCAT_Category where Category_DSC = 'Equipment') /*'2' Equipment Category_CD EP */
			and Sub_Category_ID = (select Sub_Category_ID from iCAT_Sub_Category where Sub_Category_DSC = 'CPU') /*'15' CPU*/
			)

	select @current_index + 1

	

	declare @_Account NVARCHAR(50) = ('Alleviate')
	declare @_Category NVARCHAR(50) = ('Equipment')
	declare @_Sub_Category NVARCHAR(50) =('CPU')
	
	declare @current_index int = ( 
			select max(Index_SRS) 
			from iCAT_Item 
			where 
			Account_ID = 
						(select Account_ID 
						from iCAT_Account 
						where Account_DSC = @_Account ) /*'1' Alleviate Account_CD ALV*/

			and Category_ID = 
						(select Category_ID 
						from iCAT_Category 
						where Category_DSC = @_Category ) /*'2' Equipment Category_CD EP */

			and Sub_Category_ID = 
						(select Sub_Category_ID 
						from iCAT_Sub_Category 
						where Sub_Category_DSC = @_Sub_Category ) /*'15' CPU*/

			)

	select @current_index + 1


	CREATE PROCEDURE ixSP_Get_Product_Index   @_Account NVARCHAR(50), @_Category NVARCHAR(50), @_Sub_Category NVARCHAR(50)																		
as
begin
	declare @current_index int = ( 
			select max(Index_SRS) 
			from iCAT_Item 
			where 
			Account_ID = 
						(
						select Account_ID 
						from iCAT_Account 
						where Account_DSC = @_Account 
						) /*'1' Alleviate Account_CD ALV*/

			and Category_ID = 
						(
						select Category_ID 
						from iCAT_Category 
						where Category_DSC = @_Category 
						) /*'2' Equipment Category_CD EP */

			and Sub_Category_ID = 
						(
						select Sub_Category_ID 
						from iCAT_Sub_Category 
						where Sub_Category_DSC = @_Sub_Category 
						) /*'15' CPU*/
			)

	select @current_index + 1

end


	select * from iCAT_Account
	select * from iCAT_Category
	select * from iCAT_Sub_Category

	select Account_ID from iCAT_Account where Account_ = 'ALV'
	select Category_ID from iCAT_Category where Category_CD = 'EP'
	select Sub_Category_ID from iCAT_Sub_Category where Sub_Category_DSC = 'CPU'

	exec ixSP_Get_Product_Index 'Alleviate', 'Equipment', 'CPU'


	
select * from iCAT_Item

insert into iCAT_Item(
						QR
						,Item_DSC
						,Category_ID
						,Sub_Category_ID
						,Index_SRS
						,QR_Label_IMG
						,Account_ID
						) 
			values(
						'ICON_EP15ALV2'
						,'DELL Optiplex 7020'
						,'2'
						,'15'
						,'2'
						,'NULL'
						,'1'
					)


	
select * from iCAT_Item

insert into iCAT_Item(
						QR
						,Item_DSC
						,Category_ID
						,Sub_Category_ID
						,Index_SRS
						,QR_Label_IMG
						,Account_ID
						) 
			values(
						'ICON_EP15ALV2'
						,'DELL Optiplex 7020'
						,'2'
						,'15'
						,'2'
						,'NULL'
						,'1'
					)

					USE [Test_LN]
GO
/****** Object:  StoredProcedure [dbo].[ixSP_New_Item_Registration]    Script Date: 5/1/2022 10:09:05 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[ixSP_New_Item_Registration] @_QR nvarchar(100)
											,@_Item_DSC nvarchar(100)
											,@_Category_DSC nvarchar(100)
											,@_Sub_Category_DSC nvarchar(100)
											,@_Index_SRS INT
											,@_QR_Label_IMG image
											,@_Account_DSC nvarchar(100)

as
begin
 declare @_Category_ID INT = (
								select Category_ID from iCAT_Category where Category_DSC = @_Category_DSC
							 )
 declare @_Sub_Category_ID INT = (
								select Sub_category_ID from iCAT_Sub_Category where Sub_Category_DSC = @_Sub_Category_DSC 
								)
 declare @_Account_ID INT = (
								select Account_ID from iCAT_Account where Account_DSC = @_Account_DSC 
								)
insert into iCAT_Item(
						QR
						,Item_DSC
						,Category_ID
						,Sub_Category_ID
						,Index_SRS
						,QR_Label_IMG
						,Account_ID
						) 

			values(
						@_QR
						,@_Item_DSC
						,@_Category_ID
						,@_Sub_Category_ID
						,@_Index_SRS
						,@_QR_Label_IMG
						,@_Account_ID
					)
end

exec ixSP_New_Item_Registration 'ICON_EP15ALV3', 'DELL Optiplex 990', 'Equipment', 'CPU', '3', 'NULLL', 'Alleviate' 


select * from iCAT_Movement_Type
select * from iCAT_Item
select * from iCAT_Employee
select * from iCAT_location
select * from iCAT_Condition
select * from iCAT_User

select * from iTRX_Movement
select * from iCAT_Item
select CURRENT_TIMESTAMP as DateTime

select Item_ID  from iCAT_Item where QR= 'ICON_EP15ALV6'

select * from iCAT_Item

select Condition_ID from iTRX_Movement
select Location_ID from iCAT_location where Location_DSC = 'WFH'

exec ixSP_Responsiva_Empleado '787'

exec ixSP_Ciclo_Item '43'

exec ixSP_Ciclo_Item_Ultimo_Paso '43'

/*'{self.record_exist_Item_ID}'*/

insert into iTRX_Movement(Moment_Type_ID, Date_Time, Item_ID, Employee_ID, Location_ID, Condition_ID, User_ID) 
												values('1', CURRENT_TIMESTAMP, '36', '99999', '1', '1', '3' )

/*Assignation*/
insert into iTRX_Movement(Moment_Type_ID, Date_Time, Item_ID, Employee_ID, Location_ID, Condition_ID, User_ID) 
					values('2', CURRENT_TIMESTAMP, '{self.Current_Item_ID}', '{self.employee_requested}', '{self.employee_location_requested}', '{self.item_current_condition_ID}', '{self.user_ID}' )


/*Deallocation*/
insert into iTRX_Movement(Moment_Type_ID, Date_Time, Item_ID, Employee_ID, Location_ID, Condition_ID, User_ID) 
												values('3', CURRENT_TIMESTAMP, '{self.Current_Item_ID}', '99999', '1', '1', '{self.user_ID}' )


/*scratch*/
insert into iTRX_Movement(Moment_Type_ID, Date_Time, Item_ID, Employee_ID, Location_ID, Condition_ID, User_ID) 
												values('6', CURRENT_TIMESTAMP, '{self.Current_Item_ID}', '99999', '1', '1', '3' )



declare @Ultimo_paso int=(select max(Movement_ID) as Movement_ID
	                          from iTRX_Movement
							  where Item_ID='43' )

	--Visualizar el ciclo de un ITEM
	select P.Movement_ID
		  ,Q.Movement_Type_DSC
		  ,V.User_DSC
		  ,T.Location_DSC
		  ,T.Location_ID
		  ,case
			  when P.Location_ID=6 then S.UTM_X
			  else T.UTM_X
		   end UTM_X
		  ,case
			  when P.Location_ID=6 then S.UTM_Y
			  else T.UTM_Y
		   end UTM_Y
		  ,P.Date_Time as Date_Time
		  ,R.Item_DSC
		  ,R.QR
		  ,S.First_Name+' '+S.Last_Name as Employee_DSC
		  ,U.Condition_DSC
		  ,U.Condition_ID
		  ,P.Employee_ID
		  

	from iTRX_Movement as P inner join iCAT_Movement_Type as Q on P.Moment_Type_ID=Q.Movement_Type_ID
							inner join iCAT_Item          as R on P.Item_ID=R.Item_ID
							inner join iCAT_Employee      as S on P.Employee_ID=S.Employee_ID
							inner join iCAT_Location      as T on P.Location_ID=T.Location_ID
							inner join iCAT_Condition     as U on P.Condition_ID=U.Condition_ID
							inner join iCAT_User          as V on P.User_ID=V.User_ID
							inner join iCAT_Employee	  as Y on P.Employee_ID = Y.Employee_ID

	where P.Movement_ID=@Ultimo_paso
	order by P.Date_Time


/**/
select * from iCAT_Account
select * from iCAT_Category
select * from iCAT_Sub_Category
select * from iCAT_Item_Description
select * from iCAT_Position_Account

/**/
select * from iCAT_Movement_Type
select * from iCAT_Item
select * from iCAT_Employee
select * from iCAT_location
select * from iCAT_Condition
select * from iCAT_User
select * from iCAT_Scratch_Reasons

/*Check on Updated tables*/
select * from iTRX_Movement
select * from iCAT_Item
select CURRENT_TIMESTAMP as DateTime

/*Check on item steps*/
exec ixSP_Ciclo_Item '63'
exec ixSP_Ciclo_Item_Ultimo_Paso '43'

exec ixSP_New_Reg_Checker '65'



declare @Item_new int = '64'

declare @record_new_max int=(select max(Movement_ID) as Movement_ID
	                        from iTRX_Movement
							where Item_ID=@Item_new )
							
declare @last_record_val int 

IF EXISTS(SELECT 1 FROM iTRX_Movement WITH(NOLOCK)
          WHERE Movement_ID = @record_new_max)

 	/* replace for new pyspark instance and azure intervention */

	BEGIN
				select @last_record_val = count(*) from iTRX_Movement where Movement_ID = @record_new_max 
				select @last_record_val as Records
				 
	END
	ELSE
    BEGIN
		DELETE from iCAT_Item where Item_ID = @Item_new
        select 0 as Records 

    END
	

	select   0 as DATA_TYPE

/*
	CREATE PROCEDURE ixSP_New_Reg_Checker @Item_new int
as 
begin
declare @record_new_max int=(select max(Movement_ID) as Movement_ID
	                        from iTRX_Movement
							where Item_ID=@Item_new )
							
declare @last_record_val int 

IF EXISTS(SELECT 1 FROM iTRX_Movement WITH(NOLOCK)
          WHERE Movement_ID = @record_new_max)
 	

	BEGIN
				select @last_record_val = count(*) from iTRX_Movement where Movement_ID = @record_new_max 
				select @last_record_val as Records
				 
	END
	ELSE
    BEGIN
        select '0' as Records

    END
END

*/


declare @product int = '66'

IF EXISTS(SELECT 1 FROM iCAT_Item WITH(NOLOCK)
          WHERE Item_ID = @product)
    BEGIN
        select '1' as Record

    END
ELSE
    BEGIN
        select '0' as Record

    END


	CREATE PROCEDURE ixSP_On_Failed_reg_item_deleted_checker @product int
as
begin
IF EXISTS(SELECT 1 FROM iCAT_Item WITH(NOLOCK)
          WHERE Item_ID = @product)
    BEGIN
        select '1' as Record

    END
ELSE
    BEGIN
        select '0' as Record

    END
end

/*TO POWER BI PROCESSED DATA FOR CLUSTER A*/
USE [Test_LN]
GO
/****** Object:  StoredProcedure [dbo].[xSP_Data_BI]    Script Date: 09/05/2022 08:42:45 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER procedure [dbo].[xSP_Data_BI]
as
begin
	IF OBJECT_ID('dbo.TBL_TPago', 'U') IS NOT NULL 
	  DROP TABLE dbo.TBL_TPago; 

	select R.Agencia_ID
		  ,R.Agencia_DSC
		  ,R.Fecha
		  ,dbo.fn_Ret_Fecha_DSC(R.Fecha) as Fecha_DSC
		  ,Usuario_ID
		  ,Usuario_DSC
		  ,Tipo_de_gestion
		  ,Posee_cuenta_en_el_banco
		  ,compania_de_linea_telefonica
		  ,Razon_por_lo_cual_no_califica_el_cliente
		  ,R.efectivo
		  ,sum(R.Venta_Real) as Venta_Real
		  ,sum(R.No_efectivo_Real) as No_efectivo_Real
		  into TBL_TPago
	from

		(select 1 as Meta_ID
 			  ,P.PDI as Agencia_ID
			  ,dbo.fn_Ret_Agencia_DSC(P.PDI) as Agencia_DSC
			  ,convert(date,P.fecha_hora_evidencia) as Fecha
			  ,Usuario_ID
			  ,dbo.fn_Ret_Usuario_DSC(Usuario_ID) as Usuario_DSC
			  ,Tipo_de_gestion
			  ,Posee_cuenta_en_el_banco
			  ,compania_de_linea_telefonica
			  ,'SI' as efectivo
			  ,'Activo cliente/venta' as Razon_por_lo_cual_no_califica_el_cliente
			  ,count(1) as Venta_Real
			  ,0 as No_efectivo_Real
		from TRX_8038 P 
		where el_cliente_califica='SI'
		group by  P.PDI,dbo.fn_Ret_Agencia_DSC(P.PDI),convert(date,P.fecha_hora_evidencia),Usuario_ID,dbo.fn_Ret_Usuario_DSC(Usuario_ID),Tipo_de_gestion,Posee_cuenta_en_el_banco,compania_de_linea_telefonica
		union
		select 1 as Meta_ID
			  ,P.PDI as Agencia_ID
			  ,dbo.fn_Ret_Agencia_DSC(P.PDI) as Agencia_DSC
			  ,convert(date,P.fecha_hora_evidencia) as Fecha
			  ,Usuario_ID
			  ,dbo.fn_Ret_Usuario_DSC(Usuario_ID) as Usuario_DSC
			  ,Tipo_de_gestion
			  ,Posee_cuenta_en_el_banco
			  ,compania_de_linea_telefonica
			  ,'NO' as efectivo
			  ,Razon_por_lo_cual_no_califica_el_cliente
			  ,0 Venta_Real
			  ,count(1) as No_efectivo_Real
		from TRX_8038 P 
		where el_cliente_califica='NO'
		group by  P.PDI,dbo.fn_Ret_Agencia_DSC(P.PDI),convert(date,P.fecha_hora_evidencia),Usuario_ID,dbo.fn_Ret_Usuario_DSC(Usuario_ID),Tipo_de_gestion,Posee_cuenta_en_el_banco,compania_de_linea_telefonica,Razon_por_lo_cual_no_califica_el_cliente) R left join CAT_Meta S on R.Meta_ID=S.Meta_ID
	group by R.efectivo,R.Agencia_ID,R.Agencia_DSC,R.Fecha,dbo.fn_Ret_Fecha_DSC(R.Fecha),Usuario_ID,Usuario_DSC,Tipo_de_gestion,Posee_cuenta_en_el_banco,compania_de_linea_telefonica,Razon_por_lo_cual_no_califica_el_cliente


end

/*END OF CYCLE ONE*/


declare @Item_ID int


	--Visualizar el ciclo de un ITEM
	select P.Movement_ID
		  ,Q.Movement_Type_DSC
		  ,V.User_DSC
		  ,T.Location_DSC
		  ,case
			  when P.Location_ID=6 then S.UTM_X
			  else T.UTM_X
		   end UTM_X
		  ,case
			  when P.Location_ID=6 then S.UTM_Y
			  else T.UTM_Y
		   end UTM_Y
		  ,P.Date_Time as Date_Time
		  ,R.Item_DSC
		  ,R.QR
		  ,S.First_Name+' '+S.Last_Name as Employee_DSC
		  ,U.Condition_DSC
	from iTRX_Movement as P inner join iCAT_Movement_Type as Q on P.Moment_Type_ID=Q.Movement_Type_ID
							inner join iCAT_Item          as R on P.Item_ID=R.Item_ID
							inner join iCAT_Employee      as S on P.Employee_ID=S.Employee_ID
							inner join iCAT_Location      as T on P.Location_ID=T.Location_ID
							inner join iCAT_Condition     as U on P.Condition_ID=U.Condition_ID
							inner join iCAT_User          as V on P.User_ID=V.User_ID
	where P.Item_ID=@Item_ID
	order by P.Date_Time



	declare @EMP_ID int = '777'
	declare @Ultimo_paso int=(select max(Movement_ID) as Movement_ID
	                          from iTRX_Movement
							  where Employee_ID=@EMP_ID )

	--Visualizar el ciclo de un ITEM
	select P.Movement_ID
		  ,Q.Movement_Type_DSC
		  ,V.User_DSC
		  ,T.Location_DSC
		  ,T.Location_ID
		  ,case
			  when P.Location_ID=6 then S.UTM_X
			  else T.UTM_X
		   end UTM_X
		  ,case
			  when P.Location_ID=6 then S.UTM_Y
			  else T.UTM_Y
		   end UTM_Y
		  ,P.Date_Time as Date_Time
		  ,R.Item_DSC
		  ,R.QR
		  ,S.First_Name+' '+S.Last_Name as Employee_DSC
		  ,U.Condition_DSC
		  ,U.Condition_ID
		  ,P.Employee_ID

	from iTRX_Movement as P inner join iCAT_Movement_Type as Q on P.Moment_Type_ID=Q.Movement_Type_ID
							inner join iCAT_Item          as R on P.Item_ID=R.Item_ID
							inner join iCAT_Employee      as S on P.Employee_ID=S.Employee_ID
							inner join iCAT_Location      as T on P.Location_ID=T.Location_ID
							inner join iCAT_Condition     as U on P.Condition_ID=U.Condition_ID
							inner join iCAT_User          as V on P.User_ID=V.User_ID
							inner join iCAT_Employee	  as Y on P.Employee_ID = Y.Employee_ID

	where P.Movement_ID=@Ultimo_paso
	and Movement_ID in (2)
	order by P.Date_Time



declare @EMP_ID int = '777'
declare @last_step int=(select max(Movement_ID) as Movement_ID
	                        from iTRX_Movement
							 where Employee_ID=@EMP_ID )--last move under agent ID--

	--Display items assigned to agent orderd by time--
	select P.Movement_ID
		  ,Q.Movement_Type_DSC
		  ,V.User_DSC
		  ,T.Location_DSC
		  ,case
			  when P.Location_ID=6 then S.UTM_X
			  else T.UTM_X
		   end UTM_X
		  ,case
			  when P.Location_ID=6 then S.UTM_Y
			  else T.UTM_Y
		   end UTM_Y
		  ,P.Date_Time as Date_Time
		  ,R.Item_DSC
		  ,R.Item_ID
		  ,R.QR
		  ,S.First_Name+' '+S.Last_Name as Employee_DSC
		  ,U.Condition_DSC
		
	from iTRX_Movement as P inner join iCAT_Movement_Type as Q on P.Moment_Type_ID=Q.Movement_Type_ID
							inner join iCAT_Item          as R on P.Item_ID=R.Item_ID
							inner join iCAT_Employee      as S on P.Employee_ID=S.Employee_ID
							inner join iCAT_Location      as T on P.Location_ID=T.Location_ID
							inner join iCAT_Condition     as U on P.Condition_ID=U.Condition_ID
							inner join iCAT_User          as V on P.User_ID=V.User_ID

	where P.Employee_ID=@EMP_ID
	  and P.Moment_Type_ID in (2)
		-->>>Order by last Movement_ID on duplicated Item_ID without excluding the other items under same EMP_ID
	order by P.Date_Time



	declare @EMP_ID int = '777'
declare @last_step int=(select max(Movement_ID) as Movement_ID
	                        from iTRX_Movement
							 where Employee_ID=@EMP_ID )--last move under agent ID--


	--Display items assigned to agent orderd by time--
	select P.Movement_ID
		  ,Q.Movement_Type_DSC
		  ,V.User_DSC
		  ,T.Location_DSC
		  ,case
			  when P.Location_ID=6 then S.UTM_X
			  else T.UTM_X
		   end UTM_X
		  ,case
			  when P.Location_ID=6 then S.UTM_Y
			  else T.UTM_Y
		   end UTM_Y
		  ,P.Date_Time as Date_Time
		  ,R.Item_DSC
		  ,R.Item_ID
		  ,R.QR
		  ,S.First_Name+' '+S.Last_Name as Employee_DSC
		  ,U.Condition_DSC
		
	from iTRX_Movement as P inner join iCAT_Movement_Type as Q on P.Moment_Type_ID=Q.Movement_Type_ID
							inner join iCAT_Item          as R on P.Item_ID=R.Item_ID
							inner join iCAT_Employee      as S on P.Employee_ID=S.Employee_ID
							inner join iCAT_Location      as T on P.Location_ID=T.Location_ID
							inner join iCAT_Condition     as U on P.Condition_ID=U.Condition_ID
							inner join iCAT_User          as V on P.User_ID=V.User_ID

	where P.Employee_ID=@EMP_ID
	  and P.Moment_Type_ID in (2)
	  
		-->>>Order by last Movement_ID on duplicated Item_ID without excluding the other items under same EMP_ID
	order by P.Date_Time






	@ip AS VARCHAR(15) RETURNS BINARY(4)
    DECLARE @bin AS BINARY(4) = '192.65.68.201'

    SELECT @bin = CAST( CAST( PARSENAME( @ip, 4 ) AS INTEGER) AS BINARY(1))
                + CAST( CAST( PARSENAME( @ip, 3 ) AS INTEGER) AS BINARY(1))
                + CAST( CAST( PARSENAME( @ip, 2 ) AS INTEGER) AS BINARY(1))
                + CAST( CAST( PARSENAME( @ip, 1 ) AS INTEGER) AS BINARY(1))

    RETURN @bin









select * from iCAT_Employee

 and EXISTS (select  R.Item_ID   where Movement_ID  = @last_step )


 .[ixSP_Asignaciones_al_Empleado] (@Employee_ID int)
as
begin



	--Visualizar el ciclo de un ITEM

	select       P.Movement_ID
				,P.Item_ID
				,Q.Movement_Type_DSC
				,V.User_DSC
				,T.Location_DSC
				,case
					when P.Location_ID=6 then S.UTM_X
					else T.UTM_X
				end UTM_X
				,case
					when P.Location_ID=6 then S.UTM_Y
					else T.UTM_Y
				end UTM_Y
				,P.Date_Time as Date_Time
				,R.Item_DSC
				,R.QR
				,P.Employee_ID
				,S.First_Name+' '+S.Last_Name as Employee_DSC
				,U.Condition_DSC
				,dbo.fn_Ultimo_Tipo_movimiento(P.Employee_ID,P.Item_ID) as Ultimo_Tipo_movimiento
		from iTRX_Movement as P inner join iCAT_Movement_Type as Q on P.Moment_Type_ID=Q.Movement_Type_ID
								inner join iCAT_Item          as R on P.Item_ID=R.Item_ID
								inner join iCAT_Employee      as S on P.Employee_ID=S.Employee_ID
								inner join iCAT_Location      as T on P.Location_ID=T.Location_ID
								inner join iCAT_Condition     as U on P.Condition_ID=U.Condition_ID
								inner join iCAT_User          as V on P.User_ID=V.User_ID
		where P.Employee_ID=@Employee_ID
			and dbo.fn_Ultimo_Tipo_movimiento(P.Employee_ID,P.Item_ID)=2
		order by P.Date_Time

end


select *
from iCAT_Employee

select *
from iCAT_Movement_Type

select *
from iTRX_Movement




exec xSP_Devuelve_Ultima_asignacion 777




------------------------------------------------------------------------------------------------------------------------------
declare @EMP_ID int=777


select 
from iTRX_Movement P inner join 


select Item_ID
      ,max(Movement_ID) as Movement_ID
from iTRX_Movement
group by Item_ID


create function fn_Ultimo_Tipo_movimiento (@Employee_ID int,@Item_ID int)
returns int
as
begin
	declare @Ultimo int=0
	set @Ultimo=(	select top 1 Moment_Type_ID
					from iTRX_Movement
					where Item_ID=@Item_ID
					and Employee_ID=@Employee_ID
					order by Date_Time desc)

	return isnull(@Ultimo,0)
end


select dbo.fn_Ultimo_Tipo_movimiento(934,73)


select *
from iTRX_Movement
where Item_ID=73
order by Employee_ID,  Date_Time


select *
from iTRX_Movement
where Employee_ID=934
order by Employee_ID,  Date_Time



------------------------------
declare @Item_ID int=76
declare @Employee_ID int=777

select top 1 Moment_Type_ID
from iTRX_Movement
where Item_ID=@Item_ID
and Employee_ID=@Employee_ID
order by Date_Time desc


select *
from iTRX_Movement



777
787
934
99999

exec [ixSP_Asignaciones_al_Empleado] 777


CREATE FUNCTION dbo.fnBinaryIPv4(@ip AS VARCHAR(15)) RETURNS BINARY(4)
AS
BEGIN
    DECLARE @bin AS BINARY(4)

    SELECT @bin = CAST( CAST( PARSENAME( @ip, 4 ) AS INTEGER) AS BINARY(1))
                + CAST( CAST( PARSENAME( @ip, 3 ) AS INTEGER) AS BINARY(1))
                + CAST( CAST( PARSENAME( @ip, 2 ) AS INTEGER) AS BINARY(1))
                + CAST( CAST( PARSENAME( @ip, 1 ) AS INTEGER) AS BINARY(1))

    RETURN @bin
END
go



CREATE FUNCTION dbo.fnDisplayIPv4(@ip AS BINARY(4)) RETURNS VARCHAR(15)
AS
BEGIN
    DECLARE @str AS VARCHAR(15) 

    SELECT @str = CAST( CAST( SUBSTRING( @ip, 1, 1) AS INTEGER) AS VARCHAR(3) ) + '.'
                + CAST( CAST( SUBSTRING( @ip, 2, 1) AS INTEGER) AS VARCHAR(3) ) + '.'
                + CAST( CAST( SUBSTRING( @ip, 3, 1) AS INTEGER) AS VARCHAR(3) ) + '.'
                + CAST( CAST( SUBSTRING( @ip, 4, 1) AS INTEGER) AS VARCHAR(3) );

    RETURN @str
END;
go



select * from iCAT_Employee order by Account_ID

declare @acct int = 2
select * from iCAT_Employee where Account_ID=@acct  order by Employee_ID

select * from iCAT_Employee


SELECT dbo.fnBinaryIPv4('192.65.68.201')
--should return 0xC04144C9
go

SELECT dbo.fnDisplayIPv4( 0xC04144C9 )
-- should return '192.65.68.201'
go

declare @EMP int = 934
declare @IP VARCHAR(15) = '192.65.68.201'
update iCAT_Employee
SET IP_ADS_ATT = dbo.fnBinaryIPv4(@IP)
where Employee_ID = @EMP


SELECT dbo.fnBinaryIPv4('192.65.68.201')
--should return 0xC04144C9
go

SELECT dbo.fnDisplayIPv4( 0xC04144C9 )
-- should return '192.65.68.201'
go

declare @EMP int = 934
declare @IP VARCHAR(15) = '192.65.68.201'
update iCAT_Employee
SET IP_ADS_ATT = dbo.fnBinaryIPv4(@IP)
where Employee_ID = @EMP


declare @EMP int = 934
select dbo.fnDisplayIPv4(IP_ADS_ATT) from iCAT_Employee where Employee_ID = @EMP

insert into iCAT_TIM_Employee (
								Employee_ID
								,First_Name
								,Last_Name
								,Account_ID
								,Position_Account_ID
								,Face_Encoding
								)
						values (
								'125487'
								,'Milton'
								,'Mejia'
								,'1'
								,'1'
								,NULL
								)



select Face_Encoding from iCAT_TIM_Employee where Employee_ID = '125487'