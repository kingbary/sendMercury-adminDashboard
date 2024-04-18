import { listProducts } from "@/services/api/list-products";
import { useQuery } from "@tanstack/react-query";

export default function useListProducts({ status, type, pageParam, limit }) {
  return useQuery({
    queryKey: ["list-products"],
    queryFn: () => listProducts({ status, type, pageParam, limit }),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  });
}
