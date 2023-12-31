import React, { useEffect, useState } from "react";
import { URL_SEARCH } from "../const";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import DataTime from "./DateTime";

interface Iprops {
  setSearchResult: any
}

function SearchBar({ setSearchResult }: Iprops) {
  const [startInput, setStartInput] = useState("");
  const [arriveInput, setArriveInput] = useState("");
  const [startResults, setStartResults] = useState<Isearch[]>([]);
  const [arriveResults, setArriveResults] = useState<Isearch[]>([]);
  const [currentLocation, setCurrentLocation] = useState<[number, number] | null>(null);
  const [selectedArrival, setSelectedArrival] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState('');

  const saveSearchResult = async () => {
    console.log("test --> ", startResults)
    console.log("test2 --> ", arriveResults)
    console.log("test3 --> ", selectedDate)

    const requestBody = {
      origin: currentLocation ? [currentLocation[1], currentLocation[0]] : [startResults[0].long, startResults[0].lat],
      destination: selectedArrival,
      time: selectedDate
    };

    const response = await fetch(`${URL_SEARCH}/plan`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data)
      setSearchResult(data);
    } else {
      console.error("Error:", response.statusText);
    }
  }

  // FETCH DATA FROM SEARCH STATION
  const fetchDataSearch = async (
    input: string,
    setResult: {
      (value: React.SetStateAction<Isearch[]>): void;
      (value: React.SetStateAction<Isearch[]>): void;
      (arg0: any): void;
    }
  ) => {
    const requestBody = {
      name: input,
    };

    const response = await fetch(`${URL_SEARCH}/suggestion`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      const data = await response.json();
      setResult(data);
    } else {
      console.error("Error:", response.statusText);
    }
  };

  const handleStartInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setStartInput(event.target.value);
    setCurrentLocation(null);
  };

  const handleArriveInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setArriveInput(event.target.value);
  };

  const handleStartResultClick = (name: React.SetStateAction<string>) => {
    setStartInput(name);
    setStartResults([]);
  };

  const handleArriveResultClick = (name: React.SetStateAction<string>, id: string) => {
    setArriveInput(name);
    setSelectedArrival(id);
    setArriveResults([]);
  };

  useEffect(() => {
    if (startInput.trim() !== "") {
      fetchDataSearch(startInput, setStartResults);
    } else {
      setStartResults([]);
    }
  }, [startInput]);

  useEffect(() => {
    if (arriveInput.trim() !== "") {
      fetchDataSearch(arriveInput, setArriveResults);
    } else {
      setArriveResults([]);
    }
  }, [arriveInput]);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setCurrentLocation([latitude, longitude]);
        setStartInput("geoloc");
        console.log("done dio cane")
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <>
      <form className="p-2 rounded">
        <div className="relative mb-4">
          <input
            type="search"
            id="start-search"
            placeholder={currentLocation ? "Your location" : "Start"}
            value={!currentLocation ? startInput : ""}
            onChange={handleStartInputChange}
            className="bg-gray-200 w-full p-3 ps-9 rounded-xl"
            required
          />{" "}
          <button
            type="button"
            className="absolute inset-y-0 end-0 flex items-center px-3 bg-red-600 text-white rounded-r-xl hover:bg-red-600 focus:outline-none"
            onClick={getLocation}
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </button>{" "}
          {startResults.length > 1 && (
            <div className="absolute top-full z-40 bg-white rounded shadow-lg w-full">
              {startResults.map((result) => (
                <div
                  key={result.id}
                  onClick={() => handleStartResultClick(result.name)}
                  className="cursor-pointer p-2 hover:bg-gray-100"
                >
                  {result.name}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="relative">
          <input
            type="search"
            id="arrive-search"
            placeholder="Arrive"
            value={arriveInput}
            onChange={handleArriveInputChange}
            className="bg-gray-200 w-full p-3  ps-9 rounded-xl"
            required
          />

          {arriveResults.length > 1 && (
            <div className="absolute z-1  top-full bg-white rounded shadow-lg w-full">
              {arriveResults.map((result) => (
                <div
                  key={result.id}
                  onClick={() => handleArriveResultClick(result.name, result.id)}
                  className="z-40 cursor-pointer p-2 hover:bg-gray-100"
                >
                  {result.name}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center justify-center ">
          <DataTime setSelectedDate={setSelectedDate} selectedDate={selectedDate}></DataTime>
          <button
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium   text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 rounded-xl disabled:bg-slate-300 hover:disabled:bg-slate-300"
            disabled={startInput.trim() == "" || arriveInput.trim() == ""}
            onClick={async (e) => { e.preventDefault(); await saveSearchResult() }}
          >
            Search
          </button>{" "}
        </div>
      </form>
    </>
  );
}

export default SearchBar;
