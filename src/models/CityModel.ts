import React, { createRef } from "react";
class CityModel {
  id: number;
  cityName: string;
  temp: number;
  feelsLike: number;
  humidity: number;
  weather: string;
  fav: boolean;
  ref: React.RefObject<any>;

  constructor(
    id: number,
    cityName: string,
    temp: number,
    feelsLike: number,
    humidity: number,
    weather: string,
    fav: boolean
  ) {
    this.id = id;
    this.cityName = cityName;
    this.temp = temp;
    this.feelsLike = feelsLike;
    this.humidity = humidity;
    this.weather = weather;
    this.fav = fav;
    this.ref = createRef();
  }
}

export default CityModel;
