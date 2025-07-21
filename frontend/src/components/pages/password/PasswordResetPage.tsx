/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function PasswordResetPage({
  _componentProps,
  children,
  _className,
  _style,
  _onClick,
  ...rest
}: _props) {
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  ////HANDLE FORM ENTRY DATA
  const [form, setForm] = useState(_email);

  const HandlerChange = (e: any) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  async function _sendPWDRSTRequest(e) {
    e.preventDefault();

    const _response: any = await FetchData({
      _endPoint: "users/forgotPassword",
      _method: "POST",
      _body: form,
    });

    const _resData = await _response.json();
    // const _user = _resData.data.user;
    // const _userToken = _resData.token;

    return _resData;
  }

  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  return (
    <>
      <_contextType
        {...rest}
        className="reset__page"
        onClick={_onClick}
        style={{
          backgroundImage: `url(${BG_Lettering_white})`,
        }}
      >
        <div className="login__page-form">
          <form className="form form__login">
            <h2 className="form__title">Reset your Password</h2>

            <FormInput
              _targetName="email"
              _className="form__group ma-bt-md "
              _labelClass="form__label"
              _labelTag="Your Email Adress"
              _inputClass="form__input"
              _inputType="email"
              _inputPHolder="yourEmail@trax.io"
              _getValue={HandlerChange}
            />

            <div className="form__group">
              <button onClick={_sendPWDRSTRequest} className="btn btn--green">
                Reset
              </button>
            </div>
          </form>

          <div className="login__page-post">
            <div className="login__page-post_sec">
              <img
                src={LogoLetters_only_white}
                alt="logo"
                className="login__page-post_logo"
              />
            </div>

            <div className="login__page-post_sec"></div>
          </div>
        </div>

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
type reset = {
  password: string;
  passwordConfirm: string;
};
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//@ts-ignore
import "../login/LoginPage.scss";
import FetchData from "../../../requests/http";
import FormInput from "../login/elements/InputElement";
import { useState } from "react"; //@ts-ignore
import {
  LogoLetters_only_white,
  BG_Lettering_white,
} from "../../../utility/imports.js";
import { Login } from "../../../models/types/userType.js";
import { _email } from "../../../utility/data/data.js";

// method: 'GET',
// url: '/api/v1/users/logout'
// user.name.split(' ')[0]
