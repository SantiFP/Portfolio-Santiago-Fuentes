import FavAlert from "./FavAlert";
import classes from "./WeatherDetails.module.css";
import { useState } from "react";
import { useContext } from "react";
import { CitiesContext } from "../store/cities-store";
interface Props {
  name: string;
  temp: number;
  feelsLike: number;
  humidity: number;
  weather: string;
  removeCity: () => void;
  fav: () => void
}

const WeatherDetails: React.FC<Props> = ({
  name,
  temp,
  feelsLike,
  humidity,
  weather,
  removeCity,
  fav
}) => {
  const [thumb, setThumb] = useState<boolean>(false);
  const {favPrompt} = useContext(CitiesContext); 

  const thumbsUp = () => {
    setThumb(true);
    setTimeout(() => {
      setThumb(false);
    }, 500);
  };

  return (
    <div
      onDoubleClick={removeCity}
      className={` flex flex-col items-center mt-6 w-3/4 mx-auto border-2 mb-2 border-solid border-blue-300 lg:w-1/5`}
    >
      <div className="flex flex-row w-full">
        <div className="pb-4 text-xl w-5/6 text-center">
          <p className="w-5/6 ml-auto mt-2">
            {name[0].toUpperCase() + name.substring(1)}
          </p>
        </div>
        <div className="w-1/6">
          <img
            onClick={() => {
              thumbsUp();
              fav();
            }}
            className={`h-8 w-8 mt-2 ml-auto mr-2 ${thumb && classes.thumb}`}
            src="/fav.png"
            alt="fav"
          />
        </div>
      </div>
      <div className="pb-4">
        <FavAlert favPrompt={favPrompt} />
      </div>
      <p>Temperature: {temp}°</p>
      <p>Feels like: {feelsLike}°</p>
      <p>Humidity: {humidity}%</p>
      <p>Weather: {weather}</p>
    </div>
  );
};
export default WeatherDetails;
