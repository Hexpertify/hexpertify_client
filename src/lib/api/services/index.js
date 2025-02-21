import axiosInstance from "../../axios";

export const getServiceList = async (currentPage, all) => {
  const { data } = await axiosInstance.get(
    `service/list?page=${currentPage || 0}&all=${all ?? ""}`,
  );
  return data;
};

export const getServiceDetails = async (id, currentPage) => {
  const { data } = await axiosInstance.get(`service/${id}?page=${currentPage}`);
  return data;
};

export const getUpdateServiceStatus = async (id, dataObj) => {
  const { data } = await axiosInstance.patch(`service/${id}`, dataObj);
  return data;
};

export const CreateService = async (dataObj) => {
  const { data } = await axiosInstance.post(`service/create`, dataObj);
  return data;
};

export const UpdateService = async (dataObj) => {
  const { data } = await axiosInstance.post(
    `service/update/${dataObj?.id}`,
    dataObj,
  );
  return data;
};

export const deleteService = async (dataObj) => {
  const { data } = await axiosInstance.post(
    `service/delete/${dataObj?.id}`,
    dataObj,
  );
  return data;
};
