import CheckWeather from "./components/CheckWeather";
import Cities from "./components/Cities";
import Header from "./components/Header";
import React, { useState, useContext } from "react";
import { CitiesContext } from "./store/cities-store";
import FetchCities from "./fetch/fetchFav";

const App: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(true);
  const { cities, loading } = useContext(CitiesContext);

  FetchCities();

  const toggleFetch = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Header />
      <CheckWeather toggling={toggleFetch} />
      {cities.length === 0 && !loading && (
        <p className="text-lg text-center pt-12">No cities found</p>
      )}
      {loading && <p className="text-lg text-center pt-8">Loading...</p>}
      <Cities />
      <button className="hidden">toggle</button>
    </>
  );
};

export default App;
