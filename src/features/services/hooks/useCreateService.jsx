import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { CreateService } from "../../../lib/api/services";
import { QUERY_KEYS } from "../../../lib/tanstackQuery/queryKeys";

function useCreateService() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (dataObj) => CreateService(dataObj),
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.SERVICE_LIST);
      toast.success("Service Create Successfully");
    },
    onError: (error) => {
      toast.error("Failed to Create Service");
      console.log(error);
    },
  });

  return {
    createService: mutation.mutateAsync,
    isloading: mutation.isPending,
  };
}

export default useCreateService;
