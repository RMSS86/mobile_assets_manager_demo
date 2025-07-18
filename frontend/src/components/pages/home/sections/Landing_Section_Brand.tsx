// import React, { useEffect, useRef, useState } from "react";

const ContextType = "section";
const ContextId = "";
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function Landing_section_brand({
  children,
  _className,
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

        <section className='landing__wrapper'>
          <div className='landing__wrapper-wrap'>
            <div className='landing__wrapper-flex'>
                <Paragragh_landing 
                _stack={true}
                _title='Easy Assets Manager' 
                _desc='Welcome to the interactive mobil manager that resolves your inventory and assets problemas in one go
                . This is a Prototype intended to resolve issues with our clients persistent telecomunication asstes, 
                using an efficient QR Code powwered solution.' /> 

                <img className='landing__header-logo' src={GeneralLogo}/>
            </div>
            <TagButton _btnText='Discover'/>
          </div>
          

         
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
import {GeneralLogo, Branding_big_one, Branding_big_two} from '../../../../utility/assetsimport.js';
import Paragragh_landing from './elements/Parragraph.js';
import TagButton from '../../../UI/elements/buttons/TagButton.js';

