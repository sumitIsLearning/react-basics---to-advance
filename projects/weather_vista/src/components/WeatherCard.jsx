import React from 'react';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { weatherAtomFamily } from '../store/atoms/weatherAtomFamily';
import { cityAtom } from '../store/atoms/cityAtom';

export const WeatherCard = () => {
  const city = useRecoilValue(cityAtom);
  const weatherValue = useRecoilValueLoadable(weatherAtomFamily(city));

  const formatWeatherDescription = (description) => {
    return description
      .replace(/_/g, " ") // Replace underscores with spaces
      .replace(/\b\w/g, char => char.toUpperCase()); // Capitalize the first letter of each word
  };

  const getWeatherIcon = (weather) => {
    switch (weather) {
      case "clear":
        return "https://www.weatherbit.io/static/img/icons/c01d.png"; // Clear sky icon (Day)
      case "cloudy":
        return "https://www.weatherbit.io/static/img/icons/c02d.png"; // Cloudy icon
      case "rain":
      case "light_rain":
        return "https://www.weatherbit.io/static/img/icons/r01d.png"; // Rainy icon (Day)
      case "snow":
        return "https://www.weatherbit.io/static/img/icons/s01d.png"; // Snow icon (Day)
      case "partly_cloudy":
        return "https://www.weatherbit.io/static/img/icons/c03d.png"; // Partly cloudy icon
      case "fog":
        return "https://www.weatherbit.io/static/img/icons/f01d.png"; // Fog icon
      case "thunderstorm":
        return "https://www.weatherbit.io/static/img/icons/t01d.png"; // Thunderstorm icon (Day)
      case "hail":
        return "https://www.weatherbit.io/static/img/icons/h01d.png"; // Hail icon (Day)
      case "tornado":
        return "https://www.weatherbit.io/static/img/icons/t02d.png"; // Tornado icon (Day)
      case "wind":
        return "https://www.weatherbit.io/static/img/icons/w01d.png"; // Wind icon (Day)
      case "drizzle":
        return "https://www.weatherbit.io/static/img/icons/r02d.png"; // Drizzle icon (Day)
      case "heavy_rain":
        return "https://www.weatherbit.io/static/img/icons/r03d.png"; // Heavy rain icon (Day)
      default:
        return "https://www.weatherbit.io/static/img/icons/c01d.png"; // Default icon (Clear sky)
    }
};


  switch (weatherValue.state) {
    case "hasValue":
      const weather = weatherValue.contents;
      return (
        <div className="cardContainer flex justify-center items-center py-4">
          <div className="card relative flex flex-col items-center justify-between w-56 h-64 p-4 rounded-xl bg-opacity-40 bg-gray-800 border border-white shadow-lg transform transition-transform duration-300 hover:scale-105">
            {/* City Name */}
            <div className="city text-white font-semibold text-2xl">{city.toUpperCase()}</div>
            
            {/* Weather Description */}
            <div className="weather text-gray-300 text-base ">{formatWeatherDescription(weather.weather)}</div>
            
            {/* Weather Icon */}
            <img src={getWeatherIcon(weather.weather)} alt={weather.weather} className="weather-icon w-10 h-10 my-2" />
            
            {/* Temperature */}
            <div className="temp text-white text-4xl mb-2 pl-1">{weather.temperature}°C</div>

            {/* Min/Max */}
            <div className="minmaxContainer w-full flex justify-center gap-8">
              <div className="min flex flex-col items-center gap-1">
                <div className="minHeading text-gray-400 text-xs">Feels Like</div>
                <div className="minTemp text-sm text-gray-300">{weather.feels_like}°C</div>
              </div>
              <div className='border-white border-l-2'></div>
              <div className="max flex flex-col items-center gap-1">
                <div className="maxHeading text-gray-400 text-xs">Humidity</div>
                <div className="maxTemp text-sm text-gray-300">{weather.humidity}%</div>
              </div>
            </div>
          </div>
        </div>
      );

    case "hasError":
      return (
        <div className="cardContainer flex justify-center items-center py-4">
          <div className="card relative flex flex-col items-center justify-between w-56 h-64 p-4 rounded-xl bg-opacity-40 bg-gray-800 border border-white shadow-lg text-red-500">
            <div className="text-lg font-bold">Error fetching data</div>
          </div>
        </div>
      );

    case "loading":
      return (
        <div className="cardContainer flex justify-center items-center py-4">
          <div className="card relative flex flex-col items-center justify-between w-56 h-64 p-4 rounded-xl bg-opacity-40 bg-gray-800 border border-white shadow-lg text-gray-500">
            <div className="text-lg font-bold">Loading...</div>
          </div>
        </div>
      );

    default:
      return (
        <div className="cardContainer flex justify-center items-center py-4">
          <div className="card relative flex flex-col items-center justify-between w-56 h-64 p-4 rounded-xl bg-opacity-40 bg-gray-800 border border-white shadow-lg">
            <div className="text-lg font-semibold text-gray-500">No data available</div>
          </div>
        </div>
      );
  }
};
