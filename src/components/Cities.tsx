import WeatherDetails from "./WeatherDetails";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import classes from "./Cities.module.css";
import React, { useMemo, createRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";

const Cities: React.FC = () => {
  const cities = useSelector((state: RootState) => state.cities.cities);
  const cityRefs = useMemo(
    () => cities.map(() => createRef<HTMLDivElement>()),
    [cities]
  );

  return useMemo(() => {
    return (
      <TransitionGroup className="cities">
        {cities.map((el, i) => (
          <CSSTransition
            nodeRef={cityRefs[i]}
            key={el.id}
            timeout={1000}
            classNames={{
              enter: classes.enter,
              enterActive: classes.enterActive,
              exitActive: classes.exitActive,
            }}
          >
            <div className={i === 0 ? "lg:ml-6" : ""} ref={cityRefs[i]}>
              <WeatherDetails
                name={el.cityName}
                temp={el.temp}
                id={el.id}
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
