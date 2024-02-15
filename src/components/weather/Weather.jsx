import "./weather.css";
const Weather = (props) => {
  const currentWeather = props.data;
  console.log("currentWeather", currentWeather);
  return (
    <div className="weather-container">
      <div className="weather-details">
        <div className="weather-description">
          <p className="city">
            {props.city} {props.country}
          </p>
          <p className="weather">{currentWeather.weather[0].description}</p>
        </div>
        <img
          src={`icons2/${currentWeather.weather[0].icon}.png`}
          // src="icons2/13n.png"
          alt="weather"
          className="weather-image"
        />
      </div>
      <div className="weather-additional">
        <div className="temperature">
          {Math.round(currentWeather.main.temp - 273.15, 2)}°C
        </div>
        <div className="additional">
          <div className="parameter">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value">
              {Math.round(currentWeather.main.feels_like - 273.15, 2)}°C
            </span>
          </div>
          <div className="parameter">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">
              {currentWeather.wind.speed} m/s
            </span>
          </div>
          <div className="parameter">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">
              {currentWeather.main.humidity} %
            </span>
          </div>
          <div className="parameter">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">
              {currentWeather.main.pressure} hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Weather;
