import axiosInstance from "../../axios";

export const updateBanner = async (dataObj) => {
  const { data } = await axiosInstance.post(`/user-interface/`, dataObj);
  return data;
};

export const getBanner = async () => {
  const { data } = await axiosInstance.get(`/user-interface`);
  return data;
};
