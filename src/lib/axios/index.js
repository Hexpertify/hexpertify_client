import axios from "axios";
import { getTokens } from "../api/authentication";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log("Request Config:", config);
    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { response } = error;
    if (response && response.status === 401) {
      const refreshToken = localStorage.getItem("refreshToken");
      try {
        const { token } = await getTokens({ refreshToken: refreshToken });
        localStorage.setItem("token", token);
        response.config.headers.Authorization = `Bearer ${token}`;
        return axiosInstance(response.config);
      } catch (err) {
        console.error("Failed to refresh token", err);
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
