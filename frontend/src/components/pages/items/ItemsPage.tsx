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


    <div className='products_grid'>
      <ProductCard _img={BG_img_one} _title='Product Test A' _desc='THIS IS A TEST FOR RESPONSIVENESS PORPUSES, PRIOR TO SET UP THE ITEMS PAGE'/>
      <ProductCard _img={BG_img_one} _title='Product Test B' _desc='THIS IS A TEST FOR RESPONSIVENESS PORPUSES, PRIOR TO SET UP THE ITEMS PAGE'/>
      <ProductCard _img={BG_img_one} _title='Product Test C' _desc='THIS IS A TEST FOR RESPONSIVENESS PORPUSES, PRIOR TO SET UP THE ITEMS PAGE'/>
      <ProductCard _img={BG_img_one} _title='Product Test D' _desc='THIS IS A TEST FOR RESPONSIVENESS PORPUSES, PRIOR TO SET UP THE ITEMS PAGE'/>
      <ProductCard _img={BG_img_one} _title='Product Test E' _desc='THIS IS A TEST FOR RESPONSIVENESS PORPUSES, PRIOR TO SET UP THE ITEMS PAGE'/>
      <ProductCard _img={BG_img_one} _title='Product Test F' _desc='THIS IS A TEST FOR RESPONSIVENESS PORPUSES, PRIOR TO SET UP THE ITEMS PAGE'/>
      <ProductCard _img={BG_img_one} _title='Product Test G' _desc='THIS IS A TEST FOR RESPONSIVENESS PORPUSES, PRIOR TO SET UP THE ITEMS PAGE'/>

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

import ProductCard from '../../UI/elements/cards/general/ProductCard';
import SubHeader from '../../UI/elements/headers/SubHeader';
//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//@ts-ignore
import './ItemsPage.scss'; //@ts-ignore
import {BG_img_one} from '../../../utility/assetsImport.js';