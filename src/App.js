import Navbar from "./ui/Navbar.component";
import Dashboard from "./ui/Dashboard.component";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen bg-gray-50">
        <Navbar />
        <Dashboard />
      </div>
    </QueryClientProvider>
  );
}

export default App;
