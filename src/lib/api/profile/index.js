import axiosInstance from "../../axios";

export const updateBanner = async (dataObj) => {
  const { data } = await axiosInstance.post(
    `/user-interface/update-banner`,
    dataObj,
  );
  return data;
};

export const getBanner = async () => {
  const { data } = await axiosInstance.get(`/user-interface`);
  return data;
};

export const updateProfile = async (dataObj) => {
  const { data } = await axiosInstance.post(
    `/user-interface/update-profile`,
    dataObj,
  );
  return data;
};
