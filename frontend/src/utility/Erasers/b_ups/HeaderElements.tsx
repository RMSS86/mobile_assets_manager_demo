import React, { useEffect, useRef, useState } from "react";

const ContextType = "div";
const ContainerTitle = "span";

/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function HeaderElements({
  children,
  _className,
  _tittleClass,
  _headingMain,
  _headingSub,
  _captionLogoSelector = false,
  _logo = "",
  _logoClass = "",
  _logoSub = "",
  _logoSubClass = "",
  _style,
  _mainTag = "",
  _subTag = "",
  _onClick,
  ...rest
}: _defaultProps) {
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////

  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  return (
    <>
      <ContextType
        {...rest}
        className={_className}
        onClick={_onClick}
        style={_style}
      >
        <h1 className={_tittleClass}>
          <LogoBox _src={_logo} _imgClass={_logoClass} />

          {_captionLogoSelector ? (
            <LogoBox _src={_logoSub} _imgClass={_logoSubClass} />
          ) : (
            <ContainerTitle className={_headingSub}>{_subTag}</ContainerTitle>
          )}
        </h1>

        {children}
      </ContextType>
    </>
  );
}

type _defaultProps = {
  children: React.ReactNode;
  _contextType?: string;
  _tittleClass?: string;
  _logo: string;
  _logoClass: string;
  _logoSub: string;
  _logoSubClass: string;
  _captionLogoSelector: boolean;
  _headingMain?: string;
  _mainTag?: string;
  _subTag?: string;
  _headingSub?: string;
  _className?: string;
  _style?: React.CSSProperties;
  _onClick?: () => void;
};

/////IMPORTS////IMPORTS////IMPORTS////IMPORTS////IMPORTS////
/////IMPORTS////IMPORTS////IMPORTS////IMPORTS////IMPORTS////
import LogoBox from "./LogoBox";
