import './App.css'
import SearchBar from './components/SearchBar'
import { useEffect, useState } from 'react';
import { API_KEY_MAPS } from './const';
import ListComponent from './components/ListComponent';


function App() {
  const [token, setToken] = useState<string | null>(null);

  const fetchToken = async () => {
    try {
      const response = await fetch(`https://journey-maps-apikey.api.sbb.ch/path?api_key=${API_KEY_MAPS}`, {
        method: 'GET',
      });

      const data = await response.json();
      console.log(data)
      setToken(data.access_token);
    } catch (error) {
      console.error('Error fetching token:', error);
    }
  };




  return (
    <>
    <SearchBar />
    <ListComponent />
    </>
  )
}

export default App