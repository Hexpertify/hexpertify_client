import axios from "axios";
import { getTokens } from "../api/authentication";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    const originalRequest = error.config;

    if ((response && response.status === 401) || response.data.status === 403) {
      if (!originalRequest._retry) {
        originalRequest._retry = true;

        if (!isRefreshing) {
          isRefreshing = true;

          const refreshToken = localStorage.getItem("refreshToken");

          return new Promise((resolve, reject) => {
            getTokens({ refreshToken })
              .then(({ token }) => {
                localStorage.setItem("token", token);
                axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
                originalRequest.headers.Authorization = `Bearer ${token}`;
                processQueue(null, token);
                resolve(axiosInstance(originalRequest));
              })
              .catch((err) => {
                console.error("Failed to refresh token", err);
                localStorage.removeItem("token");
                localStorage.removeItem("refreshToken");
                window.location.href = "/login";
                processQueue(err, null);
                reject(err);
              })
              .finally(() => {
                isRefreshing = false;
              });
          });
        }

        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        });
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
