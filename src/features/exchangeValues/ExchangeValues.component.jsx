import { useQuery } from "react-query";
import { getExchangeValues } from "../../services/apiExchangeValues";
import { useState } from "react";

function ExchangeValues() {
  const { data, isLoading } = useQuery({
    queryKey: ["exchange"],
    queryFn: getExchangeValues,
  });
  const [sellCurrency, setSellCurrency] = useState("Bitcoin");
  const [buyCurrency, setBuyCurrency] = useState("Bitcoin");
  const [sellCurrencyAmount, setSellCurrencyAmount] = useState(0);
  const [buyCurrencyAmount, setbuyCurrencyAmount] = useState(0);
  if (isLoading) return <div>loader...</div>;
  const rates = Object.entries(data.rates);
  // console.log(rates);
  function handleExchange() {
    const sellCurrData = rates.find((rate) => rate[1].name === sellCurrency);
    const buyCurrData = rates.find((rate) => rate[1].name === buyCurrency);
    const amount = Number(sellCurrencyAmount);
    const exchangeValue =
      (buyCurrData[1].value / sellCurrData[1].value) * amount;
    setbuyCurrencyAmount(exchangeValue.toFixed(4));
  }

  function handleReset() {
    setSellCurrency("Bitcoin");
    setBuyCurrency("Bitcoin");
    setSellCurrencyAmount(0);
    setbuyCurrencyAmount(0);
  }
  return (
    <div className="grid grid-cols-3 gap-x-2 gap-y-4 bg-gradient-to-br from-blue-700 to-cyan-500 bg rounded-2xl p-4 md:px-40 lg:px-4">
      <p className="border-b text-red-400 border-b-red-400 text-2xl font-medium  col-span-3">
        Sell
      </p>
      <select
        value={sellCurrency}
        className=" col-span-2 outline-none text-center rounded-lg text-gray-600"
        onChange={(e) => setSellCurrency(e.target.value)}
      >
        {rates.map((rate) => (
          <option key={rate[1].name} value={rate[1].name}>
            {rate[1].name}
          </option>
        ))}
      </select>
      <input
        onChange={(e) => setSellCurrencyAmount(e.target.value)}
        value={sellCurrencyAmount}
        placeholder="value"
        className="outline-none col-span-1 border border-gray-50 rounded-lg px-2 text-gray-600"
      />
      <p className="border-b text-green-400 border-b-green-400 text-2xl font-medium  col-span-3">
        Buy
      </p>
      <select
        value={buyCurrency}
        className="col-span-2 outline-none px-4 text-center rounded-lg text-gray-600"
        onChange={(e) => setBuyCurrency(e.target.value)}
      >
        {rates.map((rate) => (
          <option key={rate[1].name} value={rate[1].name}>
            {rate[1].name}
          </option>
        ))}
      </select>
      <input
        placeholder="value"
        value={buyCurrencyAmount}
        disabled={true}
        className="outline-none border bg-white border-gray-50 rounded-lg px-2 text-gray-600"
      />

      <button
        onClick={handleExchange}
        className=" bg-blue-800 text-blue-50 w-full py-2 rounded-lg hover:bg-blue-900 transition-all hover:"
      >
        Exchange
      </button>
      <button
        onClick={handleReset}
        className=" bg-cyan-800 text-blue-50 w-full py-2 rounded-lg hover:bg-cyan-900 transition-all hover:"
      >
        Reset
      </button>
    </div>
  );
}

export default ExchangeValues;
