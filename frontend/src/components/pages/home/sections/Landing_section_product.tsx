// import React, { useEffect, useRef, useState } from "react";

const ContextType = "section";
const ContextId = "";
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function Landing_section_product({
  children,
  _className='branding',
  _id = ContextId,
  _style,
  _onClick,
  _onCompClick, 
  ...rest
}: _defaultProps) {
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////

  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  return (
    <ContextType
      {...rest}
      id={_id}
      className={_className}
      onClick={_onClick}
      style={_style}
    >

        <section className='product'>
    
            <img className='product-image' src={Branding_big_two}/>
                <div className='product__wrapper'>
              
                        <Paragragh_landing 
                            _title=''
                            _black_letter={true}
                            _desc='Based on a QR technology the app itself is 
                            able to generate on the go new labels, assign / Unassign, delete and manage 
                            multiple assets, and even create new categories, and for the sake o mobility
                            we decided to develope an app that could run seamlessly even without a rigid 
                            CRM like web page' />

            <img className='product-logo' src={MotherTechLogo}/>
                 
                </div>

        </section>

         <section className='product__middle'>
            <img src={QR_Scan_me} className='product__middle-img' alt='qrscan'></img>
         </section> 

        <section className='product'>
                <div className='product__wrapper'>
                    <img className='product-logoL' src={MotherTechLogo}/>

                        <Paragragh_landing 
                            _title=''
                            _black_letter={true}
                            _desc='Using a pythons veratile librarire and framworks, was integrated to the app
                            two key functionalities for tracking assets, real time, with help of gps powered hardware
                            arduino like programable with simple C++ code(code not inlcuded in repo). along with the possibility
                            of remembering the last location of an asset versus the new, making a simple linear regression with
                            tensorflows powerrful neurunal networks in order to detect an anomalous move, and alerting owner of rental assets.' />
              
                 
                </div>

            <img className='product-image' src={Branding_big_one}/>


        </section>

    
      {children}
    </ContextType>
  );
}

/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
type _defaultProps = {
  children?: React.ReactNode;
  _id?: string;
  _className?: string;
  _style?: React.CSSProperties;
  _onClick?: () => void;
  _onCompClick?: () => void;
};

//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//@ts-ignore
import './Landing_sections.scss'; //@ts-ignore
import {GeneralLogo, Branding_big_one, Branding_big_two,MotherTechLogo,QR_Scan_me} from '../../../../utility/assetsimport.js';
import Paragragh_landing from './elements/Parragraph.js';
