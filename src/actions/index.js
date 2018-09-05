import axios from 'axios';

const API_KEY = '29901cf7cbaaeb30db070ffebf8dc7c0';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {
  const url = `${ROOT_URL}&q=${city},in`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request,
  };
};
