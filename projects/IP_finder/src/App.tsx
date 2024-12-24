import { useEffect, useState } from "react";
import axios from "axios";

interface IResponseData {
  ip:string,
  latitude:string,
  longitude:string,
}

const App = () => {
  return (
    <div className="m-6">
      <IpViewer />
    </div>
  );
};

function IpViewer() {
  const [city, setCity] = useState<string>("");
  const [responseData, setResponseData] = useState<IResponseData>({
    ip: "127.0.0.1",
    longitude: "longitude",
    latitude: "latitude",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  async function handleFetchData() {
    setLoading(true);
    setError("");
    try {
      const response= await axios.get<IResponseData>(`http://localhost:4000/findIP/${city}`);

      setResponseData(response.data); 
      setLoading(false)
     
    } catch (error: any) {
      console.error(`Error occured while fetching data: ${error.message}`);
       setError("Failed To fetch Data please try again"); 
       setLoading(false)
    }
  }


  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Card Header */}
      <div className="p-6 text-center border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800">GeoInfo Viewer</h2>
      </div>

      {/* Card Body */}
      <div className="p-6 space-y-6">
        {/* Input Box for City */}
        <div className="space-y-2">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-600"
          >
            Enter City
          </label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black transition duration-200"
            placeholder="Type city name..."
          />
        </div>

        {/* IP, Longitude, and Latitude Boxes */}
        <div className="space-y-4">
          {/* IP Box */}
          <div className="flex justify-between items-center p-3 border border-gray-300 rounded-md">
            <label className="text-sm font-medium text-gray-600">
              IP Address
            </label>
            <input
              type="text"
              value={responseData.ip}
              className="w-3/4 p-2 bg-gray-100 text-gray-500 rounded-md cursor-not-allowed"
              disabled
              placeholder="IP will appear here"
            />
          </div>

          {/* Longitude Box */}
          <div className="flex justify-between items-center p-3 border border-gray-300 rounded-md">
            <label className="text-sm font-medium text-gray-600">
              Longitude
            </label>
            <input
              type="text"
              value={responseData.longitude}
              className="w-3/4 p-2 bg-gray-100 text-gray-500 rounded-md cursor-not-allowed"
              disabled
              placeholder="Longitude will appear here"
            />
          </div>

          {/* Latitude Box */}
          <div className="flex justify-between items-center p-3 border border-gray-300 rounded-md">
            <label className="text-sm font-medium text-gray-600">
              Latitude
            </label>
            <input
              type="text"
              value={responseData.latitude}
              className="w-3/4 p-2 bg-gray-100 text-gray-500 rounded-md cursor-not-allowed"
              disabled
              placeholder="Latitude will appear here"
            />
          </div>
        </div>

        {/* Button to Fetch Data */}
        <div className="text-center">
          <button
            onClick={handleFetchData}
            className="px-6 py-3 bg-black text-white rounded-md shadow-md hover:bg-gray-800 transition duration-200 transform hover:scale-105"
            disabled={loading}
          >
            {loading ? "Loading..." : "Fetch Data"}
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mt-4 text-center text-red-500 font-semibold">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
