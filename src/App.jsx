import Feeds from "./components/Feeds";
import Sidebar from "./components/Sidebar";
import TopReco from "./components/TopReco";

function App() {
  return (
    <div className="grid grid-cols-layout bg-gray-900">
      <Sidebar/>
      <Feeds/>
      <TopReco/>
    </div>
  );
}

export default App;
