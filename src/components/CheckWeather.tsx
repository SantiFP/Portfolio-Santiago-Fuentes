import { useRef, useState, useEffect } from "react";

interface Props {
  onCheckWeather: (city: string) => void;
}

const CheckWeather: React.FC<Props> = ({ onCheckWeather }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [cityInput, setCityInput] = useState<string>("");

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const checkWeatherHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredCity = inputRef.current?.value;

    if (!cityInput || !enteredCity) {
      return;
    }
    onCheckWeather(cityInput);
    setCityInput("");
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCityInput(e.target.value);
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
      <button className="bg-blue-300 rounded-3xl py-2 px-4">
        Check weather
      </button>
    </form>
  );
};
export default CheckWeather;
