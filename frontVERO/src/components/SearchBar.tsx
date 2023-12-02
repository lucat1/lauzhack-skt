import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const currentPosition = `Lat: ${latitude}, Lng: ${longitude}`;

        // Imposta la posizione attuale nell'input "Start"
        document.getElementById("default-search").value = currentPosition;
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };


  return (
    <>
      <form>
        <div className="p-2 rounded">
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div  className={`absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ${
                isFocused ? "hidden" : ""
              }`}>
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />{" "}
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="bg-gray-200 w-full p-3  ps-9 rounded-xl"
              placeholder="Start"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 end-0 flex items-center px-3 bg-blue-500 text-white rounded-r-xl hover:bg-blue-600 focus:outline-none"
              onClick={getLocation}
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} /> {/* Icona */}
            </button>{" "}
          </div>

          <div className="relative mt-2">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="bg-gray-200 w-full p-3  ps-9 rounded-xl "
              placeholder="Arrive"
              required
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          <div className="flex  items-end justify-center mt-2 ">
            <button
              type="submit"
              className="text-white end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium   text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-xl"
              onClick={getLocation}
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default SearchBar;
