//////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES/////
//////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES/////GlobalRouter
const _root: string = "/";
const _home: string = "";

export const GlobalRouter = createBrowserRouter([
  {
    path: _root,
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, //, loader: _homeLoader
      //   {
      //     path: "prod",
      //     children: [
      //       {
      //         index: true,
      //         element: <ToursPage />,
      //         loader: tourLoader,
      //       },
      //       { path: ":id", element: <TourPage />, loader: singleTourLoader },
      //     ],
      //   },
      //   {
      //     path: "login",
      //     element: <LoginPage />,
      //   },
      //   {
      //     path: "signup", ///<
      //     element: <SignupPage />,
      //   },
      //   {
      //     path: "profile",
      //     element: <UserAccountPage />,
      //   },
      //   {
      //     path: "password-reset",
      //     element: <PasswordResetPage />,
      //   },
      //   {
      //     path: "admin",
      //     element: <RootLayout />,
      //     children: [
      //       ///page, may change the name to user...
      //     ],
      //   },
    ],
  },
]);

export const GlobalRouterElments = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
        <Route index={true} element={<HomePage />} />
        {/* //tours// */}
        {/* //:id// */}
      </Route>
    </>
  )
);
//////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES/////
//////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES/////

function PrivateRoute() {
  const user = JSON.parse(localStorage.getItem("user")!);
  return user ? <Outlet /> : <Navigate to="/login" replace />;
}

function AnonymousRoute() {
  const user = JSON.parse(localStorage.getItem("user")!);
  return user ? <Navigate to="/" replace /> : <Outlet />;
}

//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS////////
//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS////////

import {
  //createRoutesFromElements,
  //Route,
  createBrowserRouter,
  RouterProvider,
  Route,
  //@ts-ignore
} from "react-router-dom";
import { createRoutesFromElements, Navigate, Outlet } from "react-router";
import RootLayout from "../components/Layout/LayOut";
import ErrorPage from "../components/pages/error/ErrorPage";

import {
  HomePage,

  //@ts-ignore
} from "../utility/imports.js";

// import HomePage, { topToursLoader } from "../components/pages/home/Home";
// import ToursPage, {
//   loader as tourLoader,
// } from "../components/pages/Tours/Tours";
// import TourPage, { singleTourLoader } from "../components/pages/Tour/Tour";
// import { Navigate, Outlet } from "react-router";
// import LoginPage from "../components/pages/login/LoginPage";
// import SignupPage from "../components/pages/signin/SignupPage";
// import UserAccountPage from "../components/pages/user/UserPage";
// import PasswordResetPage from "../components/pages/password/PasswordResetPage";

// <BrowserRouter>
//   <MenuBar />
//   <Routes>
//     <Route element={<PrivateRoute />}>
//       <Route path='/' element={<Dashboard />} />
//       <Route path='/profile' element={<Profile />} />
//     </Route>
//     <Route element={<AnonymousRoute />}>
//       <Route path='/register' element={<RegisterUser />} />
//       <Route path='/login' element={<LoginUser />} />
//       <Route path='/forgotpassword' element={<ForgotPassword />} />
//     </Route>
//   </Routes>
// </BrowserRouter>

// function PrivateRoute () {
//     const user = JSON.parse(localStorage.getItem('user'));
//     return user ? <Outlet /> : <Navigate to="/login" replace />;
//   }

//   function AnonymousRoute () {
//     const user = JSON.parse(localStorage.getItem('user'));
//     return user ? <Navigate to="/" replace /> : <Outlet />;
//   }

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

//////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES/////
//////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES////ROUTES/////
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
//       <Route index={true} element={<HomePage />} loader={topToursLoader} />
//       <Route path="tours" element={<ToursPage />} loader={tourLoader}>
//         <Route path=":id" element={<TourPage />} loader={singleTourLoader} />
//       </Route>
//     </Route>
//   </Route>
// );

// export const GlobalRouter = createBrowserRouter(routeDefinitions);
