import FetchData from "../../../requests/http";

//<  TOUR
export async function singleTourLoader({ params }) {
  const _slug = params.id;
  const _response = await FetchData({ _endPoint: `views/tour/${_slug}` });

  return _response;
}

//<  LOGIN
async function _sendLoginRequest(e: { preventDefault: () => void }) {
  e.preventDefault();
  //< include ReactQuery
  const _response: any = await FetchData({
    _endPoint: "users/login",
    _method: "POST",
    _body: form,
  });
}

//<  LOGOUT
const _response: any = await FetchData({
  _endPoint: "users/logout",
  _method: "GET",
});
const _resData = await _response.json();

//<  HOME PAGE
async function topToursLoader() {
  // const response = await fetchDialer({ _endPoint: "tours/top-5-cheap" });
  const _response = await FetchData({ _endPoint: "tours/top-5-cheap" });
  return _response;
}

//<  USER PAGE
async function _sendUpdateRequest(e: { preventDefault: () => void }) {
  e.preventDefault();

  const _response: any = await FetchData({
    _endPoint: "views/submit-user-data", ///<
    _method: "POST", ///<
    _body: userform,
  });
  const _resData = await _response.json();
  console.log(_resData);
  // setUserForm(_resData.);
}

//<  USER PAGE
async function _sendUpdatePWDRequest(e: { preventDefault: () => void }) {
  e.preventDefault();

  const _response: any = await FetchData({
    _endPoint: "users/updateMyPassword",
    _method: "PATCH",
    _body: userPwdform,
  });
}

//<     ENUMERATE THOSE PLACES YOU'VE USED fETCHDATA FUNCTION
///<    CLASIFY THE TYPES OF REQUEST BEING MADE
////<   DEFINE
// import { useQuery } from "@tanstack/react-query";
// export async function useDailer({
//   e,
//   _fetchMode = "QUERY",
//   _queryKey,
//   _endPoint,
//   _mode,
//   _method,
//   _signal,
//   _success,
//   _successMSG,
//   _logAction,
//   _requestBody,
//   _staleTime = 5000,
//   _gcTime = 1000,
//   _forForm = false,
//   _logable = false,
// }: _dialerProps) {
//   ////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS///
//   ////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS///
//   //< Logger Function
//   const logger = ({ _module, _value }: { _module: string; _value: any }) => {
//     console.log("FROM " + _module + ": ", _value);
//   };

//   //<

//   ////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS///
//   ////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS///

//   const [_data, setData] = useState<unknown>();
//   if (_forForm) e?.preventDefault(); //< PREVENTING DEFAULT

//   ////////////////////< SIMPLE MODE
//   if (_fetchMode === "SIMPLE") {
//     let _response: unknown; //< response

//     if (_method === "GET") {
//       //< GET WITHOUT BODY / DEFAULT GET
//       _response = await FetchData({ _endPoint: _endPoint!, _parse: true });
//       {
//         if (_logable) logger({ _module: "FETCH", _value: _response });
//       }
//       setData(_response);
//     }

//     //< GET WITH BODY & METHOD
//     _response = await FetchData({
//       _endPoint: _endPoint!,
//       //< signal: _signal,
//       _method: _method,
//       _body: _requestBody,
//       _parse: true,
//     });
//     {
//       if (_logable) logger({ _module: "FETCH", _value: _response });
//     }

//     setData(_response);
//   }

//   //< QUERY MODE
//   let _fetchRequest:
//     | ReactElement<unknown, string | JSXElementConstructor<any>>
//     | Iterable<ReactNode>
//     | any;

//   //< NO BODY GET
//   if (_method === "GET") {
//     //< signal: _signal,
//     _fetchRequest = await FetchData({
//       _endPoint: _endPoint!,
//       _parse: true,
//       //< signal: _signal,
//     });
//   }

//   //< BODY POST & PATCH
//   _fetchRequest = await FetchData({
//     _endPoint: _endPoint!,
//     //< signal: _signal,
//     _method: _method,
//     _body: _requestBody,
//     _parse: true,
//   });

//   const { data, isPending, isError, error } = useQuery({
//     queryKey: [_queryKey],
//     queryFn: _fetchRequest,
//     staleTime: _staleTime, //<
//     gcTime: _gcTime, //<
//   });

//   if (isPending) {
//     showAlert("loading", "LOADING...", 1000);
//   }
//   if (isError) {
//     //<  error.info?.message || "Failed to fetch events."}
//   }

//   //< IF DATA RESPONSE
//   if (data) {
//     ///< DONT FORGET TO ACTIVATE PARSE MODE ON HTTP!
//     setData(data); //< DONT FORGET TO ACTIVATE PARSE!
//     ///< DONT FORGET TO ACTIVATE PARSE MODE ON HTTP!
//     {
//       if (_logable) logger({ _module: "FETCH", _value: _data });
//     }
//     if (_mode === "LOGIN") {
//       if (_data) {
//       }
//     }
//     return _data;
//   }
// }

// /////TYPES/////TYPES/////TYPES/////TYPES/////TYPES/////TYPES/////TYPES////
// /////TYPES/////TYPES/////TYPES/////TYPES/////TYPES/////TYPES/////TYPES////
// type _dialerProps = {
//   e?: { preventDefault: () => void };
//   _queryKey?: string;
//   _signal?: RequestInit;
//   _forForm?: boolean;
//   _logable?: boolean;
//   _endPoint?: string;
//   _success?: string;
//   _successMSG?: string;
//   _requestBody?: string;
//   _mode?: _modes;
//   _staleTime?: number;
//   _gcTime?: number;
//   _logAction?: _logActions;
//   _fetchMode?: "QUERY" | "SIMPLE";
//   _method: "GET" | "POST" | "PATCH";
//   _setStater?: React.Dispatch<React.SetStateAction<unknown>>;
// };
// type _modes =
//   | "LOGIN"
//   | "LOGOUT"
//   | "UPDATE-ME"
//   | "UPDATE-PWD"
//   | "RESET-PWD"
//   | "FORGOT-PWD";
// type _logActions = "login" | "logout" | "just-redirect" | "skip";
// // //////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////
// // //////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////
// import {
//   JSXElementConstructor,
//   ReactElement,
//   ReactNode,
//   useEffect,
//   useRef,
//   useState,
// } from "react";
// import FetchData from "./http.js"; //@ts-ignore
// import { showAlert } from "../utility/imports.js";
// // import { logActions } from "../models/functions/userLogActions.js";

// //<  LOGOUT
// //<  LOGIN
// //<  HOME PAGE
// //<  TOURS
// //<  TOUR
// //<  USER PAGE

// //////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
// /////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////

///ROUTES AND PRIVETE ROUTES!
// function PrivateRoute () {
//     const user = JSON.parse(localStorage.getItem('user'));
//     return user ? <Outlet /> : <Navigate to="/login" replace />;
//   }

//   function AnonymousRoute () {
//     const user = JSON.parse(localStorage.getItem('user'));
//     return user ? <Navigate to="/" replace /> : <Outlet />;
//   }
//   <BrowserRouter>
//     <MenuBar />
//     <Routes>
//       <Route element={<PrivateRoute />}>
//         <Route path='/' element={<Dashboard />} />
//         <Route path='/profile' element={<Profile />} />
//       </Route>
//       <Route element={<AnonymousRoute />}>
//         <Route path='/register' element={<RegisterUser />} />
//         <Route path='/login' element={<LoginUser />} />
//         <Route path='/forgotpassword' element={<ForgotPassword />} />
//       </Route>
//     </Routes>
//   </BrowserRouter>
