import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { deleteService } from "../../../lib/api/services";
import { QUERY_KEYS } from "../../../lib/tanstackQuery/queryKeys";

function useDeleteService() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (dataObj) => deleteService(dataObj),
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.SERVICE_LIST);
      toast.success("Service Deleted Successfully");
    },
    onError: (error) => {
      toast.error("Failed to Deleted Service");
      console.log(error);
    },
  });

  return {
    deleteService: mutation.mutateAsync,
    isloading: mutation.isPending,
  };
}

export default useDeleteService;
