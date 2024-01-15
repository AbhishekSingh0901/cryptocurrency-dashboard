function ExchangeValues() {
  return (
    <div className="flex flex-col items-center justify-start row-span-2 bg-white bg-gradient-to-br from-blue-700 to-cyan-500 bg rounded-2xl p-3">
      <h2 className=" text-blue-50 text-4xl mb-16">Exchange Rates</h2>
      <div className="flex gap-2 mb-8">
        <p className="bg-red-600 text-gray-50 rounded-lg px-6 py-1 font-thin">
          Sell
        </p>
        <select className=" outline-none px-4 text-center rounded-lg text-gray-600">
          <option>Bitcoin</option>
          <option>Etherium</option>
          <option>Tether</option>
          <option>BNB</option>
          <option>Solana</option>
        </select>
        <input
          placeholder="value"
          className="outline-none border border-gray-50 w-40 rounded-lg px-2 text-gray-600"
        />
      </div>
      <div className="flex gap-2 mb-8">
        <p className="bg-green-600 text-gray-50 rounded-lg px-6 py-1 font-thin">
          Buy
        </p>
        <select className=" outline-none px-4 text-center rounded-lg text-gray-600">
          <option>Bitcoin</option>
          <option>Etherium</option>
          <option>Tether</option>
          <option>BNB</option>
          <option>Solana</option>
        </select>
        <input
          placeholder="value"
          disabled="true"
          className="outline-none border bg-white border-gray-50 w-40 rounded-lg px-2 text-gray-600"
        />
      </div>

      <button className=" bg-blue-800 text-blue-50 w-full py-2 rounded-lg hover:bg-blue-900 transition-all hover:">
        Exchange
      </button>
    </div>
  );
}

export default ExchangeValues;
