import CityModel from "../models/CityModel";
import React, { ReactNode, useState } from "react";

type CitiesCtxObj = {
  cities: CityModel[];
  loading: boolean;
  newCity: (city: string) => void;
  removeCity: (id: number) => void;
  newFav: (city: string) => void;
  fromFav: (cities: CityModel[]) => void;
  deleteFav: (cityName: string) => void;
  notLoading: () => void;
};

export const CitiesContext = React.createContext<CitiesCtxObj>({
  cities: [],
  loading: true,
  newCity: () => {},
  removeCity: () => {},
  newFav: () => {},
  fromFav: () => {},
  notLoading: () => {},
  deleteFav: () => {},
});

const CitiesProvider: React.FC<{ children: ReactNode }> = (props) => {
  const [cities, setCities] = useState<CityModel[]>([]);
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
    let wasFavorite = false;

    const filteredCities = cities.filter((el) => {
      return el.cityName !== city;
    });

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
        description,
        wasFavorite
      ),
      ...filteredCities,
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
