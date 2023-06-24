import CheckWeather from "./components/CheckWeather";
import Cities from "./components/Cities";
import Header from "./components/Header";
import CityModel from "./models/CityModel";
import React, { useState, useCallback } from "react";

const App: React.FC = () => {
  const [cities, setCities] = useState<CityModel[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(true);

  const weatherRequest = useCallback(
    async (city: string) => {
      setLoading(true);

      const req = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=34afa1ae92e324d4db64606ceed9407f`
      );
      const res = await req.json();
      const id = Math.random() * Math.random();
      const { temp, feels_like, humidity } = res.main;
      const { description } = res.weather[0];
      const newCity = new CityModel(
        id,
        city,
        temp,
        feels_like,
        humidity,
        description
      );
      setCities((prevState) => [newCity, ...prevState]);
      setLoading(false);
    },
    [toggle]
  );

  const removeCityHandler = useCallback(
    (id: number) => {
      setCities(cities.filter((el) => el.id !== id));
    },
    [cities]
  );

  const toggleFetch = () => {
    setToggle(!toggle);
  };

  // const arr = useMemo(() => {
  //   console.log("memo");
  //   return [1, 2, 3, 4];
  // }, []);

  return (
    <>
      <Header />
      <CheckWeather toggling={toggleFetch} onCheckWeather={weatherRequest} />

      {cities.length === 0 && !loading && (
        <p className="text-lg text-center pt-12">No cities found</p>
      )}
      {loading ? <p className="text-lg text-center pt-8">Loading...</p> : ""}
      <Cities
        loading={loading}
        removeCity={removeCityHandler}
        citiesList={cities}
      />
      <button className="hidden">toggle</button>
    </>
  );
};

export default App;
