import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { QUERY_KEYS } from "../../../lib/tanstackQuery/queryKeys";
import { createConsultant } from "../../../lib/api/consultants";

function useCreateConsultant() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (dataObj) => createConsultant(dataObj),
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.CONSULTANT_LIST);
      toast.success("Consultant Create Successfully");
    },
    onError: (error) => {
      toast.error("Failed to Create Consultant");
      console.log(error);
    },
  });

  return {
    createConsultant: mutation.mutateAsync,
    isloading: mutation.isPending,
  };
}

export default useCreateConsultant;
