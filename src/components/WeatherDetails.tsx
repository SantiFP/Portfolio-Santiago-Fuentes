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
      className={` flex flex-col items-center mt-6 w-3/4 mx-auto border-2 mb-2 pb-4 border-solid border-blue-300 lg:w-1/5`}
    >
      <div className="flex flex-row w-full">
        <div className="w-1/6 pt-1 pl-1">
          <img
            onClick={removeCity}
            className="h-6 w-6"
            src="/boton-eliminar.png"
            alt="delete"
          />
        </div>
        <div className=" text-xl w-4/6 pb-6 text-center">
          <p className="mt-2 ">{name}</p>
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

      <div className="bg-blue-600 w-full mt-2 py-2 text-white">
      <div className="flex flex-row  space-x-5 w-full pl-3 mb-2">
        <p className="w-1/2">Degrees: {temp}°</p>
        <p className="w-1/2">Feels like: {feelsLike}°</p>
      </div>
      <div className="flex flex-row  space-x-5 w-full pl-3">
        <p className="w-1/2 ">Humidity: {humidity}%</p>
        <p className="w-1/2">Weather: {weather}</p>
      </div>
      </div>
     
    </div>
  );
};
export default WeatherDetails;
