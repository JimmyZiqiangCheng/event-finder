import React, { useState } from "react";
import { onAuthStatusChange } from "../services/AuthService";
import { useWillMount } from "../utils/customHooks";

export const AuthContext = React.createContext();
function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  useWillMount(() => {
    onAuthStatusChange({
      setCurrentUser,
      setIsAuthenticated,
    });
  });

  return (
    <AuthContext.Provider value={{ currentUser, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
