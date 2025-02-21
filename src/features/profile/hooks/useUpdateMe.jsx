import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "../../../lib/tanstackQuery/queryKeys";
import toast from "react-hot-toast";

import { updateProfile } from "../../../lib/api/profile";

function useUpdateMe() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (dataObj) => updateProfile(dataObj),
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.PROFILE);
      toast.success("Profile updated Successfully");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Failed to updated Profile");
    },
  });

  return {
    updateMeAction: mutation.mutateAsync,
    isloading: mutation.isPending,
  };
}

export default useUpdateMe;
