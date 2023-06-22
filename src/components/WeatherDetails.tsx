interface Props {
  name: string;
  temp: number;
  feelsLike: number;
  humidity: number;
  weather: string;
  removeCity: () => void;
}

const WeatherDetails: React.FC<Props> = ({
  name,
  temp,
  feelsLike,
  humidity,
  weather,
  removeCity,
}) => {
  return (
    <div
      onDoubleClick={removeCity}
      className={` flex flex-col items-center mt-6 w-3/4 mx-auto border-2 mb-2 border-solid border-blue-300 lg:w-1/5`}
    >
      <p className="pb-2 text-xl">
        {name[0].toUpperCase() + name.substring(1)}
      </p>
      <p>Temperature: {temp}°</p>
      <p>Feels like: {feelsLike}°</p>
      <p>Humidity: {humidity}%</p>
      <p>Weather: {weather}</p>
    </div>
  );
};
export default WeatherDetails;
