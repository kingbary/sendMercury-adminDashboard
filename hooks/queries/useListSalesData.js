import { listSalesData } from "@/services/api/list-salesData";
import { useQuery } from "@tanstack/react-query";

export default function useListSalesData({ time, year }) {
  return useQuery({
    queryKey: ["list-sales-data"],
    queryFn: () => listSalesData({ time, year }),
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  });
}
