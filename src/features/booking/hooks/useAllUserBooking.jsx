import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../lib/tanstackQuery/queryKeys";
import { geAllBookingList } from "../../../lib/api/booking";

function useAllUserBooking(currentPage) {
  const { isPending, error, data } = useQuery({
    queryKey: [QUERY_KEYS.ALL_BOOKING_LIST, { page: currentPage }],
    queryFn: () => geAllBookingList(currentPage),
  });

  return {
    isPending,
    error,
    data: data?.data,
    pagination: data?.pagination,
  };
}

export default useAllUserBooking;
