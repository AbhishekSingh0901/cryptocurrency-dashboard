import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
function MarketCap({ data }) {
  return (
    <div className="grid grid-cols-4 gap-2 m-2 p-2 border-b">
      <img src={data.image} className=" h-14" alt={data.name} />
      <div className="col-span-2">
        <h2 className=" text-xl font-medium text-gray-800">{data.name}</h2>
        <p className=" text-sm text-gray-600">
          {" "}
          Market Cap: ${data.market_cap}
        </p>
      </div>

      {data.market_cap_change_percentage_24h > 0 ? (
        <div className="text-green-600 flex justify-between items-center text-xl px-2">
          <FaArrowAltCircleUp className="h-10" />
          <span>{data.market_cap_change_percentage_24h.toFixed(2)}</span>
        </div>
      ) : (
        <div className="text-red-600 flex justify-between items-center text-xl px-2">
          <FaArrowAltCircleDown className="h-10" />
          <span>
            {Math.abs(data.market_cap_change_percentage_24h.toFixed(2))}
          </span>
        </div>
      )}
    </div>
  );
}

export default MarketCap;
