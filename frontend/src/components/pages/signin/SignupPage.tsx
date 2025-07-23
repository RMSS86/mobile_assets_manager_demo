/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////

import { useState } from "react";
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function SignupPage({
  _componentProps,
  children,
  _className,
  _style,
  _onClick,
  ...rest
}: _props) {
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  const [form, setForm] = useState<NewUser>({
    _name: "",
    _email: "",
    _password: "",
    _passwordConfirm: "",
  });
  ////HANDLE FORM ENTRY DATA
  const HandlerChange = (e: any) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(form);
  };
  /////////////////HANDLE SIGNUPPROCESS
  /////////////////////////////////////
  async function _sendLoginRequest(e) {
    e.preventDefault();

    const _response: any = await FetchData({
      _endPoint: "users/signup",
      _method: "POST",
      _body: form,
    });

    const _resData = await _response.json();

    return _resData;
  }

  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  return (
    <>
      <_contextType
        {...rest}
        className="signup__page"
        onClick={_onClick}
        // style={{
        //   backgroundImage: `url(${BG_Lettering_white})`,
        // }}
      >
        <div className="signup__page-block signup__page-block__left">
          <div className="signup__page-form">
            <form className="form form__login">
              <h2 className="form__title">Create a New User</h2>

              <FormInput
                _targetName="name"
                _className="form__group"
                _labelClass="form__label"
                _labelTag="Name"
                _inputClass="form__input"
                _inputPHolder="John Doe"
                _getValue={HandlerChange}
              />
              <FormInput
                _targetName="email"
                _className="form__group"
                _labelClass="form__label"
                _labelTag="Email"
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
              <FormInput
                _targetName="passwordConfirm"
                _className="form__group ma-bt-md "
                _labelClass="form__label"
                _labelTag="Confirm Password"
                _inputClass="form__input"
                _inputType="password"
                _inputPHolder="••••••••"
                _getValue={HandlerChange}
              />
              <div className="form__group">
                <button
                  onClick={_sendLoginRequest}
                  className="btn btn--pink btn-fixed-paddgin"
                >
                  join!
                </button>
              </div>
            </form>
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
          className="signup__page-block signup__page-block__right"
          style={{
            backgroundImage: `url(${Actor_female_image_one})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        />

        {children}
      </_contextType>
    </>
  );
}
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
const _contextType = "div";
type _props = _defaultProps & _altProps;

type _defaultProps = {
  _componentProps?: React.ComponentPropsWithoutRef<"div"> & {
    ///add alternative propierties than the native elements
  };
  children?: React.ReactNode;
  _className?: string;
  _style?: React.CSSProperties;
  _onClick?: () => void;
};

type _altProps = {
  // _params?: {
  //   _param_1: number;
  //   _param_2: number;
  //   _param_3: number;
  // };
  // _onClickParam?: (test: string) => void;
  // _paramsRec?: Record<string, number>; ///in case on need to insert parametters mixed
  // _setCount: React.Dispatch<React.SetStateAction<number>>;
};

/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//@ts-ignore
import { NewUser } from "../../../models/types/userType"; //@ts-ignore
import {
  Actor_female_image_one,
  GeneralLogo, //@ts-ignore
} from "../../../utility/assetsImport.js"; //@ts-ignore
import "../login/loginPage.scss";
import FormInput from "../login/elements/InputElement.js";
import FetchData from "../../../requests/http.js";
