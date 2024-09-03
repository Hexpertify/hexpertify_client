import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "../../../lib/tanstackQuery/queryKeys";
import { getServiceDetails } from "../../../lib/api/services";

function useServiceDetails({ id, currentPage }) {
  const { isPending, error, data } = useQuery({
    queryKey: [QUERY_KEYS.SERVICE_DETAILS, id, { page: currentPage }],
    queryFn: () => getServiceDetails(id, currentPage),
    enabled: !!id,
  });

  return {
    isPending,
    error,
    data: data?.data,
    pagination: data?.pagination,
  };
}

export default useServiceDetails;
