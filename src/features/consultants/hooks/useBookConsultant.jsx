import { useMutation } from "@tanstack/react-query";

import { getBookConsultant } from "../../../lib/api/booking";
import toast from "react-hot-toast";

function useBookConsultant() {
  const mutation = useMutation({
    mutationFn: (dataObj) => getBookConsultant(dataObj),
    onSuccess: () => {
      toast.success("Consultant Booked Successfully");
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message || "Failed to Book Consultant",
      );
      console.log(error);
    },
  });

  return {
    bookConsultantAction: mutation.mutateAsync,
    isloading: mutation.isPending,
  };
}

export default useBookConsultant;
