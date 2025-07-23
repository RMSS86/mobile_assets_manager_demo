// import React, { useEffect, useRef, useState } from "react";

const ContextType = "section";
const ContextId = "";
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function TrackPage({
  children,
  _className = "track",
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
      <div className="track_layout">
        <div className="track_layout-left">
          <MapLoader />
        </div>
        <div className="track_layout-right">
          <h1 className="track_layout-right__title">Track List</h1>
          <div className="track_layout-right__list">
            <LocationTile
              _locName={ASSETS_LOCATIONS[0].name}
              _caths="3"
              _assets="86"
            />
            <LocationTile
              _locName={ASSETS_LOCATIONS[1].name}
              _caths="6"
              _assets="54"
            />
            <LocationTile
              _locName={ASSETS_LOCATIONS[2].name}
              _caths="4"
              _assets="72"
            />
          </div>
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
  _onClick?: () => void;
  _onCompClick?: () => void;
};

import { ASSETS_LOCATIONS } from "../../../utility/data/UI-Data/UIData";
import LocationTile from "./elements/LocationTile";
import MapLoader from "./elements/MapLoader";
//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//@ts-ignore
import "./TrackPage.scss";

//map of locations! make two maps one for locations and other for places
