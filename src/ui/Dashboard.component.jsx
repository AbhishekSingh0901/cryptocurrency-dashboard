import React from "react";

import DataChart from "../features/chart/Chart.component";
import MarketCapList from "../features/marketCap/MarketCapList.component";
import Portfolio from "../features/portfolio/Portfolio.component";
import ExchangeValues from "../features/exchangeValues/ExchangeValues.component";

function Dashboard({ searchCoin }) {
  return (
    <section className="max-w-7xl mx-auto h-5/6 md:gap-4 gap-9 grid grid-cols-3 grid-rows-5 m-6">
      <div className=" row-span-3 bg-white col-span-2 shadow-md hover:shadow-lg rounded-2xl transition-all duration-200 p-6">
        <DataChart />
      </div>
      <MarketCapList searchCoin={searchCoin} />
      <div className=" relative row-span-2 bg-white shadow-md hover:shadow-lg rounded-2xl transition-all duration-200 flex justify-center items-center">
        <Portfolio />
        <img
          className="absolute h-40 -bottom-4 -left-12"
          src="/money.png"
          alt=""
        />
      </div>
      <ExchangeValues />
    </section>
  );
}

export default Dashboard;
