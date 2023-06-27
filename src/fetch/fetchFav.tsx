import { useEffect, useContext } from "react";
import CityModel from "../models/CityModel";
import { CitiesContext } from "../store/cities-store";

const FetchCities = () => {
  const { fromFav,notLoading } = useContext(CitiesContext);

  const favCities = localStorage.getItem("cities");
  const citiesFetch = favCities ? JSON.parse(favCities) : [];

  useEffect(() => {
    let isMounted = true; 
    const fetchData = async () => {
      const citiesArray = [];
      const requests = citiesFetch.map((city: string) =>
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=34afa1ae92e324d4db64606ceed9407f`
        ).then((response) => response.json())
      );

      const responses = await Promise.all(requests);

      if (isMounted) {
        for (let i = 0; i < responses.length; i++) {
          const id = Math.random() * Math.random();
          const { temp, feels_like, humidity,temp_max:max,temp_min:min } = responses[i].main;
          const { description } = responses[i].weather[0];
          citiesArray.unshift(
            new CityModel(
              id,
              citiesFetch[i],
              temp,
              feels_like,
              humidity,
              max,
              min,
              description,
              true
            )
          );
        }

        fromFav(citiesArray);
        notLoading()
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);
};

export default FetchCities;

// for (let i = 0; i < citiesFetch.length; i++) {
//   const req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citiesFetch[i]}&units=metric&appid=34afa1ae92e324d4db64606ceed9407f`);
//   const res = await req.json();
//   responses.push(res)
// }
