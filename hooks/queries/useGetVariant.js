import { getVariant } from "@/services/api/products";
import { useQuery } from "@tanstack/react-query";

export default function useGetVariant(variantId) {
  return useQuery({
    queryKey: ["get-product-variant", variantId],
    queryFn: () => getVariant(variantId),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  });
}
