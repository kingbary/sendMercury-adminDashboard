import { productStores } from "@/services/api/products";
import { useQuery } from "@tanstack/react-query";

export default function useGetProductStore(productId) {
  return useQuery({
    queryKey: ["get-variant", productId],
    queryFn: () => productStores(productId),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  });
}
