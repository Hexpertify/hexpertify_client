import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { QUERY_KEYS } from "../../../lib/tanstackQuery/queryKeys";
import { updateConsultant } from "../../../lib/api/consultants";

function useUpdateConsultant() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (dataObj) => updateConsultant(dataObj),
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.CONSULTANT_LIST);
      toast.success("Consultant Update Successfully");
    },
    onError: (error) => {
      toast.error("Failed to Update Consultant");
      console.log(error);
    },
  });

  return {
    updateConsultant: mutation.mutateAsync,
    isloading: mutation.isPending,
  };
}

export default useUpdateConsultant;
