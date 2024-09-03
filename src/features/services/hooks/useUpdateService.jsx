import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { UpdateService } from "../../../lib/api/services";
import { QUERY_KEYS } from "../../../lib/tanstackQuery/queryKeys";

function useUpdateService() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (dataObj) => UpdateService(dataObj),
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.SERVICE_LIST);
      toast.success("Service Updated Successfully");
    },
    onError: (error) => {
      toast.error("Failed to Update Service");
      console.log(error);
    },
  });

  return {
    updateService: mutation.mutateAsync,
    isloading: mutation.isPending,
  };
}

export default useUpdateService;
