class CityModel {
  id: number;
  cityName: string;
  temp: number;
  feelsLike: number;
  humidity: number;
  weather: string;
  max: number;
  min: number;
  windSpeed: number;
  fav: boolean;

  constructor(
    id: number,
    cityName: string,
    temp: number,
    feelsLike: number,
    humidity: number,
    max: number,
    min: number,
    windSpeed: number,
    weather: string,
    fav: boolean
  ) {
    this.id = id;
    this.cityName = cityName;
    this.temp = temp;
    this.feelsLike = feelsLike;
    this.humidity = humidity;
    this.max = max;
    this.min = min;
    this.windSpeed = windSpeed;
    this.weather = weather;
    this.fav = fav;
  }

  serialize() {
    return {
      id: this.id,
      cityName: this.cityName,
      temp: this.temp,
      feelsLike: this.feelsLike,
      humidity: this.humidity,
      max: this.max,
      min: this.min,
      windSpeed: this.windSpeed,
      weather: this.weather,
      fav: this.fav,
    };
  }
}

export default CityModel;
