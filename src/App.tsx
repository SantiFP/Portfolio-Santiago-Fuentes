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

  return (
    <>
      <Header />
      <CheckWeather toggling={toggleFetch} />
      {cities.length === 0 && !loading && (
        <p className="text-lg mt-12 results">No cities found</p>
      )}
      <FavAlert isFav={notFound}>
        <p className={`results mt-2 ${cities.length === 0 && "-mt-20"}`}>
          City not found
        </p>
      </FavAlert>

      {loading && (
        <div className="flex flex-row items-center justify-center space-x-3 mt-4">
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
