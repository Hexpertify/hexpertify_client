import { useMutation } from "@tanstack/react-query";

import { userLogin } from "../../../lib/api/authentication";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext ";
import toast from "react-hot-toast";

function useLogin() {
  const navigate = useNavigate();
  const { setIsAuthenticated, setIsAdmin } = useAuthContext();
  const mutation = useMutation({
    mutationFn: (data) => userLogin(data),
    onSuccess: (data) => {
      localStorage.setItem("token", data?.token);
      localStorage.setItem("isAdmin", data?.role);
      localStorage.setItem("refreshToken", data?.refreshToken);
      toast.success("Login successful");
      setIsAuthenticated(true);
      setIsAdmin(data?.role == "admin");
      navigate("/");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "An error occurred");
      console.log(error);
    },
  });

  return { loginAction: mutation.mutateAsync, isloading: mutation.isPending };
}

export default useLogin;
