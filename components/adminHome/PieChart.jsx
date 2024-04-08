import React from "react";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PieController,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PieController,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement
);

export default function PieChart({ data, options }) {
  return <Pie className="max-w-xs my-0 mx-auto aspect-square" data={data} options={options} />;
}
