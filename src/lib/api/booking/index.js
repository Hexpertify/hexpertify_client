import axiosInstance from "../../axios";

export const cancelBooking = async (id) => {
  const { data } = await axiosInstance.post(`booking/status/${id}`, {
    status: "cancelled",
  });
  return data;
};

export const updateBookingStatus = async ( dataObj) => {
  const { data } = await axiosInstance.post(`booking/status/${dataObj?.id}`, dataObj);
  return data;
};

export const getBookConsultant = async (dataObj) => {
  const { data } = await axiosInstance.post(`booking/create`, dataObj);
  return data;
};

export const getUserBookingList = async (currentPage) => {
  const { data } = await axiosInstance.get(`booking/user?page=${currentPage}`);
  return data;
};

export const geAllBookingList = async (currentPage) => {
  const { data } = await axiosInstance.get(`booking?page=${currentPage}`);
  return data;
};
