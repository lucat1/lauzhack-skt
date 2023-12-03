import "./App.css";
import SearchBar from "./components/SearchBar";
import ListComponent from "./components/ListComponent";
import Map from "./components/Map";
import ExpandedRoute from "./components/ExpandedRoute";
import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
  const [showRouteClicked,setShowRouteClicked] = useState(false)
  const [showSearchResult,setShowSearchResult] = useState(false)
  const [searchResult,setSearchResult] = useState()
  return (
    <>
    <NavBar />
      <SearchBar setSearchResult={setSearchResult} setShowSearchResult={setShowSearchResult}/>
      {
        showSearchResult ? <ListComponent setShowRouteClicked={setShowRouteClicked}/> : <Map />
      }
      {
        showRouteClicked && <ExpandedRoute/>
      }
    </>
  );
}

export default App;
