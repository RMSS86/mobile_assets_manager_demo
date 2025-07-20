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
    
    <SubHeader _logo_tag='e-AM' _page_tag='Manage Assets' _menu={<HeaderFragment />}/>

    {/* ///MAP FORM DB!//*/}
    <div className='products_grid'>
      <ProductCard _img={INTERNET_IMAGE_URLS[1]} _title='Electronics' _desc='Laptop Computer'_code='Asset_4398457A'/>
      <ProductCard _img={INTERNET_IMAGE_URLS[1]} _title='Electronics' _desc='Laptop Computer'_code='Asset_4398457A'/>
      <ProductCard _img={INTERNET_IMAGE_URLS[1]} _title='Electronics' _desc='Laptop Computer'_code='Asset_4398457A'/>
      <ProductCard _img={INTERNET_IMAGE_URLS[1]} _title='Electronics' _desc='Laptop Computer'_code='Asset_4398457A'/>
      <ProductCard _img={INTERNET_IMAGE_URLS[1]} _title='Electronics' _desc='Laptop Computer'_code='Asset_4398457A'/>
      <ProductCard _img={INTERNET_IMAGE_URLS[1]} _title='Electronics' _desc='Laptop Computer'_code='Asset_4398457A'/>
      <ProductCard _img={INTERNET_IMAGE_URLS[1]} _title='Electronics' _desc='Laptop Computer'_code='Asset_4398457A'/>
   
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
import Landing_section_action from '../home/sections/Landing_section_action.js';import HeaderFragment from '../../UI/elements/headers/HeaderFragment.js';
import { INTERNET_IMAGE_URLS } from '../../../utility/data/InternetImages.js';

