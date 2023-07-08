import React, { useRef, useState, useEffect } from "react";
import classes from "./CheckWeather.module.css";
import { AppDispatch } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { newCity } from "../store/handleNewCity";
import { RootState } from "../store";

interface Props {
  toggling: () => void;
}

const CheckWeather: React.FC<Props> = ({ toggling }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  const cities = useSelector((state:RootState) => state.cities.cities)
  const [cityInput, setCityInput] = useState<string>("");
  const [isUpscaled, setIsUpscaled] = useState<boolean>(false);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);  

  const checkWeatherHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredCity = inputRef.current?.value;

    if (!cityInput || !enteredCity) {
      return;
    }

    let words = enteredCity.split(" ");
    let capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    dispatch(newCity(capitalizedWords.join(" ").trim(),cities))

    setCityInput("");
  };

  const handleClick = () => {
    setIsUpscaled(!isUpscaled);
    setTimeout(() => {
      setIsUpscaled(false);
    }, 300);
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCityInput(e.target.value);
  };

  const togglingHandler = () => {
    toggling();
  };

  return (
    <form onSubmit={checkWeatherHandler}>
      <div className="flex flex-col items-center pt-6 space-y-3 lg:space-y-0 ">
        <div className="choose">
          <label className="text-2xl bg-blue-500 text-white px-2 py-1">
            Choose city
          </label>
          <input
            value={cityInput}
            onChange={inputHandler}
            autoFocus
            ref={inputRef}
            className="outline-none bg-blue-200 py-2 pl-2"
            type="text"
          />
        </div>

        <div className="pt-2 lg:pt-3">
          <button
            onClick={() => {
              togglingHandler();
              handleClick();
            }}
            className={`buttonCheck ${isUpscaled ? classes.upscaled : ""} ${
              classes.check
            } `}
          >
            CHECK WEATHER
          </button>
        </div>
      </div>
    </form>
  );
};
export default CheckWeather;
