import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { getUpdateServiceStatus } from "../../../lib/api/services";
import { QUERY_KEYS } from "../../../lib/tanstackQuery/queryKeys";

function useUpdateServiceStatus() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (dataObj) => getUpdateServiceStatus(dataObj?.id, dataObj),
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
    updateServiceStatusAction: mutation.mutateAsync,
    isloading: mutation.isPending,
  };
}

export default useUpdateServiceStatus;
