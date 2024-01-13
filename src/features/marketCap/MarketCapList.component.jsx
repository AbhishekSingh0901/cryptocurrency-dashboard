import { useQuery } from "react-query";
import MarketCap from "./MarketCap";
import { getMarketCap } from "../../services/apiMarketCap";

function MarketCapList() {
  const { isLoading, data: marketData } = useQuery({
    queryKey: ["marketCap"],
    queryFn: getMarketCap,
    staleTime: 60000,
  });
  console.log(marketData);
  return (
    <div className="relative row-span-5 bg-white shadow-md hover:shadow-lg rounded-2xl transition-all duration-200 overflow-y-scroll">
      {!isLoading &&
        marketData?.map((data) => <MarketCap key={data.id} data={data} />)}
    </div>
  );
}

export default MarketCapList;