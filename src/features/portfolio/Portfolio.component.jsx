import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import numeral from "numeral";
import { useQuery } from "react-query";
import { getPortfolio } from "../../services/apiPortfolio";
import { useEffect, useState } from "react";
ChartJS.register(ArcElement, Tooltip, Legend);

//Portfolio component shows the Major crypto currency in pia chart format
function Portfolio() {
  // const [totalValume, setTotalValume] = useState("");
  const { data, isLoading } = useQuery({
    queryKey: ["portfolio"],
    queryFn: getPortfolio,
    staleTime: 60000,
  });
  // const dataSet = data.map((val) => val.martket_cap);
  // const labelSet = data.map((val) => val.name);
  // const totalVolume = dataSet.reduce((cap, acc) => cap + acc, 0);
  const [dataSet, setDataSet] = useState([]);
  const [labelSet, setLabelSet] = useState([]);
  const [totalVolume, setTotalVolume] = useState(0);

  useEffect(() => {
    if (isLoading === false) {
      const retreivedData = data.map((val) => val.market_cap);
      const retreivedLabels = data.map((val) => val.name);
      const retreivedTotalVolume = retreivedData.reduce(
        (cap, acc) => cap + acc,
        0
      );
      console.log(retreivedData, retreivedLabels);
      setDataSet(retreivedData);
      setLabelSet(retreivedLabels);
      setTotalVolume(retreivedTotalVolume);
    }
  }, [isLoading, data]);

  return (
    <>
      <div className="w-4/5">
        <Pie
          data={{
            labels: labelSet,
            datasets: [
              {
                label: "market cap",
                data: dataSet,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.4)",
                  "rgba(54, 162, 235, 0.4)",
                  "rgba(255, 206, 86, 0.4)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                ],
                borderWidth: 1,
                offset: [0, 20, 0],
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: true,
                position: "right",
                labels: {
                  usePointStyle: true,
                  pointStyle: "circle",
                  padding: 10,
                },
              },
              title: {
                display: false,
              },
              datalabels: {
                display: true,
                color: "white",
                align: "top       ",
                position: "chartArea",
                labels: {
                  title: {
                    font: {
                      weight: "bold",
                      size: 13,
                    },
                  },
                },
                formatter: (dataSet1) => numeral(dataSet1).format("$0,0"),
              },
            },
          }}
        />
      </div>
      <div className="absolute right-3 top-0">
        <h6 className="mt-2 text-gray-400 mr-0 text-sm">Total Value</h6>
        <h5>
          <span className="mt-2 font-semibold text-gray-900">
            ${totalVolume}
          </span>
        </h5>
      </div>
    </>
  );
}

export default Portfolio;
