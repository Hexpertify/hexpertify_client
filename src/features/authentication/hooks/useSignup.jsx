import { useMutation } from "@tanstack/react-query";

import { userSignup } from "../../../lib/api/authentication";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext ";
import toast from "react-hot-toast";

function useSignup() {
  const navigate = useNavigate();
  const { setIsAuthenticated, setIsAdmin } = useAuthContext();
  const mutation = useMutation({
    mutationFn: (data) => userSignup({ ...data, role: "user" }),
    onSuccess: (data) => {
      localStorage.setItem("token", data?.token);
      localStorage.setItem("isAdmin", data?.role);
      localStorage.setItem("refreshToken", data?.refreshToken);
      toast.success("Signup successful");
      setIsAdmin(data?.role == "admin");
      setIsAuthenticated(true);
      navigate("/");
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message?.[0]?.message ||
          error?.response?.data?.errors ||
          "An error occurred",
      );
      console.log(error);
    },
  });

  return { signupAction: mutation.mutateAsync, isloading: mutation.isPending };
}

export default useSignup;
