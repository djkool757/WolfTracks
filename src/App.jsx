import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MapPage from "./pages/Map";
import SearchResults from "./pages/SearchResults";
import Settings from "./pages/Settings";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <switch>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </switch>
      <Router>
        <Navbar />
      </Router>
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;

