import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "../../../lib/tanstackQuery/queryKeys";
import { getConsultantDetailsById } from "../../../lib/api/consultants";

function useServiceDetails({ id }) {
  const { isPending, error, data } = useQuery({
    queryKey: [`${QUERY_KEYS.CONSULTANT_DETAILS} ${id}`],
    queryFn: () => getConsultantDetailsById(id),
    enabled: !!id,
  });

  return {
    isPending,
    error,
    data: data?.data?.[0],
  };
}

export default useServiceDetails;
