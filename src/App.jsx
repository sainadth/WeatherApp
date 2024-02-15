import axios from "axios";
import "./App.css";
import Search from "./components/search/Search";
import Weather from "./components/weather/Weather";
import { WEATHER_API_KEY, WEATHER_API_URL, weatherApiOptions } from "./api";
import { useState } from "react";
import ForecastContainer from "./components/weather/Forecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);

  const onSearchChange = async (searchData) => {
    // console.log(searchData);
    const { latitude, longitude } = searchData.value;
    // console.log(latitude, longitude);

    const [city, countryCode] = searchData.label;
    setCity(city);
    setCountry(countryCode);
    // Fetch current Weather
    weatherApiOptions.url = `${WEATHER_API_URL}weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`;
    const currentWeather = await axios.request(weatherApiOptions);
    setCurrentWeather(currentWeather);

    // Fetch forecast weather
    weatherApiOptions.url = `${WEATHER_API_URL}forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`;
    const forecastWeather = await axios.request(weatherApiOptions);
    setForecastWeather(forecastWeather);
    console.log(forecastWeather);
  };
  return (
    <div className="container">
      <Search onSearchChange={onSearchChange} />
      {currentWeather && (
        <Weather data={currentWeather.data} city={city} country={country} />
      )}

      {forecastWeather && <ForecastContainer data={forecastWeather} />}
    </div>
  );
}

export default App;
