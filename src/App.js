import Navbar from "./ui/Navbar.component";
import Dashboard from "./ui/Dashboard.component";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60000,
    },
  },
});

function App() {
  const [searchCoin, setSearchCoin] = useState("");
  const [curr, setCurr] = useState("usd");
  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen bg-gray-50">
        <Navbar curr={curr} setCurr={setCurr} setSearchCoin={setSearchCoin} />
        <Dashboard curr={curr} searchCoin={searchCoin} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
