import React, { createRef } from "react";
class CityModel {
  id: number;
  cityName: string;
  temp: number;
  feelsLike: number;
  humidity: number;
  weather: string;
  ref: React.RefObject<any>; 

  constructor(
    id: number,
    cityName: string,
    temp: number,
    feelsLike: number,
    humidity: number,
    weather: string,
    
  ){
    this.id = id
    this.cityName = cityName;
    this.temp = temp;
    this.feelsLike = feelsLike;
    this.humidity = humidity;
    this.weather = weather;
    this.ref = createRef();
  };
};

export default CityModel
