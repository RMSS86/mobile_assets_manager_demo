// import React, { useEffect, useRef, useState } from "react";

const ContextType = "section";
const ContextId = "";
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function HeaderSideButton({
  children,
  _className='side_btn',
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
    //   onClick={_onClick}
      style={_style}
    >
        <img alt='logo' src={GeneralLogo} className='side_btn__logo' onClick={_onClick}/>
        <a className='side_btn__text'>e-AM</a>
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
import './HeaderSideButton.scss'; //@ts-ignore
import {GeneralLogo,User,userLogo} from '../../../utility/assetsImport.js';