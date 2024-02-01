import React, { useReducer } from "react";
import { Line } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart } from "chart.js/auto";
import { useQuery } from "react-query";
import { getChartData } from "../../services/apiChartData";
import ButtonInterval from "../../ui/ButtonInterval";
import Spinner from "../../ui/Spinner";

const initialState = {
  id: "bitcoin",
  days: 7,
  interval: "daily",
};

const actions = {
  DAY_DATA: "action/dayData",
  WEEK_DATA: "action/weekData",
  MONTH_DATA: "action/monthData",
  HALF_YEARLY_DATA: "action/halfYearData",
  YEAR_DATA: "action/yearData",
  SET_ID: "action/setId",
};

function reducer(state, action) {
  switch (action.type) {
    case actions.DAY_DATA:
      return {
        ...state,
        interval: "",
        days: 1,
      };

    case actions.WEEK_DATA:
      return {
        ...state,
        interval: "daily",
        days: 7,
      };
    case actions.MONTH_DATA:
      return {
        ...state,
        interval: "daily",
        days: 30,
      };
    case actions.HALF_YEARLY_DATA:
      return {
        ...state,
        interval: "",
        days: 180,
      };

    case actions.YEAR_DATA:
      return {
        ...state,
        interval: "",
        days: 365,
      };

    case actions.SET_ID:
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
}

function DataChart({ curr }) {
  const [{ id, interval, days }, dispatch] = useReducer(reducer, initialState);
  const { data, isLoading, error } = useQuery({
    queryKey: ["chartData", id, interval, days, curr],
    queryFn: () => getChartData({ curr, id, interval, days }),
  });

  console.log(id, interval, days);
  if (isLoading) return <Spinner />;
  if (error) return <p>Oops unable to get data</p>;

  const chartData = data.prices.map((value) => ({
    x: value[0],
    y: value[1].toFixed(2),
  }));

  return (
    <div className="w-full h-full pb-8">
      <div className=" flex items-center justify-between">
        <div className="flex gap-2">
          <ButtonInterval
            interval="1D"
            onClick={() => {
              console.log("1 day data");
              dispatch({
                type: actions.DAY_DATA,
              });
            }}
            selected={days === 1}
          />
          <ButtonInterval
            interval="7D"
            onClick={() => {
              console.log("1 day data");
              dispatch({
                type: actions.WEEK_DATA,
              });
            }}
            selected={days === 7}
          />
          <ButtonInterval
            interval="1M"
            onClick={() => {
              console.log("1 day data");
              dispatch({
                type: actions.MONTH_DATA,
              });
            }}
            selected={days === 30}
          />
          <ButtonInterval
            interval="6M"
            onClick={() => {
              console.log("1 day data");
              dispatch({
                type: actions.HALF_YEARLY_DATA,
              });
            }}
            selected={days === 180}
          />
          <ButtonInterval
            interval="1Y"
            onClick={() => {
              console.log("1 day data");
              dispatch({
                type: actions.YEAR_DATA,
              });
            }}
            selected={days === 365}
          />
        </div>
        <div className="flex items-center justify-center gap-3">
          <select
            value={id}
            onChange={(e) => {
              console.log(e.target.value);
              dispatch({ type: actions.SET_ID, payload: e.target.value });
            }}
            className="px-3 py-1 outline-none border bg-gray-100 border-gray-200 rounded-lg"
          >
            <option value="bitcoin">bitcoin</option>
            <option value="ethereum">ethereum</option>
            <option value="tether">tether</option>
          </select>
        </div>
      </div>
      <Line
        height={500}
        datasetIdKey="id"
        data={{
          labels: chartData.map((val) => {
            let date = new Date(val.x);
            let time =
              date.getHours() > 12
                ? `${date.getHours() - 12}:${date.getMinutes()}PM`
                : `${date.getHours()}:${date.getMinutes()}AM`;
            return days === 1
              ? time
              : date.toLocaleDateString("default", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                });
          }),
          datasets: [
            {
              spanGaps: true,
              id: 1,
              borderColor: "#22d3ee",
              backgroundColor: "#22d3ee",
              pointBorderColor: "transparent",
              pointBorderWidth: 3,
              pointRadius: 2,
              label: `${id} in USD`,
              data: chartData.map((val) => val.y),
            },
          ],
        }}
        options={{
          color: "black",
          responsive: true,
          indexAxis: "x",
          tension: 0.01,
          scales: {
            x: {
              grid: {
                display: false,
                drawBorder: false,
                borderDash: [6],
                border: false,
              },
              ticks: {
                source: "auto",
                maxTicksLimit: 20,
                font: {
                  size: "10px",
                },
                color: "black",
              },
            },
            y: {
              grid: {
                border: false,
                drawBorder: false,
              },
              ticks: {
                color: "black",
              },
            },
          },
          plugins: {
            tooltip: {
              displayColors: false,
              backgroundColor: "gray",
            },
            legend: {
              display: true,
              align: "end",
              labels: {
                color: "black",
                pointStyleWidth: 15,
                usePointStyle: true,
                pointStyle: "circle",
                padding: 2,
              },
            },
            title: {
              display: true,
            },
          },
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}

export default DataChart;
