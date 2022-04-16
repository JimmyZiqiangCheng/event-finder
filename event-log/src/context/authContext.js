import React, { useState } from "react";

export const AuthContext = React.createContext();
function AuthProvider({ children, ...props }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const { useWillMount, onAuthStatusChange } = props;
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
