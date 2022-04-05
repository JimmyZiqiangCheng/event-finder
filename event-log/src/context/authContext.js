import React, { useState } from "react";
import { onAuthStatusChange } from "../services/AuthService";
import { useWillMount } from "../utils/customHooks";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../redux/actions/authActions";

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  useWillMount(() => {
    onAuthStatusChange({
      setUser: (user) => dispatch(loginUser(user)),
      removeUser: () => dispatch(logoutUser()),
    });
  });

  return (
    <AuthContext.Provider value={{ currentUser, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
