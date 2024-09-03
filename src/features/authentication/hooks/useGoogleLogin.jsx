import { useMutation } from "@tanstack/react-query";
import { googleLogin } from "../../../lib/api/authentication";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext ";
import toast from "react-hot-toast";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseApp } from "../../../lib/firebase";

const handleGoogleLogin = async () => {
  const auth = getAuth(firebaseApp);
  const googleProvider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, googleProvider);
  const user = result.user;
  const idToken = await user.getIdToken();

  const userInfo = {
    email: user.email,
    name: user.displayName,
    phoneNumber: user.phoneNumber || null,
    token: idToken,
  };

  return await googleLogin(userInfo);
};

function useGoogleLogin() {
  const navigate = useNavigate();
  const { setIsAuthenticated, setIsAdmin } = useAuthContext();
  const mutation = useMutation({
    mutationFn: handleGoogleLogin,
    onSuccess: (data) => {
      localStorage.setItem("token", data?.token);
      localStorage.setItem("isAdmin", data?.role);
      toast.success("Login successful");
      setIsAuthenticated(true);
      setIsAdmin(data?.role == "admin");
      navigate("/");
    },
    onError: (error) => {
      console.error("Error in Google login mutation:", error);
      toast.error("An error occurred during Google login. Please try again.");
    },
  });

  return {
    googleLoginAction: mutation.mutateAsync,
    isLoading: mutation.isLoading,
  };
}

export default useGoogleLogin;
