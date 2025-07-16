////////////Step 1: Create the User Context
// UserContext.tsx
// import React, { createContext, ReactNode, useContext, useState } from "react";

// type AuthUser = {
//   name: string;
//   email: string;
// };

// type UserContextType = {
//   user: AuthUser | null;
//   setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
// };

// const UserContext = createContext<UserContextType | undefined>(undefined);

// type UserContextProviderProps = {
//   children: ReactNode;
// };

// export const UserContextProvider = ({ children }: UserContextProviderProps) => {
//   const [user, setUser] = useState<AuthUser | null>(null);

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// // Custom hook to use the UserContext
// export const useUserContext = () => {
//   const context = useContext(UserContext);
//   if (!context) {
//     throw new Error("useUserContext must be used within a UserContextProvider");
//   }
//   return context;
// };

/////////Step 2: Wrap Your App with the Context Provider
// Main.tsx
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.tsx';
// import { UserContextProvider } from './context/UserContext';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <UserContextProvider>
//       <App />
//     </UserContextProvider>
//   </React.StrictMode>,
// );

///////////Step 3: Create a Component to Use the Context
// AuthUser.tsx
// import { useUserContext } from "../context/UserContext";

// export const AuthUser = () => {
//   const { user, setUser } = useUserContext();

//   const login = () => {
//     setUser({ name: "John Doe", email: "john.doe@example.com" });
//   };

//   const logout = () => {
//     setUser(null);
//   };

//   return (
//     <div>
//       <button onClick={login}>Login</button>
//       <button onClick={logout}>Logout</button>
//       <p>User: {user ? user.name : "No user logged in"}</p>
//     </div>
//   );
// };

///////////Step 4: Using the Component in Your App
// App.tsx
// import React from 'react';
// import { AuthUser } from './components/AuthUser';

// function App() {
//     return (
//         <div className="App">
//             <AuthUser />
//         </div>
//     );
// }

//////////////////////////////////LOCAL STORAGE
import { useState, useEffect } from "react";
import browserStorage from "store";

// This hook receives two parameters:
// storageKey: This is the name of our storage that gets used when we retrieve/save our persistent data.
// initialState: This is our default value, but only if the store doesn't exist, otherwise it gets overwritten by the store.
// export default (storageKey, initialState) => {
//   // Initiate the internal state.
//   const [state, setInternalState] = useState(initialState);

//   // Only on our initial load, retrieve the data from the store and set the state to that data.
//   useEffect(() => {
//     // Retrieve the data from the store.
//     const storageInBrowser = browserStorage.get(storageKey);

//     // If the store exists, overwrite the state with the store's data.
//     // Otherwise if the store doesn't exist then "initialState" remains our default value.
//     if (storageInBrowser) {
//       setInternalState(storageInBrowser);
//     }
//   }, []);

//   // Create a replacement method that will set the state like normal, but that also saves the new state into the store.
//   const setState = (newState) => {
//     browserStorage.set(storageKey, newState);
//     setInternalState(newState);
//   };

//   return [state, setState];
// };

///////
// import usePersistState from '/usePersistState';

// const UserProvider = (props) => {

//   // When initiating the new hook you need to pass a key for the store.
//   // you can also optionally pass a default value which will be overwritten if the store already exists.
//   const [userData, setUserData] = usePersistState('userData', {
//     token: '',
//     email: '',
//   });

//   // ...

//   // When setting values, they will now save to the state and also update the store in the browser.
//   setUserData({
//     email: "example@example.com",
//     token: "123abc...",
//   })
// }
