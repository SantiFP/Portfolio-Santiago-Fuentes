import CityModel from "../models/CityModel";
import React, { ReactNode, useState } from "react";
import { useDispatch } from "react-redux";
import { loadingActions } from "./loading";

type CitiesCtxObj = {
  cities: CityModel[];
  newCity: (city: string) => void;
  removeCity: (id: number) => void;
  newFav: (city: string) => void;
  fromFav: (cities: CityModel[]) => void;
  deleteFav: (cityName: string) => void;
};

export const CitiesContext = React.createContext<CitiesCtxObj>({
  cities: [],
  newCity: () => {},
  removeCity: () => {},
  newFav: () => {},
  fromFav: () => {},
  deleteFav: () => {},
});

const CitiesProvider: React.FC<{ children: ReactNode }> = (props) => {
  const [cities, setCities] = useState<CityModel[]>([]);

  const dispatch = useDispatch();

  const newCity = async (city: string) => {
    dispatch(loadingActions.loadingHandler());
    const req = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=34afa1ae92e324d4db64606ceed9407f`
    );
    const res = await req.json();
    if (res.cod === "404") {
      dispatch(loadingActions.loadingHandler());
      dispatch(loadingActions.notFoundHandler());
      const interval = setInterval(() => {
        dispatch(loadingActions.notFoundHandler());
      }, 1000);
      setInterval(() => {
        clearInterval(interval);
      }, 1000);
      return;
    }
    const id = Math.random() * Math.random();
    const {
      temp,
      feels_like,
      humidity,
      temp_max: max,
      temp_min: min,
    } = res.main;
    const { description } = res.weather[0];
    const { speed } = res.wind;
    let wasFavorite = false;

    const filteredCities = cities.filter((el) => {
      return el.cityName !== city;
    });

    const fromStorage = localStorage.getItem("cities");
    const toArray = fromStorage && JSON.parse(fromStorage);
    toArray && toArray.includes(city) && (wasFavorite = true);

    for (const el of cities) {
      if (el.cityName === city && el.fav) {
        wasFavorite = true;
      }
    }

    setCities([
      new CityModel(
        id,
        res.name,
        temp,
        feels_like,
        humidity,
        max,
        min,
        speed,
        description,
        wasFavorite
      ),
      ...filteredCities,
    ]);

    dispatch(loadingActions.loadingHandler());
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
    setCities(
      cities.map((el) => {
        if (el.cityName === cityName) {
          return { ...el, fav: true };
        } else {
          return el;
        }
      })
    );
  };

  const deleteFav = (cityName: string) => {
    const favCities = localStorage.getItem("cities");
    const fromFav = favCities && JSON.parse(favCities);
    const upadatedCities = fromFav.filter((el: string) => el !== cityName);
    localStorage.setItem("cities", JSON.stringify(upadatedCities));
    setCities(
      cities.map((el) => {
        if (el.cityName === cityName) {
          return { ...el, fav: false };
        } else {
          return el;
        }
      })
    );
  };

  const removeCity = (id: number) => {
    setCities(cities.filter((el) => el.id !== id));
  };

  const fromFav = (favCities: CityModel[]) => {
    setCities(favCities);
  };

  const citiesObj: CitiesCtxObj = {
    cities,
    newFav,
    deleteFav,
    newCity,
    removeCity,
    fromFav,
  };

  return (
    <CitiesContext.Provider value={citiesObj}>
      {props.children}
    </CitiesContext.Provider>
  );
};

export default CitiesProvider;
