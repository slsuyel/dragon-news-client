import React, { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProviders = ({ children }) => {
  const user = { displayName: "Suyel Haque" };
  const AuthInfo = { user };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
