// import React, { useEffect, useRef, useState } from "react";

const ContextType = "section";
const ContextId = "";
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function ItemsPage({
  children,
  _className='products',
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
      {/* {children} */}

    <SubHeader _logo_tag='e-AM' _page_tag='Manage Assets' />

    {/* ///MAP FORM DB!//*/}
    <div className='products_grid'>
      <ProductCard _img={BG_img_one} _title='Test Product 1' _desc='This is a test product that serves as an indicator of fully responsive card and integration'/>
      <ProductCard _img={BG_img_one} _title='Test Product 2' _desc='This is a test product that serves as an indicator of fully responsive card and integration'/>
      <ProductCard _img={BG_img_one} _title='Test Product 3' _desc='This is a test product that serves as an indicator of fully responsive card and integration'/>
      <ProductCard _img={BG_img_one} _title='Test Product 4' _desc='This is a test product that serves as an indicator of fully responsive card and integration'/>
      <ProductCard _img={BG_img_one} _title='Test Product 4' _desc='This is a test product that serves as an indicator of fully responsive card and integration'/>
      <ProductCard _img={BG_img_one} _title='Test Product 5' _desc='This is a test product that serves as an indicator of fully responsive card and integration'/>
      <ProductCard _img={BG_img_one} _title='Test Product 6' _desc='This is a test product that serves as an indicator of fully responsive card and integration'/>
      <ProductCard _img={BG_img_one} _title='Test Product 7' _desc='This is a test product that serves as an indicator of fully responsive card and integration'/>
    
    </div>

    <Landing_section_action />
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

import ProductCard from '../../UI/elements/cards/general/ProductCard';
import SubHeader from '../../UI/elements/headers/SubHeader';
//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//@ts-ignore
import './ItemsPage.scss'; //@ts-ignore
import {BG_img_one} from '../../../utility/assetsImport.js';
import Landing_section_action from '../home/sections/Landing_section_action.js';
