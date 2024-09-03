import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { QUERY_KEYS } from "../../../lib/tanstackQuery/queryKeys";
import { deleteConsultant } from "../../../lib/api/consultants";

function useDeleteConsultant() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (dataObj) => deleteConsultant(dataObj),
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.CONSULTANT_LIST);
      toast.success("Consultant Delete Successfully");
    },
    onError: (error) => {
      toast.error("Failed to Delete Consultant");
      console.log(error);
    },
  });

  return {
    deleteConsultant: mutation.mutateAsync,
    isloading: mutation.isPending,
  };
}

export default useDeleteConsultant;
