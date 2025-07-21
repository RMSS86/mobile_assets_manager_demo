// import React, { useEffect, useRef, useState } from "react";

const ContextType = "section";
const ContextId = "";
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function LoginPage({
  children,
  _className='login__page',
  _id = ContextId,
  _style,
  _onClick,
  _onCompClick,
  ...rest
}: _defaultProps) {
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////

  //> DECALRING CONTEXT / USER DATA
  let _navigate = useNavigate(); //@ts-ignore
  // const { globalUser, setGlobalUser } = useUserContext();
  const [form, setForm] = useState(_loginDefault);

  // console.log("from context: ", globalUser);

  //> HANDLE FORM ENTRY DATA [values]
  const HandlerChange = (e: any) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
       {/* FORM  */}
        <div className="login__page-block login__page-block__left">
          <div className="login__page-form">
            <form className="form form__login">
              <h2 className="form__title">Log To Your Account</h2>

              <FormInput
                _targetName="email"
                _className="form__group"
                _labelClass="form__label"
                _labelTag="Email Address"
                _inputClass="form__input"
                _getValue={HandlerChange}
              />
              <FormInput
                _targetName="password"
                _className="form__group ma-bt-md "
                _labelClass="form__label"
                _labelTag="Password"
                _inputClass="form__input"
                _inputType="password"
                _inputPHolder="••••••••"
                _getValue={HandlerChange}
              />
              <Link to="/password-reset">
                <label className="form__forgot-password">
                  forgot password?
                </label>
              </Link>

              <div className="form__group">
                <button
                  // onClick={_sendLoginRequest}
                  className="btn_form btn_form--purple margin-left margin-top"
                >
                  Login
                </button>
                <button
                  // onClick={_sendLoginRequest}
                  className="btn_form btn_form--white margin-left margin-top"
                >
                  <Link className="form-signup" to="/signup">
                    Sign Up
                  </Link>
                </button>
              </div>
            </form>


            {/* IMAGE COMPLEMENT  */}
            <div className="login__page-post">
              <div className="login__page-post_sec">
                <img
                  src={GeneralLogo}
                  alt="logo"
                  className="login__page-post_logo"
                />
              </div>

              <div className="login__page-post_sec"></div>
            </div>
          </div>
        </div>
        <div
          className="login__page-block login__page-block__right"
          style={{
            backgroundImage: `url(${context_image_one})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />


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

import { Link, useNavigate } from 'react-router';
//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//@ts-ignore
import './LoginPage.scss';
import { useState } from 'react';
import { _loginDefault } from '../../../utility/data/data';

import { context_image_one, //@ts-ignore
  GeneralLogo } from '../../../utility/assetsImport.js';

import FormInput from './elements/InputElement';

