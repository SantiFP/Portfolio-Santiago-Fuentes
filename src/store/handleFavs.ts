import CityModel from "../models/CityModel";
import { AppDispatch } from ".";
import { loadingActions } from "./loading";
import { citiesActions } from "./cities";

export const FetchCities = () => {
  return async (dispatch: AppDispatch) => {
    const favCities = localStorage.getItem("cities");
    const citiesFetch = favCities ? JSON.parse(favCities) : [];
    const fetchData = async () => {
      const citiesArray = [];
      dispatch(loadingActions.startLoading());

      const requests = citiesFetch.map((city: string) =>
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=34afa1ae92e324d4db64606ceed9407f`
        ).then((response) => response.json())
      );

      const responses = await Promise.all(requests);
      for (let i = 0; i < responses.length; i++) {
        const id = Math.random() * Math.random();
        const {
          temp,
          feels_like,
          humidity,
          temp_max: max,
          temp_min: min,
        } = responses[i].main;
        const { description } = responses[i].weather[0];
        const { speed } = responses[i].wind;

        const city = new CityModel(
          id,
          citiesFetch[i],
          temp,
          feels_like,
          humidity,
          max,
          min,
          speed,
          description,
          true
        );

        citiesArray.unshift(city.serialize());
      }

      dispatch(citiesActions.fromFav(citiesArray));
      dispatch(loadingActions.stopLoading());
    };

    try {
      await fetchData();
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const newFav = (cityName: string) => {
  return (dispatch: AppDispatch) => {
    const favCities = localStorage.getItem("cities");
    if (!favCities) {
      localStorage.setItem("cities", JSON.stringify([cityName]));
    } else {
      const fromFav = JSON.parse(favCities);
      if (!fromFav.includes(cityName)) fromFav.push(cityName);
      localStorage.setItem("cities", JSON.stringify(fromFav));
    }
    dispatch(citiesActions.newFav(cityName));
  };
};

export const deleteFav = (cityName: string) => {
  return (dispatch: AppDispatch) => {
    const favCities = localStorage.getItem("cities");
    const fromFav = favCities && JSON.parse(favCities);
    const upadatedCities = fromFav.filter((el: string) => el !== cityName);
    localStorage.setItem("cities", JSON.stringify(upadatedCities));
    dispatch(citiesActions.deleteFav(cityName));
  };
};

// for (let i = 0; i < citiesFetch.length; i++) {
//   const req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citiesFetch[i]}&units=metric&appid=34afa1ae92e324d4db64606ceed9407f`);
//   const res = await req.json();
//   responses.push(res)
// }
