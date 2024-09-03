/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext ";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated: isAuth } = useAuthContext();

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  return isAuth ? children : null;
}

export default ProtectedRoute;
