import axiosInstance from "../../axios";

export const getConsultantDetailsById = async (id) => {
  const { data } = await axiosInstance.get(`consultant/${id}`);
  return data;
};

export const getConsultantList = async (id, currentPage) => {
  const { data } = await axiosInstance.get(`service/${id}?page=${currentPage}`);
  return data;
};

export const createConsultant = async (dataObj) => {
  const { data } = await axiosInstance.post(`consultant/create`, dataObj);
  return data;
};

export const updateConsultant = async (dataObj) => {
  const { data } = await axiosInstance.post(
    `consultant/update/${dataObj?.id}`,
    dataObj,
  );
  return data;
};

export const deleteConsultant = async (id) => {
  const { data } = await axiosInstance.post(`consultant/delete/${id}`);
  return data;
};
