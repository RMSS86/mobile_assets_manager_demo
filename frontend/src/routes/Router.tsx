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
      { path: "login", element: <LoginPage /> },
      { path: "qr", element: <QrPage /> },
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
        <Route path="assets" element={<ItemsPage />} />
        <Route path="track" element={<TrackPage />} />
        <Route path="qr" element={<QrPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="password-reset" element={<PasswordResetPage />} />

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
import RootLayout from "../components/Layout/LayOut";
import ErrorPage from "../components/pages/error/ErrorPage";
import LoginPage from "../components/pages/login/LoginPage.js";

import { createRoutesFromElements, Navigate, Outlet } from "react-router";

import {
  HomePage,

  //@ts-ignore
} from "../utility/imports.js";
import QrPage from "../components/pages/qr/QrPage.js";
import ItemsPage from "../components/pages/items/ItemsPage.js";
import TrackPage from "../components/pages/track/TrackPage.js";
import PasswordResetPage from "../components/pages/password/PasswordResetPage.js";
import SignupPage from "../components/pages/signin/SignupPage.js";

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
