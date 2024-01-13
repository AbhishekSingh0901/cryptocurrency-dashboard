function Navbar() {
  return (
    <nav className="py-2 px-6 bg-white border-b-2 border-gray-100 mb-12 flex flex-row gap-16">
      <div className="flex flex-row">
        <img src="/bitpile.png" srcSet="" alt="logo" className="h-12" />
        <h2 className="p-2 text-2xl font-medium z-10 -ml-4">
          Crypto<span className="text-cyan-500 ">Track</span>
        </h2>
      </div>
      <div className="flex flex-row justify-between w-full">
        <input
          type="text"
          className="rounded-full px-4 py-2 bg-gray-100"
          placeholder="Seach by coin"
        />
        <select className=" rounded-full px-6 py-2  bg-gray-100">
          <option>USD</option>
          <option>INR</option>
          <option>EUR</option>
          <option>JPY</option>
        </select>
      </div>
    </nav>
  );
}

export default Navbar;
