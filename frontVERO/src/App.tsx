import "./App.css";
import SearchBar from "./components/SearchBar";
import ListComponent from "./components/ListComponent";
import Map from "./components/Map";
import ExpandedRoute from "./components/ExpandedRoute";
import NavBar from "./components/NavBar";

function App() {

  return (
    <>
      <NavBar />
      <SearchBar />
      <ListComponent />
      <ExpandedRoute />
      <Map />
    </>
  );
}

export default App;
