import "./App.css";
import SearchBar from "./components/SearchBar";
import ListComponent from "./components/ListComponent";
import Map from "./components/Map";
import ExpandedRoute from "./components/ExpandedRoute";

function App() {

  return (
    <>
      <SearchBar />
      <ListComponent />
    <ExpandedRoute/>
      <Map />
    </>
  );
}

export default App;
