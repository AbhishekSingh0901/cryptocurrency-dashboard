import Navbar from "./ui/Navbar.component";
import Dashboard from "./ui/Dashboard.component";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";

const queryClient = new QueryClient();

function App() {
  const [searchCoin, setSearchCoin] = useState("");
  console.log(searchCoin);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen bg-gray-50">
        <Navbar setSearchCoin={setSearchCoin} />
        <Dashboard searchCoin={searchCoin} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
