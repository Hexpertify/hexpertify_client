import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "../../../lib/tanstackQuery/queryKeys";
import toast from "react-hot-toast";

import { updateBanner } from "../../../lib/api/profile";

function useUpdateBanner() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id) => updateBanner(id),
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.BANNER);
      toast.success("Banner updated Successfully");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Failed to updated Banner");
    },
  });

  return {
    updateBannerAction: mutation.mutateAsync,
    isloading: mutation.isPending,
  };
}

export default useUpdateBanner;
