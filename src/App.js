import logo from "./assets/bitpile.png";
import money from "./assets/money.png";
function App() {
  return (
    <div className="h-screen bg-gray-50">
      <nav className="py-2 px-6 bg-white border-b-2 border-gray-100 mb-12 flex flex-row gap-16">
        <div className="flex flex-row">
          <img src={logo} srcSet="" alt="logo" className="h-12" />
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
      <div className="max-w-7xl mx-auto h-5/6 gap-9 grid grid-cols-3 grid-rows-5 m-6">
        <div className="row-span-3 bg-white col-span-2 shadow-md hover:shadow-lg rounded-2xl transition-all duration-200"></div>
        <div className="row-span-5 bg-white shadow-md hover:shadow-lg rounded-2xl transition-all duration-200"></div>
        <div className=" relative row-span-2 bg-white shadow-md hover:shadow-lg rounded-2xl transition-all duration-200 ">
          <img
            className="absolute  h-40 -bottom-4 -left-12"
            src={money}
            alt=""
          />
        </div>
        <div className="row-span-2 bg-white bg-gradient-to-br from-cyan-400 to-blue-400 bg rounded-2xl"></div>
      </div>
    </div>
  );
}

export default App;
