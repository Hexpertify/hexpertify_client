// src/axiosInstance.js

import axios from "axios";

// Create an Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/", // Replace with your API base URL
  timeout: 10000, // Optional: set a timeout for requests
  headers: {
    "Content-Type": "application/json",
    // Add other default headers here if needed
  },
});

// Optional: Add request interceptors
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify request configuration if needed
    // For example, add auth token to headers
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Optional: Add response interceptors
axiosInstance.interceptors.response.use(
  (response) => {
    // Process response data if needed
    return response;
  },
  (error) => {
    // Handle response errors
    if (error.response && error.response.status === 401) {
      // Handle unauthorized errors, e.g., redirect to login
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
