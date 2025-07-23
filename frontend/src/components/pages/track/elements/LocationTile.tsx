// import React, { useEffect, useRef, useState } from "react";

const ContextType = "section";
const ContextId = "";
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function LocationTile({
  children,
  _className = "location_tile",
  _id = ContextId,
  _style,
  _assets = "0",
  _caths = "0",
  _locName = "Location",
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
      {children}
      <div className="location_tile-start"></div>
      <div className="location_tile-body">
        <div className="location_tile-desc">
          <h1 className="location_tile-desc_title">{_locName}</h1>
          <p className="location_tile-desc_desc">
            This location is one of the registered ones on your account, last
            modification made on 21/07/25.
          </p>
        </div>
        <div className="location_tile-metrics">
          <div className="tile_count">
            <div className="card_descs_count  location_aux-center ">
              <h2>{_caths} </h2>
            </div>
            <p className="tile_count-tag">caths </p>
          </div>
          <div className="tile_count">
            <div className="card_descs_count  location_aux-center ">
              <h2>{_assets} </h2>
            </div>
            <p className="tile_count-tag">assets </p>
          </div>
        </div>
        <div className="location_tile-actions">
          {LOCAIION_TILE_ITEMS.map((e) => (
            <div className="location_tile-actions__wrapper">
              <img className="location_tile-actions__icon" src={e.icon}></img>
            </div>
          ))}
        </div>
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

  _locName?: string;
  _caths?: string;
  _assets?: string;

  _onClick?: () => void;
  _onCompClick?: () => void;
};

import { LOCAIION_TILE_ITEMS } from "../../../../utility/data/UI-Data/UIData";
//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//@ts-ignore
import "./MapLoader.scss";
