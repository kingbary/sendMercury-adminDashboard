import { formatNumbers } from "@/utils/formatNumbers.util";
import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { toast } from "sonner";

const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

const LineChart = ({ activeTab }) => {
  const [timeFrame, setTimeFrame] = useState("month");
  const [token, setToken] = useState("");
  const [salesData, setSalesData] = useState([]);
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
  const options = {
    colors: ["#0032c8", "#219653"],
    chart: {
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    grid: {
      show: false,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    stroke: {
      show: true,
      curve: "straight",
      lineCap: "butt",
      colors: ["#0032c8", "#219653"],
      width: 1.5,
      dashArray: 0,
    },

    dataLabels: {
      enabled: false,
    },
    yaxis: {
      axisBorder: {
        show: true,
        color: "#000",
        offsetX: 0,
        offsetY: 0,
      },
    },
    xaxis: {
      axisBorder: {
        show: true,
        color: "#000",
        offsetX: 0,
        offsetY: 0,
      },
      categories: salesData?.map((data)=> {
        return data?.month
      })
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      fontWeight: 500,
      fontSize: "18px",

      markers: {
        radius: 99,
      },
    },
    fill: {
      opacity: 1,
    },
  };
  const [state, setState] = useState({
    series: [
      {
        name: "Sales",
        data: salesData.map((data) => {
          return (data?.total + 100);
        }),
      },
      {
        name: "Revenue",
        data: [13, 23, 20, 8, 13, 27, 15, 44, 55, 41, 67, 22, 43, 65],
      },
    ],
  });

  return (
    <div className="col-span-12 rounded-sm shadow-small bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div>
        <div id="chartTwo" className="-ml-5 -mb-9">
          <ReactApexChart
            options={options}
            series={state.series}
            type="line"
            height={450}
          />
        </div>
      </div>
    </div>
  );
};

export default LineChart;
