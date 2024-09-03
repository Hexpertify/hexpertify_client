import axiosInstance from "../../axios";

export const userLogin = async (dataObj) => {
  const { data } = await axiosInstance.post(`login`, dataObj);
  return data;
};

export const userSignup = async (dataObj) => {
  const { data } = await axiosInstance.post(`register`, dataObj);
  return data;
};

export const getUserProfile = async () => {
  const { data } = await axiosInstance.get(`me`);
  return data;
};

export const googleLogin = async (dataObj) => {
  const { data } = await axiosInstance.post("google", dataObj);
  return data;
};

export const getTokens = async (dataObj) => {
  const { data } = await axiosInstance.post("token", dataObj);
  return data;
};
