import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "../../../lib/tanstackQuery/queryKeys";
import { getConsultantList } from "../../../lib/api/consultants";

function useConsultantList(id, currentPage, all) {
  const { isPending, error, data } = useQuery({
    queryKey: [QUERY_KEYS.CONSULTANT_LIST, { page: currentPage }],
    queryFn: () => getConsultantList(id, currentPage, all),
    enabled: !!id,
  });

  return {
    isPending,
    error,
    data: data?.data,
    pagination: data?.pagination,
  };
}

export default useConsultantList;
