import React, { useRef, useState, useEffect } from "react";
import { useContext } from "react";
import { CitiesContext } from "../store/cities-store";

interface Props {
  toggling: () => void;
}

const CheckWeather: React.FC<Props> = ({ toggling }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [cityInput, setCityInput] = useState<string>("");

  const { newCity } = useContext(CitiesContext);

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
    var capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    newCity(capitalizedWords.join(' '));

    setCityInput("");
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCityInput(e.target.value);
  };

  const togglingHandler = () => {
    toggling();
  };
  return (
    <form
      onSubmit={checkWeatherHandler}
      className="flex flex-col items-center pt-6 space-y-3"
    >
      <label className="text-2xl">Choose city</label>
      <input
        value={cityInput}
        onChange={inputHandler}
        autoFocus
        ref={inputRef}
        className="outline-none bg-blue-200 py-2 pl-2"
        type="text"
      />
      <button
        onClick={togglingHandler}
        className="bg-blue-300 rounded-3xl py-2 px-4 cursor-auto"
      >
        Check weather
      </button>
    </form>
  );
};
export default CheckWeather;
