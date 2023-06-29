import CheckWeather from "./components/CheckWeather";
import Cities from "./components/Cities";
import Header from "./components/Header";
import React, { useState, useContext } from "react";
import { CitiesContext } from "./store/cities-store";
import FetchCities from "./fetch/fetchFav";
import FavAlert from "./components/FavAlert";

const App: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(true);
  const { cities, loading, notFound } = useContext(CitiesContext);

  FetchCities();

  const toggleFetch = () => {
    setToggle(!toggle);
  };

  const citiesLength = cities.length === 0;

  return (
    <>
      <Header />
      <CheckWeather toggling={toggleFetch} />
      {citiesLength && !loading && (
        <p className="text-lg mt-12 results lg:mt-36">No cities found</p>
      )}
      <FavAlert isFav={notFound}>
        <p className={`results mt-5 ${citiesLength && "mt-[-4.8rem] lg:mt-[-10rem]"}`}>
          City not found
        </p>
      </FavAlert>

      {loading && (
        <div
          className={`flex flex-row items-center justify-center space-x-3 mt-5  ${
            citiesLength && "pt-8 lg:absolute lg:top-0 lg:bottom-0 lg:right-0 lg:left-0 "
          }`}
        >
          <img
            className="h-8 w-8 animate-spin"
            src="/cargando.png"
            alt="loading"
          />
          <p className="text-lg text-center text-blue-800 ">Loading...</p>
        </div>
      )}

      <Cities />
      <button className="hidden">toggle</button>
    </>
  );
};

export default App;
