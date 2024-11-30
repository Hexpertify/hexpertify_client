/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const INITIAL_STATE = {
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  isAdmin: false,
  setIsAdmin: () => {},
};
export const AuthContext = createContext(INITIAL_STATE);

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuthenticated(true);
    }
    if (localStorage.getItem("isAdmin") == "admin") {
      setIsAdmin(true);
    }
  }, []);
  const value = {
    isAdmin,
    setIsAdmin,
    isAuthenticated,
    setIsAuthenticated,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(AuthContext);
