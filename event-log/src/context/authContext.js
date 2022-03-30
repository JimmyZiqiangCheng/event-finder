import React, { useState, useEffect } from "react";
import { onAuthStatusChange } from "../services/AuthService";

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    onAuthStatusChange(setCurrentUser);
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
