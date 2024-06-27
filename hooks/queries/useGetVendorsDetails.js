import { getVendorsdetails } from "@/services/api/get-vendors-details";
import { useQuery } from "@tanstack/react-query";

export default function useGetVendorDetails(userId) {
  return useQuery({
    queryKey: ["get-vendors-details", userId],
    queryFn: () => getVendorsdetails(userId),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  });
}
