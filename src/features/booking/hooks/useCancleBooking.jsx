import { useMutation, useQueryClient } from "@tanstack/react-query";

import { cancelBooking } from "../../../lib/api/booking";
import { QUERY_KEYS } from "../../../lib/tanstackQuery/queryKeys";
import toast from "react-hot-toast";

function useCancleBooking() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id) => cancelBooking(id),
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.PROFILE_DETAILS);
      toast.success("Booking Cancelled Successfully");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Failed to Cancel Booking");
    },
  });

  return {
    cancelBookingAction: mutation.mutateAsync,
    isloading: mutation.isPending,
  };
}

export default useCancleBooking;
