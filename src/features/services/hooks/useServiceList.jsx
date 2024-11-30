import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "../../../lib/tanstackQuery/queryKeys";
import { getServiceList } from "../../../lib/api/services";

function useServiceList(currentPage, all) {
  const { isPending, error, data } = useQuery({
    queryKey: [QUERY_KEYS.SERVICE_LIST, { page: currentPage }],
    queryFn: () => getServiceList(currentPage, all),
  });

  return {
    isPending,
    error,
    data: data?.data,
    pagination: data?.pagination,
  };
}

export default useServiceList;
