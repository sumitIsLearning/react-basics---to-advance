import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebouce"; // Make sure this hook works properly
import { useSetRecoilState } from "recoil";
import { cityAtom } from "../store/atoms/cityAtom";

export const SearchCity = () => {
  const [value, setValue] = useState(""); // Use camelCase for variables
  const debouncedValue = useDebounce(value); // Assuming 500ms debounce time
  const setCity = useSetRecoilState(cityAtom);

  function handleSubmit() {
    setCity(debouncedValue);
    setValue("");
  }

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      {/* Search Container */}
      <div className="flex flex-col items-center space-y-6">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-white mb-4">Search City</h2>

        {/* Search Bar */}
        <div className="relative w-80">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)} // Update value state on change
            type="text"
            placeholder="Enter City Name"
            className="w-full p-2 pl-10 pr-4 rounded-lg bg-gray-800 text-white border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {/* Search Icon (Inside the input) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-3 w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M18.5 10A7.5 7.5 0 1110 2a7.5 7.5 0 018.5 7.5z"
            />
          </svg>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="px-6 py-2 mt-4 bg-blue-600 text-white rounded-full text-lg font-medium transition-all duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Search
        </button>
      </div>
    </div>
  );
};
