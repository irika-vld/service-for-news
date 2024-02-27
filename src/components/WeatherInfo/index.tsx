import { IWeatherData } from "../../helpers/interfaces";

interface Props {
  weatherData: IWeatherData;
}

export const WeatherInfo = ({ weatherData }: Props) => {
  return (
    <div>
      <div>
        {weatherData.name}, {weatherData.sys.country}
      </div>
      <div>{weatherData.main.temp} °C</div>
      <div>{weatherData.wind.speed} m/s</div>
      <div>{weatherData.weather[0].description}</div>
    </div>
  );
};

export default WeatherInfo;
