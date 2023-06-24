import WeatherDetails from "./WeatherDetails";
import CityModel from "../models/CityModel";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import classes from "./Cities.module.css";
import React, { useMemo } from "react";

const Cities: React.FC<{
  citiesList: CityModel[];
  removeCity: (id: number) => void;
  loading: boolean;
}> = (props) => {
  return useMemo(() => {
    return (
      <TransitionGroup>
        {props.citiesList.map((el) => (
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
                removeCity={() => props.removeCity(el.id)}
                humidity={el.humidity}
                weather={el.weather}
                feelsLike={el.feelsLike}
                key={el.id}
              />
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }, [props.citiesList]);
};

export default React.memo(Cities);
