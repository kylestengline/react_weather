import axios from 'axios';
import WEATHER_API from '../../keys';

export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API}`; 

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  //take url we crafted, and make an ajax get request.
  //this returns a promise
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
//payload is an optional property that goes along with actions 
//that can contain some additional data that describes this particular action

//backticks are ES6 syntax
//these are called template strings.
//they take one string and a js variable, 
//it injects that js variable into the string
