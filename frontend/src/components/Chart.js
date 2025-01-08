import React, { useEffect, useState } from "react";
import { getCharts } from "../utils/Handleapi";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

function Chart() {
  const [chartData, setChartData] = useState([]);
  const [error, setError] = useState(null);

  const fetchChartData = async () => {
    try {
      const data = await getCharts();
      console.log("data", data);
      setChartData(data); // Save the entire data array
    } catch (error) {
      setError("Failed to load charts. Please try again later.");
      console.error("Error fetching chart data:", error);
    }
  };

  useEffect(() => {
    fetchChartData();
  }, []);

  // Filter data by chart type
  const lineCharts = chartData.filter((chart) => chart.chartType === "line");
  const pieCharts = chartData.filter((chart) => chart.chartType === "pie");

  return (
    <div style={{ padding: "1rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Charts Dashboard</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="flex justify-between w-1/2">
        {/* Render Line Charts */}
        {lineCharts.map((lineChartData) => (
          <LineChart
            key={lineChartData._id}
            labels={lineChartData.labels}
            datasets={lineChartData.datasets}
          />
        ))}

        {/* Render Pie Charts */}
        {pieCharts.map((pieChartData) => (
          <PieChart
            key={pieChartData._id}
            labels={pieChartData.labels}
            datasets={pieChartData.datasets}
          />
        ))}
      </div>
    </div>
  );
}

export default Chart;
