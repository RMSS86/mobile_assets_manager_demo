/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function LoginPage({
  _componentProps,
  children,
  _className,
  _style,
  _onClick,
  ...rest
}: _props) {
  ///////////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  ///////////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  let _navigate = useNavigate(); //@ts-ignore
  const { globalUser, setGlobalUser } = useUserContext();
  const [form, setForm] = useState(_loginDefault);

  console.log("from context: ", globalUser);

  ////HANDLE FORM ENTRY DATA [values]
  ///////////////////////////////////
  const HandlerChange = (e: any) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  ////////////////////////////////////////////HANDLE lOGGING IN PROCESS
  /////////////////////////////////////////////////////////////////////
  async function _sendLoginRequest(e: { preventDefault: () => void }) {
    e.preventDefault();
    //< include ReactQuery
    const _response: any = await FetchData({
      _endPoint: "users/login",
      _method: "POST",
      _body: form,
    });

    //<  MAKE AN AXULIARY FUNCTION PASSABLE FROM DAILER
    const _resData = await _response.json();
    const _user = _resData.data.user;
    const _userToken = _resData.token;
    const _preContextUser = {
      _id: _user._id,
      _role: _user.role,
      _active: true,
      _name: _user.name,
      _email: _user.email,
      _passwordChangedAt: _user.passwordChangedAt,
      _token: _userToken,
      _imgDir: "http://localhost/img/users/",
      _photo: _user.photo,
    };

    if (_resData.status === "success") {
      showAlert("success", "Succesfuly Logged-in!");
      logActions({
        _action: "login", //@ts-ignore
        _direct: _navigate("/assets"),
      });
      useLocalUser({
        _action: "store",
        _storageKey: "user",
        _storage: JSON.stringify(_preContextUser),
        _userDispatcher: setGlobalUser,
      });
    }

    return _resData;
  }

  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  return (
    <>
      <_contextType
        {...rest}
        className="login__page"
        onClick={_onClick}
        // style={{
        //   backgroundImage: `url(${BG_Lettering_white})`,
        //   // backgroundSize: "cover",
        //   // backgroundPosition: "top",
        // }}
      >
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
                  onClick={_sendLoginRequest}
                  className="btn btn--purple margin-left margin-top"
                >
                  Login
                </button>
                <button
                  // onClick={_sendLoginRequest}
                  className="btn btn--white margin-left margin-top"
                >
                  <Link className="form-signup" to="/signup">
                    Sign Up
                  </Link>
                </button>
              </div>
            </form>

            {/* //////make a component */}
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
        </div>
        <div
          className="login__page-block login__page-block__right"
          style={{
            backgroundImage: `url(${BrandImage4})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

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
import {
  LogoLetters_only_white,
  BG_Lettering_white,
  BrandImage4,
  showAlert,
  //@ts-ignore
} from "../../../utility/imports.js";
import { useEffect, useState } from "react"; //@ts-ignore
import { Link, useNavigate } from "react-router-dom";
//@ts-ignore
import "./LoginPage.scss";
import FetchData from "../../../requests/http";
import FormInput from "./elements/InputElement"; //@ts-ignore
import { Navigate, redirect } from "react-router-dom";
import { useUserContext } from "../../../store/UserContext.js";
import { _loginDefault } from "../../../utility/data/data.js";
import { logActions } from "../../../models/functions/userLogActions.js";
import { useQuery } from "@tanstack/react-query";
import { useLocalUser } from "../../../models/hooks/useLocalUser.js";
