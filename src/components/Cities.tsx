import WeatherDetails from "./WeatherDetails";
import CityModel from "../models/CityModel";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './Cities.css';

const Cities: React.FC<{
  citiesList: CityModel[];
  removeCity: (id: number) => void;
  loading: boolean;
}> = (props) => {

  return (
    <TransitionGroup>
      {props.citiesList.map((el, ) => (
        <CSSTransition
          key={el.id}
          nodeRef={el.ref}
          timeout={1000}
          classNames="item"
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
};

export default Cities;
