import dynamic from "next/dynamic";
const LineChart = dynamic(() => import("../universal/LineChart"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
import { formatNumbers } from "../../utils/formatNumbers.util";
import { useEffect, useState } from "react";
import YearSelect from "../universal/YearSelect";
import Container from "../universal/Container";
import { toast } from "sonner";
import axios from "axios";
import TimeFrameSelect from "../universal/TimeFrameSelect";

export default function RevenueSection() {
  const [activeTab, setActiveTab] = useState("2024");
  const [timeFrame, setTimeFrame] = useState("month");
  const [token, setToken] = useState("");
  const [salesData, setSalesData] = useState([]);
  const [revenueData, setRevenueData] = useState([]);

  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
  useEffect(() => {
    const item = localStorage.getItem("token");
    setToken(item);
  }, []);

  useEffect(() => {
    const getSalesData = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/admin/orders/sales-metric/${timeFrame}?year=${activeTab}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = response.data.data;
        setSalesData(data);
      } catch (error) {
        toast.error(`${error}`);
      }
    };

    if (token) {
      getSalesData();
    }
  }, [token, activeTab, timeFrame]);
  useEffect(() => {
    const getRevenueData = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/admin/subscriptions/revenue-metric/${timeFrame}?year=${activeTab}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = response.data.data;
        setRevenueData(data);
      } catch (error) {
        toast.error(`${error}`);
      }
    };

    if (token) {
      getRevenueData();
    }
  }, [token, activeTab, timeFrame]);

  return (
    <Container className="mx-4">
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-[#333] text-xl font-extrabold">
            Revenue & Sales Report
          </p>
          <p className="text-base leading-normal">April {activeTab} Report</p>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-2 md:gap-6 mb-3 justify-between md:items-center">
          <div className="flex gap-4">
            <YearSelect handleActiveTab={setActiveTab} />
            <TimeFrameSelect handleTimeFrame={setTimeFrame} />
          </div>
          <div className="flex gap-4">
            <div className="flex gap-3">
              <div className="bg-primaryGreen h-6 w-6 rounded-full"></div>Sales
            </div>
            <div className="flex gap-3">
              <div className="bg-primaryBlue h-6 w-6 rounded-full"></div>Revenue
            </div>
          </div>
        </div>
      </div>
      <div className="w-full aspect-3">
        {/* {salesData?.map((data)=>{
          if (data?.total === 0) {
            return <p>You do not have any revenue and sales report yet</p>
          }
        })}
        <LineChart
          activeTab={activeTab}
          revenueData={revenueData}
          salesData={salesData}
        /> */}
        <p className="text-midGray text-center text-xl py-6">
          You do not have any revenue and sales report yet
        </p>
      </div>
    </Container>
  );
}
