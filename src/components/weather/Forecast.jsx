import Weather from "./Weather";
import "./Forecast.css";

/* const Forecast = ({ forecastWeather }) => {
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="weather-container">
      <div className="weather-details">
        <img
          src={`icons/${forecastWeather.weather[0].icon}.png`}
          alt="weather"
          className="weather-image"
        />
      </div>
      <div className="weather-additional">
        <div className="temperature">
          {Math.round(forecastWeather.main.temp - 273.15, 2)}°C
        </div>
        <div className="additional">
          <div className="parameter">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value">
              {Math.round(forecastWeather.main.feels_like - 273.15, 2)}°C
            </span>
          </div>
          <div className="parameter">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">
              {forecastWeather.wind.speed} m/s
            </span>
          </div>
          <div className="parameter">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">
              {forecastWeather.main.humidity} %
            </span>
          </div>
          <div className="parameter">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">
              {forecastWeather.main.pressure} hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}; */

const ForecastContainer = (props) => {
  const forecastWeather = props.data.data.list;
  console.log(forecastWeather);

  const dailyForecasts = forecastWeather.filter((item) => {
    return item.dt_txt.includes("12:00:00");
  });
  console.log(dailyForecasts);

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <>
      <div className="forecast-header">Next 5 days Forecast Data</div>
      <div className="forecast-container">
        {dailyForecasts.map((ele) => {
          const date = new Date(ele.dt_txt);
          return (
            <Weather
              key={ele.dt}
              data={ele}
              city={date.getDate()}
              country={dayNames[date.getDay()]}
            />
          );
        })}
      </div>
    </>
  );
};
export default ForecastContainer;
