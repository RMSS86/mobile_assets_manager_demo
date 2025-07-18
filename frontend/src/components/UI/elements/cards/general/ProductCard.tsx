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
                    {/* ///QR CODE ICON HERE/// */}
                </div>
                    <h2 className='card_title'>{_title}</h2>
                    <p className='card_desc'>{_desc}</p>

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
import './ProductCard.scss';