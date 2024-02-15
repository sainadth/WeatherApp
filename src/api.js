import axios from "axios";

export const geoApiOptions = {
  method: "GET",
  url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
  headers: {
    "X-RapidAPI-Key": "a4e2cd4f06msh4b6cd0907b99db7p18a60ejsnbca7367be04d",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const weatherApiOptions = {
  method: "GET",
  url: "https://api.openweathermap.org/data/2.5/",
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/";
export const WEATHER_API_KEY = "1f044081993860bc282f4c26f0957835";

/* https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key} */
/* weather?lat={lat}&lon={lon}&exclude={part}&appid={API key} */
/* https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}*/
