import CityModel from "../models/CityModel";
import { AppDispatch } from ".";
import { loadingActions } from "./loading";
import { citiesActions } from "./cities";

export const newCity = (cityName: string,cities:CityModel[]) => {
  return async (dispatch: AppDispatch) => {
    dispatch(loadingActions.startLoading());
    const req = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=34afa1ae92e324d4db64606ceed9407f`
    );
    const res = await req.json();
    if (res.cod === "404") {
      dispatch(loadingActions.stopLoading());
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
      return el.cityName !== cityName;
    });

    const fromStorage = localStorage.getItem("cities");
    const toArray = fromStorage && JSON.parse(fromStorage);
    toArray && toArray.includes(cityName) && (wasFavorite = true);

    for (const el of cities) {
      if (el.cityName === cityName && el.fav) {
        wasFavorite = true;
      }
    }

    const city = new CityModel(
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
    );

    dispatch(citiesActions.newCity([city.serialize(), ...filteredCities]));

    dispatch(loadingActions.stopLoading());
  };
};
