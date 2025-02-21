import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../lib/tanstackQuery/queryKeys";
import { getUserBookingList } from "../../../lib/api/booking";

function useUserBookingList(currentPage) {
  const { isPending, error, data } = useQuery({
    queryKey: [QUERY_KEYS.BOOKING_LIST, { page: currentPage }],
    queryFn: () => getUserBookingList(currentPage),
  });

  return {
    isPending,
    error,
    data: data?.data,
    pagination: data?.pagination,
  };
}

export default useUserBookingList;
