import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "../../../lib/tanstackQuery/queryKeys";
import { getBanner } from "../../../lib/api/profile";

function useGetBanner() {
  const { isPending, error, data } = useQuery({
    queryKey: [QUERY_KEYS.BANNER],
    queryFn: () => getBanner(),
  });

  return {
    isPending,
    error,
    data: data?.data,
  };
}

export default useGetBanner;
