// import React, { useEffect, useRef, useState } from "react";

const ContextType = "section";
const ContextId = "";
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function Paragragh_landing({
  children,
  _className = "paragragh",
  _stack = false,
  _black_letter=false,
  _title,
  _desc,
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
      <div className="paragragh__wrapper">
        <div className="paragragh__wrapper-col">
          <h1 className="paragragh__title">{_title}</h1>
          <p className={_black_letter ? "paragragh__desc clr_black" : "paragragh__desc"}>{_desc} </p>
        </div>
      </div>
      {_stack && (
        <div>
          <p className="paragragh__stack">
            <a href="https://skillicons.dev">
              <img 
                className="paragragh__stack-img"
                src="https://skillicons.dev/icons?i=py,sqlite,react,js,ts,sass,express"
              />
            </a>
          </p>
          <div className="landing__wrapper-footer">
            <img className="landing__wrapper-foot" alt="personal" src={MotherTechLogo} />
            <p className="landing__wrapper-credit" >Robbie Solis-Stevenson</p>
          </div>
        </div>
      )}
    </ContextType>
  );
}

/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
type _defaultProps = {
  children?: React.ReactNode;
  _id?: string;
  _className?: string;
  _title?: string;
  _stack?: boolean;
  _desc?: string;
  _black_letter?: boolean;
  _style?: React.CSSProperties;
  _onClick?: () => void;
  _onCompClick?: () => void;
};

//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//@ts-ignore
import "./Section_elements.scss"; //@ts-ignore
import {MotherTechLogo} from '../../../../../utility/assetsImport.js';
