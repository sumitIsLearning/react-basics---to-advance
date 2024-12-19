import React from "react";
import { WeatherCard } from "./components/WeatherCard";
import { SearchCity } from "./components/SearchCity";

const App = () => {
  return (
    <div className="bg-black flex justify-center gap-52">
      <SearchCity />
      <WeatherCard />
    </div>
  );
};

export default App;
