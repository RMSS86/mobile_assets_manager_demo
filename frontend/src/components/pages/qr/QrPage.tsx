// import React, { useEffect, useRef, useState } from "react";

const ContextType = "section";
const ContextId = "";
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function QrPage({
  children,
  _className = "qr",
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
      {children}
      <div className="qr_wrapper">
        <div className="qr_wrapper-left">
          <p className="qr_wrapper-left_title">Welcome </p>
          <img
            alt="qr_model"
            className="qr_model"
            loading="lazy"
            src={Actor_male_image_one}
          />
        </div>
        <div className="qr_wrapper-right">
          <img alt="qr_scan" className="qr_scan" src={QR_Scan_me} />
          <div className="qr_wrapper-right_foot">
            <svg
              className="qr_icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path d="M200-400v-80h80v80h-80Zm-80-80v-80h80v80h-80Zm360-280v-80h80v80h-80ZM180-660h120v-120H180v120Zm-60 60v-240h240v240H120Zm60 420h120v-120H180v120Zm-60 60v-240h240v240H120Zm540-540h120v-120H660v120Zm-60 60v-240h240v240H600ZM360-400v-80h-80v-80h160v160h-80Zm40-200v-160h80v80h80v80H400Zm-190-90v-60h60v60h-60Zm0 480v-60h60v60h-60Zm480-480v-60h60v60h-60Zm-50 570v-120H520v-80h120v-120h80v120h120v80H720v120h-80Z" />
            </svg>
            <p className="qr_wrapper-right_parra">
              Download the iOS / Android App version and Scan this code to link
              your device to this account.
            </p>
          </div>
        </div>
      </div>
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
import "./QrPage.scss";
import {
  QR_Scan_me,
  Qr_one_icon,
  Actor_male_image_one, //@ts-ignore
} from "../../../utility/assetsImport.js";
