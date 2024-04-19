import { getIndividualProduct } from "@/services/api/individual-product";
import { useQuery } from "@tanstack/react-query";

export default function useGetIndividualProduct(productId) {
  return useQuery({
    queryKey: [`get-individual-product, ${productId}`],
    queryFn: getIndividualProduct(productId),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  });
}
