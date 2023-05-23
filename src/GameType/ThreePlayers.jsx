import classes from "./ThreePlayers.module.css";
import { useContext } from "react";
import { ColorsContext } from "../Store/ColorStore";
import { useNavigate } from "react-router-dom";
import { LifeCounterCtx } from "../Store/LifeStore";
import Sidebar from '../Sidebar/Sidebar';

const ThreePlayers = () => {
  const navigate = useNavigate();

  const { state:colorsState,dispatch: dispatchColors } = useContext(ColorsContext);
  const { state: lifesState, dispatch: dispatchLifes } = useContext(LifeCounterCtx);

  const [colorsStateP1, colorsStateP2,colorsStateP3] = colorsState;
  const { color1P1, color2P1 } = colorsStateP1;
  const { color1P2, color2P2 } = colorsStateP2;
  const { color1P3, color2P3 } = colorsStateP3;

  const increment = (player) => {
    player === "p1" && dispatchLifes({ player: "p1", type: "increment" });
    player === "p2" && dispatchLifes({ player: "p2", type: "increment" });
    player === "p3" && dispatchLifes({ player: "p3", type: "increment" });
  };

  const decrement = (player) => {
    player === "p1" && dispatchLifes({ player: "p1", type: "decrement" });
    player === "p2" && dispatchLifes({ player: "p2", type: "decrement" });
    player === "p3" && dispatchLifes({ player: "p3", type: "decrement" });
  };

  const goHome = () => {
    dispatchColors({ type: "reset" });
    navigate("/");
    dispatchLifes({ starting: "start", type: "20" });
  };

  return (
    <Sidebar sidebarType='3p'> 
      <div className={`text-center w-full ${classes.common}`}>
        <div
          onClick={decrement.bind(null, "p1")}
          className={`${classes.grid1A} ${
            color1P3 === "bgWhite" ? classes.bgWhite : color1P3
          }`}
        ></div>
        <div
          onClick={increment.bind(null, "p1")}
          className={`${classes.grid2A} ${
            color2P3 === "bgWhite" ? classes.bgWhite : color2P3
          }`}
        ></div>
        <p className={`${classes.p1lifes} pointer-events-none`}>
          {lifesState.lifesP1}
        </p>
        <img
          className={`h-14 w-14 ${classes.centerLogo}`}
          src="/magic-logo-center.png"
          alt="centerLogo"
          onClick={goHome}
        />

        <div
          onClick={decrement.bind(null, "p2")}
          className={`${classes.grid1B} ${
            color1P2 === "bgWhite" ? classes.bgWhite : color1P2
          }`}
        ></div>
        <div
          onClick={increment.bind(null, "p2")}
          className={`${classes.grid2B} ${
            color2P2 === "bgWhite" ? classes.bgWhite : color2P2
          }`}
        ></div>
        <p
          className={`${classes.p2lifes} pointer-events-none 
          ${lifesState.lifesP2 >= 20 && "left-[11.5%] md:left-[21.5%]"}
          ${lifesState.lifesP2 < 20 && lifesState.lifesP2 > 9 && "left-[13.5%] md:left-[22%]"} 
          ${lifesState.lifesP2 <= 9 && "pb-12 top-[52.5%] left-[13.5%] md:pb-6 md:left-[22.5%]"} 
          ${lifesState.lifesP2 < 0 && lifesState.lifesP2 >= -9 && 'left-[8%]  md:left-[21%]'}
          ${lifesState.lifesP2 <= -10 && lifesState.lifesP2 > -18 && 'ml-[-0.5rem] left-[6.5%]  md:ml-[0] md:left-[19.7%]'}
          ${lifesState.lifesP2 <= -18 && 'ml-[-1rem] left-[6.5%] md:ml-[0] md:left-[19.7%]'}`}
        >
          {lifesState.lifesP2}
        </p>

        <div
          onClick={increment.bind(null, "p3")}
          className={`${classes.grid1C} ${
            color1P1 === "bgWhite" ? classes.bgWhite : color1P1
          }`}
        ></div>
        <div
          onClick={decrement.bind(null, "p3")}
          className={`${classes.grid2C} ${
            color2P1 === "bgWhite" ? classes.bgWhite : color2P1
          }`}
        ></div>
        <p
        className={`${classes.p3lifes} pointer-events-none ${lifesState.lifesP3 >= 20 && "right-[11.5%] md:right-[21.5%]"}
        ${lifesState.lifesP3 < 20 && lifesState.lifesP3 > 9 && "right-[13.5%] md:right-[22%]"} 
        ${lifesState.lifesP3 <= 9 && "pb-12 top-[52.5%] right-[13.5%] md:pb-6 md:right-[22.5%]"} 
        ${lifesState.lifesP3 < 0 && lifesState.lifesP3 >= -9 && 'right-[8%]  md:right-[21%]'}
        ${lifesState.lifesP3 <= -10 && lifesState.lifesP3 > -18 && 'mr-[-0.5rem] right-[6.5%]  md:mr-[0] md:right-[19.7%]'}
        ${lifesState.lifesP3 <= -18 && 'mr-[-1rem] right-[6.5%] md:mr-[0] md:right-[19.7%]'}`}
        >
          {lifesState.lifesP3}
        </p>
      </div>

    </Sidebar>
   
  );
};

export default ThreePlayers;
