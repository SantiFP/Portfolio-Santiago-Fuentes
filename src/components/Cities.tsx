import React from "react";
import WeatherDetails from "./WeatherDetails";
import CityModel from "../models/CityModel";

const Cities: React.FC<{
  citiesList: CityModel[];
  removeCity: (id: number) => void;
  loading: boolean;
}> = (props) => {

  return props.citiesList.map((el, index) => (
    <WeatherDetails
      name={el.cityName}
      temp={el.temp}
      animation={index === 0 && !props.loading}
      removeCity={() => props.removeCity(el.id)}
      humidity={el.humidity}
      weather={el.weather}
      feelsLike={el.feelsLike}
      key={el.id}
    />
  ));
};

export default Cities;
