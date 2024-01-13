import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function DataChart() {
  const days = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"];
  const crypto1Data = [1000, 1200, 900, 1100, 950];
  const crypto2Data = [800, 1000, 750, 900, 800];
  const crypto3Data = [1200, 1500, 1100, 1400, 1300];

  const [chartData, setChartData] = useState({
    labels: days,
    datasets: [
      {
        label: "Crypto 1",
        data: crypto1Data,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
      },
      {
        label: "Crypto 2",
        data: crypto2Data,
        borderColor: "rgba(255,99,132,1)",
        backgroundColor: "rgba(255,99,132,0.2)",
      },
      {
        label: "Crypto 3",
        data: crypto3Data,
        borderColor: "rgba(255,206,86,1)",
        backgroundColor: "rgba(255,206,86,0.2)",
      },
    ],
  });
  return (
    <div className=" w-full">
      <Line
        data={chartData}
        options={{
          title: {
            display: true,
            text: "Cryptocurrency Market Cap Over Days",
            fontSize: 16,
          },
          scales: {
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Days",
                },
              },
            ],
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Market Cap",
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}

export default DataChart;
