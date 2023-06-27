import FavAlert from "./FavAlert";
import classes from "./WeatherDetails.module.css";
import { useState, useRef } from "react";
interface Props {
  name: string;
  temp: number;
  feelsLike: number;
  humidity: number;
  weather: string;
  fav: boolean;
  removeCity: () => void;
  newFav: () => void;
  deleteFav: () => void;
}

const WeatherDetails: React.FC<Props> = ({
  name,
  temp,
  feelsLike,
  humidity,
  weather,
  removeCity,
  newFav,
  deleteFav,
  fav,
}) => {
  const [thumb, setThumb] = useState<boolean>(false);
  const nodeRef = useRef<HTMLImageElement>(null);

  const thumbsUp = () => {
    setThumb(true);
    setTimeout(() => {
      setThumb(false);
    }, 300);
  };

  return (
    <div
      onDoubleClick={removeCity}
      className={` flex flex-col items-center mt-6 w-3/4 mx-auto border-2 mb-2 border-solid border-blue-300 lg:w-1/5`}
    >
      <div className="flex flex-row w-full">
        <div className=" text-xl w-5/6 text-center">
          <p className="w-5/6 ml-auto mt-2">
            {name[0].toUpperCase() + name.substring(1)}
          </p>
        </div>
        <div className="w-1/6 flex flex-col">
          <img
            onClick={() => {
              thumbsUp();
              newFav();
            }}
            className={`h-8 w-8 mt-2 ml-auto mr-2 ${thumb && classes.thumb}`}
            src="/fav.png"
            alt="fav"
          />
          <FavAlert isFav={fav}>
            <img
              ref={nodeRef}
              onClick={() => deleteFav()}
              src="/thumbs-down.png"
              className="h-8 w-8 ml-auto mr-2 mt-2"
            />
          </FavAlert>
        </div>
      </div>

      <FavAlert isFav={fav}>
        <p className="fav -mt-10">FAVORITES</p>
      </FavAlert>
      <p className="mt-4">Temperature: {temp}°</p>
      <p>Feels like: {feelsLike}°</p>
      <p>Humidity: {humidity}%</p>
      <p>Weather: {weather}</p>
    </div>
  );
};
export default WeatherDetails;
