import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateBookingStatus } from "../../../lib/api/booking";
import { QUERY_KEYS } from "../../../lib/tanstackQuery/queryKeys";
import toast from "react-hot-toast";

function useUpdateBookingStatus() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (dataObj) => updateBookingStatus(dataObj),
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.PROFILE_DETAILS);
      toast.success("Booking updated Successfully");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Failed to updated Booking");
    },
  });

  return {
    updateBookingStatusAction: mutation.mutateAsync,
    isloading: mutation.isPending,
  };
}

export default useUpdateBookingStatus;
