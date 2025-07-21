/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function UserAccountPage({
  _componentProps,
  children,
  _className,
  _style,
  _onClick,
  ...rest
}: _props) {
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  let _navigate = useNavigate(); //@ts-ignore
  const { globalUser, setGlobalUser } = useUserContext();
  const [userform, setUserForm] = useState(_userUpdateDefault);
  const [userPwdform, setUserPwdForm] = useState(_passwordUpdate);
  const [userImage, setUserImage] = useState<string>("");

  useEffect(() => {
    if (globalUser?._active) {
      setUserImage(() => `${globalUser?._imgDir}${globalUser?._photo}`);
    } else {
      setUserImage(() => DefaultUserLogo);
    }
  }, [globalUser]);

  const HandlerChange = (e: any) => {
    setUserForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(userform);
  };
  const HandlerChangeFile = (e: any) => {
    setUserForm((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
    console.log(userform);
  };

  const HandlerPWDChange = (e: any) => {
    setUserPwdForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(userPwdform);
  };

  //< MAKE OWN COMPONENT
  const UserMenuNavItem = ({
    _link,
    _text,
    _icon,
    _active,
    _onClick,
  }: {
    _link: string;
    _text: string;
    _icon: string;
    _active: boolean;
    _onClick?: () => void;
  }) => {
    return (
      <>
        <li
          className={`${_active ? "side-nav  side-nav-active" : "side-nav"}`}
          onClick={_onClick}
        >
          <Link to={_link}>
            <img src={_icon} />
            {_text}
          </Link>
        </li>
      </>
    );
  };

  //DONT REPEAT YOURSELF MAKE A GENERIC FUNCTION!
  /////UPDATING USER INFO <NAME :: EMAIL>////
  async function _sendUpdateRequest(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (typeof userform.photo === "undefined") return;

    const _formdata = new FormData();
    _formdata.append("name", userform.name);
    _formdata.append("email", userform.email);
    _formdata.append("photo", userform.photo);
    console.log("Form from PATCH: ", _formdata);

    const _response: any = await fetch(
      "http://localhost:80/api/v1/users/updateMe",
      //http://127.0.0.1:80/api/v1/users/updateMe
      {
        method: "PATCH",
        body: _formdata,
        redirect: "follow",
        credentials: "include",
      }
    );

    const _resData = await _response.json();
    console.log(_resData);

    if (_resData.status === "success") {
      showAlert("success", "UPDATED Succesflly!");
    }
  }

  /////UPDATING USER PASSWORD////
  async function _sendUpdatePWDRequest(e: { preventDefault: () => void }) {
    e.preventDefault();

    const _response: any = await FetchData({
      _endPoint: "users/updateMyPassword",
      _method: "PATCH",
      _body: userPwdform,
    });
    const _resData = await _response.json();
    setUserPwdForm(_passwordUpdate);

    if (_resData.status === "success") {
      showAlert("success", "PASSWORD Updated Succesflly!");
    }

    return _resData;
  }
  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  return (
    <>
      <_contextType {...rest} className="user__page" onClick={_onClick}>
        <HomeLogoBox
          _src={LogoPink}
          _className="user__page-logo"
          _imgClass="user__page-logo-box"
        />

        {/* /////MAKE COMPONENET// */}
        <div className="user__page-block user__page-block__left">
          <div className="user__page-view">
            <UserMenuLeft _className="user__page-menu">
              <ul className="user__page-menu__side-nav">
                {_userSideMenu.map((link) => (
                  <UserMenuNavItem
                    _link={link._link}
                    _text={link._text}
                    _icon={link._icon}
                    _active={link._active}
                  />
                ))}
              </ul>

              {globalUser?._role === "admin" ? (
                <div className="admin-nav">
                  <h5 className="">Admin</h5>
                  <ul className="user__page-menu__side-nav">
                    {_userAdminSideMenu.map((link) => (
                      <UserMenuNavItem
                        _link={link._link}
                        _text={link._text}
                        _icon={link._icon}
                        _active={link._active}
                      />
                    ))}
                  </ul>
                </div>
              ) : (
                <SingleBadge
                  _className="badge"
                  _badgeClass="badge__badge"
                  _linkClass="badge__icon"
                  _wrapperClass="badge__low"
                  _badgeSrc={Artistic_Logo_two}
                  _linkASrc={AndroidIcon_B}
                  _linkBSrc={QRIcon_A}
                  _linkCSrc={iOSIcon_A}
                  _style={{
                    backgroundImage: `url(${BrandImage6})`,
                  }}
                />
              )}
            </UserMenuLeft>

            {/* /////MAKE COMPONENET// */}
            <div className="user__page-content">
              <div className="user__page-form__container">
                <h3 className="">Account Settings</h3>

                {/* ////MAKE OWN COMPONENT// */}
                <form className="">
                  <FormInput
                    _className="form__group"
                    _labelClass="form__label"
                    _inputClass="form__input"
                    _labelHTMLFor="name"
                    _targetName="name"
                    _inputType="text"
                    _labelTag="Name"
                    // _value={globalUser?._name}
                    _inputPHolder={globalUser?._name}
                    _getValue={HandlerChange}
                  />
                  <FormInput
                    _targetName="email"
                    _className="form__group ma-bt-md "
                    _labelClass="form__label"
                    _labelTag="E-mail"
                    _inputClass="form__input"
                    _inputType="email"
                    // _value={globalUser?._email}
                    _inputPHolder={globalUser?._email}
                    _getValue={HandlerChange}
                  />
                  <FormPhotoInput
                    _targetName="photo"
                    _className="form__group form__photo-upload"
                    _labelClass="form__label"
                    _labelTag="Choose new photo"
                    _inputClass="form__upload"
                    _inputType="file"
                    _id="photo"
                    _srcPhoto={userImage}
                    _labelHTMLFor="photo"
                    _photoClass="form__user-photo"
                    _accept="image/*"
                    _getValue={HandlerChangeFile}
                  />

                  <div className="form__group">
                    <button
                      onClick={_sendUpdateRequest}
                      className="btn btn--green"
                    >
                      Save Settings
                    </button>
                  </div>
                  <div className="user__page-menu__email">
                    <h1>{globalUser?._email}</h1>
                  </div>
                </form>
              </div>

              {/* ///MAKE OWN COMPONENT */}
              <div className="liner__single">&nbsp;</div>
              <div className="user__page-form__container">
                <h3 className="">Password change</h3>
                <form className="">
                  <FormInput
                    _targetName="passwordCurrent"
                    _className="form__group ma-bt-md "
                    _labelClass="form__label"
                    _labelTag="Current Password"
                    _inputClass="form__input"
                    _inputType="password"
                    _inputPHolder="••••••••"
                    _getValue={HandlerPWDChange}
                  />
                  <FormInput
                    _targetName="password"
                    _className="form__group ma-bt-md "
                    _labelClass="form__label"
                    _labelTag="New Password"
                    _inputClass="form__input"
                    _inputType="password"
                    _inputPHolder="••••••••"
                    _getValue={HandlerPWDChange}
                  />
                  <FormInput
                    _targetName="passwordConfirm"
                    _className="form__group ma-bt-md "
                    _labelClass="form__label"
                    _labelTag="Confirm Password"
                    _inputClass="form__input"
                    _inputType="password"
                    _inputPHolder="••••••••"
                    _getValue={HandlerPWDChange}
                  />
                  <div className="form__group">
                    <button
                      onClick={_sendUpdatePWDRequest}
                      className="btn btn--green"
                    >
                      Change Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* //////MAKE COMPONENT//> //// */}
        <div
          className="user__page-block user__page-block__right"
          style={{
            backgroundImage: `url(${BrandImage3})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          {" "}
          <LogoBox
            _src={LogoLetters_only_white}
            _imgClass="user__page-block__right-logo"
          />
          <h5 className="user__page-block__welcome">
            Welcome {globalUser?._name.split(" ")[0]}
          </h5>
        </div>

        {/* ///MAKE IMAGE CHANGE ON FAVORITY TOUR BADGE IMAGE///DYNAMICALLY? */}
        <DynamicSideMenu _side={true} />
        {/* {children} */}
      </_contextType>
      {/* //////MAKE COMPONENT//> SECTION // REVIEWS <//> FAVORITES//// */}
      <DynamicSideMenu _side={false} _titleLo={true} />

      <div
        className="user__page-block user__page-block__bottom"
        style={{
          backgroundImage: `url(${BrandImage3})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        {" "}
        <LogoBox
          _src={LogoLetters_only_white}
          _imgClass="user__page-block__bottom-logo"
        />
        <h5 className="user__page-block__welcome">
          Welcome {globalUser?._name.split(" ")[0]}
        </h5>
      </div>
    </>
  );
}

///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////

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
const _userSideMenu: UserSideMenu[] = [
  {
    _link: "#",
    _text: "Settings", //settings
    _icon: "",
    _active: true,
  },
  {
    _link: "#",
    _text: "My bookings", //briefcase
    _icon: "",
    _active: false,
  },
  {
    _link: "#",
    _text: "My reviews", //star
    _icon: "",
    _active: false,
  },
  {
    _link: "#",
    _text: "Billing", //credit-card
    _icon: "",
    _active: false,
  },
];
const _userAdminSideMenu: UserSideMenu[] = [
  {
    _link: "#",
    _text: "Manage tours", //map
    _icon: "",
    _active: true,
  },
  {
    _link: "#",
    _text: "Manage users", //users
    _icon: "",
    _active: false,
  },
  {
    _link: "#",
    _text: "Manage reviews", //star
    _icon: "",
    _active: false,
  },
  {
    _link: "#",
    _text: "Manage bookings", //briefcase
    _icon: "",
    _active: false,
  },
];
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
import UserMenuLeft from "../../UI/elements/menu/statics/UserMenuLeft"; //@ts-ignore
import { Link } from "react-router-dom";
//@ts-ignore
import "./UserPage.scss";
import {
  _passwordUpdate,
  _userUpdateDefault,
  UserSideMenu,
} from "../../../utility/data/data";
import FormInput from "../login/elements/InputElement";
import FormPhotoInput from "../login/elements/InputPhotoElement";
import HomeLogoBox from "../home/HomeLogo.js";
import { useUserContext } from "../../../store/UserContext.js";
import SingleBadge from "../../UI/elements/badges/SingleBadge.js";

import {
  User,
  LogoPink,
  Artistic_Logo_two,
  BrandImage2,
  BrandImage3,
  BrandImage6,
  AndroidIcon_A,
  iOSIcon_A,
  QRIcon_A,
  Artistic_BG_tranap_A,
  LogoLetters_only_white,
  BG_Lettering_white,
  AndroidIcon_B,
  showAlert,
  DefaultUserLogo,
  //@ts-ignore
} from "../../../utility/imports.js";
import FetchData from "../../../requests/http";
import Tilt from "react-parallax-tilt";
import { logActions } from "../../../models/functions/userLogActions.js";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import LogoBox from "../../UI/elements/media/logo/LogoBox.js";
import Review from "../../UI/elements/cards/review/Review.js";
import OneSidedProductCard from "../../UI/elements/cards/OneSidedProductCard..js";
import TitleLabel from "../../UI/elements/labels/TitleLabel.js";
import ShrinkableOneSidedProductCard from "../../UI/elements/cards/ShrinkableOneSidedProductCard.js";
import DynamicSideMenu from "../../UI/elements/menu/dynamics/side_menus/DynamicSideMenu.js";

// const HandlerChangeFile_ = (e: React.FormEvent<HTMLInputElement>) => {
//   const _target = e.target as HTMLInputElement & {
//     files: FileList;
//   };
//   setUserForm(() => _target.files[0]);
//   console.log(userform);
// };
