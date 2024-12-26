function Navbar({ setSearchCoin, curr, setCurr }) {
  return (
    <nav className="py-2 px-6 bg-white border-b-2 border-gray-100 mb-10 flex flex-row gap-3 md:gap-16">
      <div className="flex flex-row justify-start items-center">
        <img src="/bitpile.png" srcSet="" alt="logo" className=" h-9 md:h-12" />
        <h2 className="hidden md:flex p-2 text-lg md:text-2xl font-medium z-10 -ml-4">
          Crypto<span className="text-cyan-500 ">Track</span>
        </h2>
      </div>
      <div className="flex flex-row justify-between gap-2 w-full">
        <input
          type="text"
          className="rounded-full px-2 md:px-4 py-2 bg-gray-100 active:outline-1 outline-cyan-400"
          placeholder="Seach by coin"
          onChange={(e) => setSearchCoin(e.target.value)}
        />
        <select
          value={curr}
          onChange={(e) => setCurr(e.target.value)}
          className=" rounded-full px-6 py-2  bg-gray-100"
        >
          <option value="usd">USD</option>
          <option value="inr">INR</option>
          <option value="eur">EUR</option>
          <option value="jpy">JPY</option>
        </select>
      </div>
    </nav>
  );
}

export default Navbar;
