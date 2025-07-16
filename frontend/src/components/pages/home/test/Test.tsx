// import React, { useEffect, useRef, useState } from "react";

const ContextType = "section";
const ContextId = "test-query";
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function TestQueryComponent({
  children,
  _className,
  _id = ContextId,
  _style = { height: "20vh" },
  _onClick,
  _onCompClick,
  ...rest
}: _defaultProps) {
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////

  const { data: run } = useQuery({
    queryKey: ["init"],
    staleTime: TWO_MINUTES_IN_MILLISECONDS,
    gcTime: TEN_MINUTES_IN_MILLISECONDS,
    queryFn: async () =>
      FetchData({
        _endPoint: "run",
        _parse: true,
      }),
  });
  if (run) {
    console.log("FROM TEST CNV COMPONENT: ", run);
  }

  const {
    data: _req,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["init"],
    staleTime: TWO_MINUTES_IN_MILLISECONDS,
    gcTime: TEN_MINUTES_IN_MILLISECONDS,
    queryFn: () => request<_run>("http://localhost:80/api/v1/run"),
  });
  if (_req) {
    console.log("FROM TEST ADV COMPONENT: ", _req);
  }

  const fontSize = {
    fontSize: " 4.8rem",
  };
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
      <motion.p
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 500 }}
        style={fontSize}
      >
        {_req?._data}
      </motion.p>

      {children}
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

type _run = {
  statusCode: number;
  _data: string;
};
//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
import { useQuery } from "@tanstack/react-query";
import FetchData from "../../../../requests/http";
import { motion } from "framer-motion";
import {
  TWO_MINUTES_IN_MILLISECONDS,
  FIVE_MINUTES_IN_MILLISECONDS,
  TEN_MINUTES_IN_MILLISECONDS,
} from "../../../../utility/constants/contstants";
import { request } from "../../../../requests/request";
