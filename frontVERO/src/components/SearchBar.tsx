import React, { useEffect, useState } from "react";
import { URL_SEARCH } from "../const";

function SearchBar() {
  const [startInput, setStartInput] = useState('');
  const [arriveInput, setArriveInput] = useState('');
  const [startResults, setStartResults] = useState<Isearch[]>([]);
  const [arriveResults, setArriveResults] = useState<Isearch[]>([]);

  const fetchDataSearch = async (input: string, setResult: { (value: React.SetStateAction<never[]>): void; (value: React.SetStateAction<never[]>): void; (arg0: any): void; }) => {
    const requestBody = {
      name: input,
    };

    const response = await fetch(`${URL_SEARCH}/suggestion`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      const data = await response.json();
      setResult(data);
    } else {
      console.error('Error:', response.statusText);
    }
  }

  const handleStartInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setStartInput(event.target.value);
  }

  const handleArriveInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setArriveInput(event.target.value);
  }

  const handleStartResultClick = (name: React.SetStateAction<string>) => {
    setStartInput(name);
    setStartResults([]);
  }

  const handleArriveResultClick = (name: React.SetStateAction<string>) => {
    setArriveInput(name);
    setArriveResults([]);
  }

  useEffect(() => {
    if (startInput.trim() !== '') {
      fetchDataSearch(startInput, setStartResults);
    } else {
      setStartResults([]);
    }
  }, [startInput]);

  useEffect(() => {
    if (arriveInput.trim() !== '') {
      fetchDataSearch(arriveInput, setArriveResults);
    } else {
      setArriveResults([]);
    }
  }, [arriveInput]);

  return (
    <>
      <form className="p-2 rounded">
        <div className="relative mb-4">
          <input
            type="search"
            id="start-search"
            placeholder="Start"
            value={startInput}
            onChange={handleStartInputChange}
            className="block rounded w-full p-4  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          {startResults.length > 0 && (
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
            className="block  rounded w-full p-4  text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          {arriveResults.length > 0 && (
            <div className="absolute z-1  top-full bg-white rounded shadow-lg w-full">
              {arriveResults.map((result) => (
                <div
                  key={result.id}
                  onClick={() => handleArriveResultClick(result.name)}
                  className="z-40 cursor-pointer p-2 hover:bg-gray-100"
                >
                  {result.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Other form elements */}
        <div className="flex z-1 items-end justify-center">
          <button
            type="submit"
            className="text-white z-1 mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
}

export default SearchBar;
