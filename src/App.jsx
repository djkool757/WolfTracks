import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MapPage from "./pages/Map";
import SearchResults from "./pages/SearchResults";
import Settings from "./pages/Settings";
import Navbar from "./components/NavbarComp";

function App() {
  console.log("App component rendered");
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;