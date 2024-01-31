// import { useQuery } from "react-query";
import MarketCap from "./MarketCap";
import { getMarketCap } from "../../services/apiMarketCap";
import { useEffect, useState } from "react";

function MarketCapList({ searchCoin }) {
  const [marketData, setMarketData] = useState([]);
  useEffect(function () {
    const fetchData = async () => {
      try {
        // Assuming getMarketCap returns a promise
        const data = await getMarketCap("usd");
        setMarketData(data);
      } catch (error) {
        console.error("Error fetching market data:", error);
      }
    };

    fetchData();
  }, []);
  // const { isLoading, data: marketData } = useQuery({
  //   queryKey: ["marketCap"],
  //   queryFn: getMarketCap,
  // });

  const filteredMarketCap = searchCoin
    ? marketData.filter((data) => data.id.includes(searchCoin.toLowerCase()))
    : marketData;
  console.log(filteredMarketCap);
  return (
    <div className="relative md:row-span-2 lg:row-span-5 bg-white shadow-md hover:shadow-lg rounded-2xl transition-all duration-200 overflow-y-scroll">
      {filteredMarketCap?.map((data) => (
        <MarketCap key={data.id} data={data} />
      ))}
    </div>
  );
}

export default MarketCapList;
