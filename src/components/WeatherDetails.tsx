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
  max: number;
  min: number;
  windSpeed: number;
  removeCity: () => void;
  newFav: () => void;
  deleteFav: () => void;
}

const WeatherDetails: React.FC<Props> = ({
  name,
  temp,
  feelsLike,
  humidity,
  max,
  min,
  windSpeed,
  weather,
  removeCity,
  newFav,
  deleteFav,
  fav,
}) => {
  const isWhite = localStorage.getItem("white");
  const [thumb, setThumb] = useState<boolean>(false);
  const [white, setWhite] = useState<boolean>(
    isWhite ? JSON.parse(isWhite) : false
  );
  const nodeRef = useRef<HTMLImageElement>(null);

  const thumbsUp = () => {
    setThumb(true);
    setTimeout(() => {
      setThumb(false);
    }, 300);
  };

  const setWhiteMode = () => {
    setWhite(!white);
    localStorage.setItem("white", JSON.stringify(!white));
  };

  return (
    <div className="weatherDetailsDiv">
      <div className="flex flex-row  w-full">
        <div className="w-1/6 pt-1 pl-1">
          <img
            onClick={removeCity}
            className="h-6 w-6"
            src="/boton-eliminar.png"
            alt="delete"
          />
        </div>
        <div className=" text-xl w-4/6 pb-6 text-center  text-white">
          <p className="mt-2">
            <span className=" px-4 bg-blue-500 lg:py-1">{name}</span>
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
        <p className="fav -mt-10 lg:-mt-9">FAVORITES</p>
      </FavAlert>

      <div
        className={`${
          white && classes.bgData
        } w-full mt-2 py-2 pl-3 text-blue-800 text-center lg:pl-0 lg:ml-0`}
      >
        <div className="flex flex-row space-x-3 w-full mb-2">
          <div className=" bg-white w-[48%] ml-1">
            <p>Now: {temp}°</p>
          </div>
          <div className=" bg-white w-[45%]">
            <p>Feels like: {feelsLike}°</p>
          </div>
        </div>
        <div className="flex flex-row space-x-3 w-full">
          <div className="w-[48%] bg-white ml-1">
            <p>
              Max: {max}°<br />
              Min: {min}°
            </p>
          </div>
          <div className="w-[45%] bg-white">
            <p>Humidity: {humidity}%<br /> 
                Wind: {(windSpeed * 3.6).toFixed(1)} k/m
            </p>
          </div>
        </div>
        <div className="text-center flex flex-row items-center">
          <p className="bg-white px-1 ml-1 mt-2 text-blue-800 w-1/2">
            Weather: <br /> {weather[0].toUpperCase() + weather.substring(1)}
          </p>
          <div className="w-1/2 pt-2">
            <button
              onClick={setWhiteMode}
              className={`cursor-auto px-2 py-1 ${
                white ? "bg-white text-blue-800" : "bg-blue-600 text-white"
              }`}
            >
              {white ? "Blue Mode" : "White Mode"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherDetails;
