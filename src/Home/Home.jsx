import classes from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { useContext,useState } from "react";
import { LifeCounterCtx } from "../Store/LifeStore";

let selectedLifes = 20;

const Home = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(LifeCounterCtx);
  const [selectedPlayers,setSelectedPlayers] = useState(2);

  const startPlaying = () => {
    selectedPlayers === 2 && navigate("twoplayers");
    selectedPlayers === 3 && navigate("threeplayers");
    selectedPlayers === 4 && navigate("fourplayers");
  };

  const playersSelectionHandler = (e) => {
    setSelectedPlayers(Number(e.target.value));
  };

  const lifesSelectionHandler = (e) => {
    selectedLifes = Number(e.target.value);
    selectedLifes === 20 && dispatch({ type: "20",starting: 'start' });
    selectedLifes === 30 && dispatch({ type: "30",starting: 'start' });
    selectedLifes === 40 && dispatch({ type: "40" ,starting: 'start'});
  };

  return (
    <>
      <section className={`h-screen ${classes.background}`}>
        <header className="h-1/3">
          <div className="flex justify-center items-center  h-full">
            <div className="h-full  w-full flex items-center">
              <img
                className={`${classes.magicLogo} mx-auto pt-12`}
                src="/magic-logo.png"
                alt="magicLogo"
              />
            </div>
          </div>
        </header>

        <div
          className={`${classes.select} h-1/3 flex flex-col justify-center items-center space-y-2 pb-6`}
        >
          <p className="text-lg text-white">Total de jugadores</p>
          <select
            onChange={playersSelectionHandler}
            className={`${classes.arrow} py-1 text-2xl`}
          >
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <p className="text-lg text-white">Total de vidas inicial</p>
          <select
            onChange={lifesSelectionHandler}
            className={`${classes.arrow} py-1 text-2xl`}
          >
            <option>20</option>
            <option>30</option>
            <option>40</option>
          </select>
          <div className="pt-2">
            <button
              onClick={startPlaying}
              className=" border-2 cursor-default bg-white border-solid px-4 py-2 rounded-2xl text-xl "
            >
              Comenzar
            </button>
          </div>
        </div>

        <footer className="h-1/3 relative overflow-hidden">
          <img
            className={`${classes.magicElements} h-full mx-auto`}
            src="/magic-elements.png"
            alt="elements"
          />
          <div className={classes.white}></div>
        </footer>
      </section>
    </>
  );
};

export default Home;
