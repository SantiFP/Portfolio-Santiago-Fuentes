import WeatherDetails from "./WeatherDetails";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import classes from "./Cities.module.css";
import React, { useMemo } from "react";
import { useContext } from "react";
import { CitiesContext } from "../store/cities-store";

const Cities: React.FC = () => {
  const { cities, removeCity } = useContext(CitiesContext);

  return useMemo(() => {
    return (
      <TransitionGroup className="cities ">
        {cities.map((el,i) => (
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
            <div className={i === 0 ? 'lg:ml-6' : ''} ref={el.ref}>
              <WeatherDetails
                name={el.cityName}
                temp={el.temp}
                removeCity={() => removeCity(el.id)}
                humidity={el.humidity}
                max={el.max}
                min={el.min}
                windSpeed={el.windSpeed}
                weather={el.weather}
                feelsLike={el.feelsLike}
                key={el.id}
                fav={el.fav}
              />
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }, [cities]);
};

export default React.memo(Cities);
