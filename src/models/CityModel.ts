
class CityModel {
  id: number;
  cityName: string;
  temp: number;
  feelsLike: number;
  humidity: number;
  weather: string;

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
  };
};

export default CityModel
