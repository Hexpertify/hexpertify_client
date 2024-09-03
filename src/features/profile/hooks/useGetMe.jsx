import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "../../../lib/tanstackQuery/queryKeys";
import { getUserProfile } from "../../../lib/api/authentication";

function useGetMe() {
  const { isPending, error, data } = useQuery({
    queryKey: [QUERY_KEYS.PROFILE],
    queryFn: () => getUserProfile(),
  });

  return {
    isPending,
    error,
    data: data?.user,
  };
}

export default useGetMe;
