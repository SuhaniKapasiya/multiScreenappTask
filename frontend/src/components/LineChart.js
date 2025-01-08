// components/LineChart.js
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale, // For the 'category' scale
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement, // For Pie/Doughnut charts
} from "chart.js";

import { Line } from "react-chartjs-2";
// Register components globally
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);




function LineChart({ labels, datasets }) {
  const data = {
    labels,
    datasets,
  };

  return <Line data={data} />;
}
export default LineChart;
