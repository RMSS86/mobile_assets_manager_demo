import React, { useState } from "react";

const _contextType = "div";

type _defaultProps = {
  _children?: React.ReactNode;
  _src: string;
  _imgClass: string;
  _className?: string;
  _style?: React.CSSProperties;
  _onClick?: () => void;
};

export default function LogoBox({
  _children,
  _className,
  _style,
  _src,
  _imgClass,
  _onClick,
  ...rest
}: _defaultProps) {
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////

  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  return (
    <_contextType
      {...rest}
      className={_className}
      onClick={_onClick}
      style={_style}
    >
      <img src={_src} className={_imgClass} alt={_imgClass} />
    </_contextType>
  );
}
