import WeatherDetails from "./WeatherDetails";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import classes from "./Cities.module.css";
import React, { useMemo } from "react";
import { useContext } from "react";
import { CitiesContext } from "../store/cities-store";

const Cities: React.FC = () => {
  const { cities, removeCity, newFav } = useContext(CitiesContext);

  return useMemo(() => {
    return (
      <TransitionGroup>
        {cities.map((el) => (
          <CSSTransition
            nodeRef={el.ref}
            key={el.id}
            timeout={1000}
            classNames={{
              enter: classes.enter,
              enterActive: classes.enterActive,
              exitActive: classes.exitActive,
            }}
          >
            <div ref={el.ref}>
              <WeatherDetails
                name={el.cityName}
                temp={el.temp}
                removeCity={() => removeCity(el.id)}
                humidity={el.humidity}
                weather={el.weather}
                feelsLike={el.feelsLike}
                key={el.id}
                fav={() => newFav(el.cityName)}
              />
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }, [cities]);
};

export default React.memo(Cities);
