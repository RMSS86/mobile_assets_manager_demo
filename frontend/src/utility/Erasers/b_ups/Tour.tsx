// /////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
// /////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
// export default function TourPage({
//   _componentProps,
//   children,
//   _className,
//   _style,
//   _onClick,
//   ...rest
// }: _props) {
//   ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
//   ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
//   const _param = useParams();
//   const _data = useLoaderData();
//   ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
//   ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
//   return (
//     <>
//       <_contextType {...rest} className="" onClick={_onClick} style={{}}>
//         <h1>Tour Details!</h1>
//         <h2 style={style_A}>{_param.id}</h2>
//         <h2>{_data.name}</h2>
//         <Link to="/tours" style={style_A}>
//           Back
//         </Link>

//         {/* {children} */}
//       </_contextType>
//     </>
//   );
// }
// /////FUNCTIONS/////FUNCTIONS/////FUNCTIONS/////FUNCTIONS/////FUNCTIONS////
// /////FUNCTIONS/////FUNCTIONS/////FUNCTIONS/////FUNCTIONS/////FUNCTIONS////
// ///TODO create type Tour with all fields
// // export async function singleTourLoader({ params }) {
// //   const _id = params.id;
// //   const _response = await FetchData({ _endPoint: `tours/${_id}` });
// //   return _response;
// // }

// ////////////DUMMY CLASS
// const style_A = {
//   margin: "5rem",
//   marginLeft: "30rem",
//   textDecoration: "none",
//   fontSize: "2rem",
// };
// /////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
// /////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
// const _contextType = "div";
// type _props = _defaultProps & _altProps;

// type _defaultProps = {
//   _componentProps?: React.ComponentPropsWithoutRef<"div"> & {
//     ///add alternative propierties than the native elements
//   };
//   children?: React.ReactNode;
//   _className?: string;
//   _style?: React.CSSProperties;
//   _onClick?: () => void;
// };

// type _altProps = {
//   // _params?: {
//   //   _param_1: number;
//   //   _param_2: number;
//   //   _param_3: number;
//   // };
//   // _onClickParam?: (test: string) => void;
//   // _paramsRec?: Record<string, number>; ///in case on need to insert parametters mixed
//   // _setCount: React.Dispatch<React.SetStateAction<number>>;
// };

// /////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
// /////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
// //@ts-ignore
// import { Link, useParams, useLoaderData } from "react-router-dom";
// import FetchData from "../../../requests/http";
