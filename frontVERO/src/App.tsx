import "./App.css";
import SearchBar from "./components/SearchBar";
import ListComponent from "./components/ListComponent";
import Map from "./components/Map";
import ExpandedRoute from "./components/ExpandedRoute";
import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
  const [showRouteClicked, setShowRouteClicked] = useState(false)
  const [searchResult, setSearchResult] = useState<any[] | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  return (
    <>
      <NavBar />
      <SearchBar setSearchResult={setSearchResult} />
      {
        searchResult && (<>
          <ListComponent data={searchResult[selectedIndex]} setShowRouteClicked={setShowRouteClicked} />
          {showRouteClicked ? <Map /> : <ExpandedRoute data={searchResult[selectedIndex]} />}
        </>)
      }
    </>
  );
}

export default App;
