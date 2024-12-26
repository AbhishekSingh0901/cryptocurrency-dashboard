import React from "react";

import DataChart from "../features/chart/Chart.component";
import MarketCapList from "../features/marketCap/MarketCapList.component";
import Portfolio from "../features/portfolio/Portfolio.component";
import ExchangeValues from "../features/exchangeValues/ExchangeValues.component";

function Dashboard({ searchCoin, curr }) {
  return (
    <section className="max-w-7xl mx-auto lg:h-5/6 gap-y-4 md:gap-x-4  grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3 lg:grid-rows-5 m-6 p-2 lg:p-0">
      <div className=" row-span-3 bg-white col-span-1 md:col-span-2 shadow-md hover:shadow-lg rounded-2xl transition-all duration-200 md:p-6 p-3">
        <DataChart curr={curr} />
      </div>
      <MarketCapList curr={curr} searchCoin={searchCoin} />
      <div className="relative col-span-2 lg:col-span-1 w-full row-span-2 h-full bg-white shadow-md hover:shadow-lg rounded-2xl transition-all duration-200 flex justify-center items-center max-h-96">
        <Portfolio curr={curr} />
        <img
          className="absolute h-40 -bottom-4 -left-12 hidden lg:block"
          src="/money.png"
          alt=""
        />
      </div>
      <div className="col-span-2 w-full lg:col-span-1 h-full row-span-2">
        <ExchangeValues />
      </div>
    </section>
  );
}

export default Dashboard;
