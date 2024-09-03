import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext ";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated: isAuth } = useAuthContext();

  return isAuth ? children : navigate("/");
}

export default ProtectedRoute;
