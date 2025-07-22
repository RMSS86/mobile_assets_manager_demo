/////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
export default function Landing_section_action({
  _componentProps,
  children,
  _className='actions',
  _style,
  _onClick,
  ...rest
}: _props) { 
  ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////

  ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
  return (
    <>
      <_contextType {...rest} className={_className} onClick={_onClick} style={{}}>
       
        {/* {children} */}
        <div className="actions__celd" > 
          <div className="actions__celds"> Hello </div>
          <div className="actions__celds actions-bg_white"> Hello </div>
           </div>
           <div className="actions__celder"> Hello </div>
        

      </_contextType>
    </>
  );
}
/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
const _contextType = "section";
type _props = _defaultProps & _altProps;

type _defaultProps = {
  _componentProps?: React.ComponentPropsWithoutRef<"section"> & {
    ///add alternative propierties than the native elements
  };
  children?: React.ReactNode;
  _className?: string;
  _style?: React.CSSProperties;
  _onClick?: () => void;
};

type _altProps = {
  _params?: {
    _param_1: number;
    _param_2: number;
    _param_3: number;
  };
  _onClickParam?: (test: string) => void;
  _paramsRec?: Record<string, number>; ///in case on need to insert parametters mixed
  _setCount?: React.Dispatch<React.SetStateAction<number>>;
};

/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
/////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////

//@ts-ignore
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
//@ts-ignore
import './Landing_sections.scss';
