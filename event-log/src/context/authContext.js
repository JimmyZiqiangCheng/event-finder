import React, { useState } from "react";
import { useWillMount } from "../utils/customHooks";
import { auth } from "../services/AuthService";
import { formatUser } from "../utils/helperFunctions";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = React.createContext();
function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  useWillMount(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(formatUser(user));
        setIsAuthenticated(true);
      } else {
        setCurrentUser({});
        setIsAuthenticated(false);
      }
    });
  });

  return (
    <AuthContext.Provider value={{ currentUser, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
