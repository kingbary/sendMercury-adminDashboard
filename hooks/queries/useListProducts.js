import { listProducts } from "@/services/api/products";
import { useQuery } from "@tanstack/react-query";

export default function useListProducts({ status, type, pageParam, limit }) {
  return useQuery({
    queryKey: ["list-products", { status, type, pageParam, limit }],
    queryFn: () => listProducts(status, type, pageParam, limit),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  });
}
