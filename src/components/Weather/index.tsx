import { useState } from "react";
import CityForm from "../CityForm";
import WeatherInfo from "../WeatherInfo";
import axios from "axios";
const API_KEY_WEATHER = import.meta.env.VITE_API_KEY_WEATHER;

import styles from "./index.module.scss";
import { ICity, IWeatherData } from "../../helpers/interfaces";

const Weather = () => {
  const [weatherData, setWeatherData] = useState<null | IWeatherData>(null);

  const getWeather = async (e: React.FormEvent<ICity>) => {
    e.preventDefault();
    try {
      const city = e.currentTarget.elements.city.value;
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY_WEATHER}&units=metric`
      );
      setWeatherData(data);
    } catch (error) {
      console.log(error);
      alert("Please enter a valid the name of the city");
    }
  };

  return (
    <div className={styles.weather}>
      <div>
        <CityForm getWeather={getWeather} />
      </div>
      {weatherData && (
        <div className={styles.info}>
          <WeatherInfo weatherData={weatherData} />
        </div>
      )}
    </div>
  );
};

export default Weather;
