import CheckWeather from "./components/CheckWeather";
import Cities from "./components/Cities";
import Header from "./components/Header";
import CityModel from "./models/CityModel";
import { useState } from "react";

const App: React.FC = () => {
  const [cities, setCities] = useState<CityModel[]>([]);
  const [loading, setLoading] = useState<boolean>(false);


  const weatherRequest = async (city: string) => {
    setLoading(true);
    const req = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=34afa1ae92e324d4db64606ceed9407f`
    );
    const res = await req.json();
    const id = Math.random() * Math.random();
    const { temp, feels_like, humidity } = res.main;
    const { description } = res.weather[0];
    setCities((prevState) => [
      new CityModel(id, city, temp, feels_like, humidity, description),
      ...prevState,
    ]);
    setLoading(false);
  };

  const removeCityHandler = (id: number) => {
    setCities(cities.filter((el) => el.id !== id));
  };

  return (
    <>
      <Header />
      <CheckWeather onCheckWeather={weatherRequest} />
      {loading ? (
        <>
          <p className="text-center text-lg pt-6">Loading...</p>
          <Cities loading={loading} removeCity={removeCityHandler} citiesList={cities} />
        </>
      ) : cities.length !== 0 ? (
        <Cities loading={loading} removeCity={removeCityHandler} citiesList={cities} />
      ) : (
        <p className="text-center text-lg pt-6">No cities checked</p>
      )}
    </>
  );
};

export default App;
