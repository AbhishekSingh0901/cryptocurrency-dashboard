// import { useQuery } from "react-query";
import MarketCap from "./MarketCap";
import { getMarketCap } from "../../services/apiMarketCap";
import { useEffect, useState } from "react";

function MarketCapList({ searchCoin, curr }) {
  const [marketData, setMarketData] = useState([]);
  useEffect(
    function () {
      const fetchData = async () => {
        try {
          // Assuming getMarketCap returns a promise
          const data = await getMarketCap(curr);
          setMarketData(data);
        } catch (error) {
          console.error("Error fetching market data:", error);
        }
      };

      fetchData();
    },
    [curr]
  );
  // const { isLoading, data: marketData } = useQuery({
  //   queryKey: ["marketCap"],
  //   queryFn: getMarketCap,
  // });

  const filteredMarketCap = searchCoin
    ? marketData.filter((data) => data.id.includes(searchCoin.toLowerCase()))
    : marketData;
  return (
    <div className="relative h-[400px] lg:h-full col-span-2 lg:col-span-1 lg:row-span-5 bg-white shadow-md hover:shadow-lg rounded-2xl transition-all duration-200 overflow-y-scroll">
      {filteredMarketCap?.map((data) => (
        <MarketCap key={data.id} data={data} />
      ))}
    </div>
  );
}

export default MarketCapList;
