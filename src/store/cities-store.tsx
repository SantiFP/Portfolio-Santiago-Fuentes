import CityModel from "../models/CityModel";
import React, { ReactNode, useState } from "react";

type CitiesCtxObj = {
  cities: CityModel[];
  favPrompt: boolean;
  loading: boolean;
  newCity: (city: string) => void;
  removeCity: (id: number) => void;
  newFav: (city: string) => void;
  fromFav: (cities: CityModel[]) => void;
  notLoading: () => void;
};

export const CitiesContext = React.createContext<CitiesCtxObj>({
  cities: [],
  favPrompt: false,
  loading: true,
  newCity: () => {},
  removeCity: () => {},
  newFav: () => {},
  fromFav: () => {},
  notLoading: () => {},
});

const CitiesProvider: React.FC<{ children: ReactNode }> = (props) => {
  const [cities, setCities] = useState<CityModel[]>([]);
  const [favPrompt, setFavPrompt] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const notLoading = () => {
    setLoading(false);
  };

  const newCity = async (city: string) => {
    setLoading(true);
    const req = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=34afa1ae92e324d4db64606ceed9407f`
    );
    const res = await req.json();
    const id = Math.random() * Math.random();
    const { temp, feels_like, humidity } = res.main;
    const { description } = res.weather[0];
    setCities((prevState) => [
      new CityModel(id, res.name, temp, feels_like, humidity, description),
      ...prevState,
    ]);
    setLoading(false);
  };

  const newFav = (cityName: string) => {
    const favCities = localStorage.getItem("cities");
    if (!favCities) {
      localStorage.setItem("cities", JSON.stringify([cityName]));
    } else {
      const fromFav = JSON.parse(favCities);
      if (!fromFav.includes(cityName)) fromFav.push(cityName);
      localStorage.setItem("cities", JSON.stringify(fromFav));
    }
    setFavPrompt(true);
    setTimeout(() => {
      setFavPrompt(false);
    }, 1000);
  };

  const removeCity = (id: number) => {
    setCities(cities.filter((el) => el.id !== id));
  };

  const fromFav = (favCities: CityModel[]) => {
    setCities(favCities);
  };

  const citiesObj: CitiesCtxObj = {
    cities,
    favPrompt,
    newFav,
    newCity,
    removeCity,
    fromFav,
    loading,
    notLoading,
  };

  return (
    <CitiesContext.Provider value={citiesObj}>
      {props.children}
    </CitiesContext.Provider>
  );
};

export default CitiesProvider;
