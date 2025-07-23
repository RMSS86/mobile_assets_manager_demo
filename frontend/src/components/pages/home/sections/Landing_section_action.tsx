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
          <div className="actions__celds "> 
            <img alt="branding" src={Branding_logo_leters} className="actions-brand_img"/>
            <h3 className="actions-text_white actions-text_lower actions-text_underpara"> Chek out our plans Now! </h3>

             </div>
            
          <div className="actions__celds "> 
            
            <h1 className="actions-text_black actions-text_upper"> Unorganized Assets</h1>
            <p className="actions-text_white actions-text_lower actions-text_para"> Tired of having your assets all over the place? </p>
            <p className="actions-text_white actions-text_lower actions-text_para"> Get all your assets and items organized with easy assets manager mobile, from a simple click to a QR label generator, print register and check on the assets page! </p>
            <div className="actions__celds-unit">
              <img alt="logo" src={QR_Scan_me} className="actions-brand_img-low "/>
            </div>
             
             </div>
         
           </div>
           <div className="actions__celder"> 
            <a className=" actions__btn">Create a new account</a>
             </div>
        

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
import './Landing_sections.scss'; //@ts-ignore
import  {Branding_logo_leters, GeneralLogo, QR_Scan_me} from '../../../../utility/assetsImport.js';
