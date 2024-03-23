import { useQuery } from "@tanstack/react-query";
import { getBoards } from "../_queries/getBoards";

export function useBoardsQuery(token: string) {
  const queryKey = ['boards'];

  const queryFn = async () => {
    return getBoards(token).then(
      (result: any) => result.data
    );
  };

  return useQuery({ queryKey, queryFn });
}

export default useBoardsQuery;