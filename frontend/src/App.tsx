//////APP//////APP//////APP//////APP//////APP//////APP//////APP/////
//////APP//////APP//////APP//////APP//////APP//////APP//////APP/////
export default function App() {
  /////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS//////
  /////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS////FUNCTIONS//////
  const { globalUser, setGlobalUser } = useUserContext();
  useEffect(() => {
    useLocalUser({
      _user: globalUser,
      _userDispatcher: setGlobalUser,
      _action: "verify",
    });
  }, []);

  //////RETURN////RETURN////RETURN////RETURN////RETURN////RETURN////RETURN
  //////RETURN////RETURN////RETURN////RETURN////RETURN////RETURN////RETURN
  return (
    <>
      <MainQueryClientProvider>
        <RouterProvider router={GlobalRouterElments} />
      </MainQueryClientProvider>
    </>
  );
}
/////TYPES////TYPES////TYPES////TYPES////TYPES////TYPES////TYPES////TYPES////
/////TYPES////TYPES////TYPES////TYPES////TYPES////TYPES////TYPES////TYPES////

//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
//////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////

import {
  RouterProvider,
  //@ts-ignore
} from "react-router-dom";
import { useEffect } from "react";
import { GlobalRouter, GlobalRouterElments } from "./routes/Router.tsx";
import { useUserContext } from "./store/UserContext.tsx";
import { useLocalUser } from "./models/hooks/useLocalUser.tsx";
import { MainQueryClientProvider } from "./query/QueryProvider.tsx";
