     // import React, { useEffect, useRef, useState } from "react";

const ContextType = "section";
const ContextId = "";
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function ProductCard({
  children,
  _className='card',
  _id = ContextId,
  _children_mode=false,
  _img,
  _desc,
  _title,
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
        { _children_mode ? children : 

            <> 

                <div className='card_header'> 
                    <img alt='product' className='card_img' src={_img} />
                    <img alt='product' className='card_logo' src={GeneralLogo} />
                    <h2 className='card_title'>{_title}</h2>
                    {/* ///QR CODE ICON HERE/// */}

                    <div className='card_actions'>
                    <img alt='qr_scan' className='card_actions-icon' src={Qr_scan_icon} />
                    <img alt='qr_add' className='card_actions-icon' src={Qr_add_icon} />
                    <img alt='fav' className='card_actions-icon' src={Fav_icon} />

                        {/* Qr_scan_icon, Add_icon,Qr_add_icon */}
                         </div> 
                </div>
                    
                    <p className='card_desc'>{_desc}</p>
                    <p className='card_code'>Asset_4398457A</p>

            </>
            
        }
      
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

    _children_mode?: false;
    _img?: string;
    _desc?: string;
    _title?: string;

  _onClick?: () => void;
  _onCompClick?: () => void;
};

//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//@ts-ignore
import './ProductCard.scss'; //@ts-ignore
import {GeneralLogo,Qr_scan_icon, Add_icon,Qr_add_icon,Fav_icon} from '../../../../../utility/assetsImport.js';