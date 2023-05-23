import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ColorsContext } from "../Store/ColorStore";
import { LifeCounterCtx } from "../Store/LifeStore";
import classes from "./FourPlayers.module.css";

const FourPlayers = () => {
  const navigate = useNavigate();

  const { state: colorsState, dispatch: dispatchColors } = useContext(ColorsContext);
  const { state: lifesState, dispatch: dispatchLifes } = useContext(LifeCounterCtx);

  const [colorsStateP1, colorsStateP2, colorsStateP3, colorsStateP4] = colorsState;
  const { color1P1, color2P1 } = colorsStateP1;
  const { color1P2, color2P2 } = colorsStateP2;
  const { color1P3, color2P3 } = colorsStateP3;
  const { color1P4, color2P4 } = colorsStateP4;

  const increment = (player) => {
    player === "p1" && dispatchLifes({ player: "p1", type: "increment" });
    player === "p2" && dispatchLifes({ player: "p2", type: "increment" });
    player === "p3" && dispatchLifes({ player: "p3", type: "increment" });
    player === "p4" && dispatchLifes({ player: "p4", type: "increment" });
  };

  const decrement = (player) => {
    player === "p1" && dispatchLifes({ player: "p1", type: "decrement" });
    player === "p2" && dispatchLifes({ player: "p2", type: "decrement" });
    player === "p3" && dispatchLifes({ player: "p3", type: "decrement" });
    player === "p4" && dispatchLifes({ player: "p4", type: "decrement" });
  };

  const goHome = () => {
    dispatchColors({ type: "reset" });
    navigate("/");
    dispatchLifes({ starting: "start", type: "20" });
  };

  return (
    <div className={`${classes.grid4P}`}>
      {/* /////////////////// PLAYER 1 /////////////////////////////////// */}
      <div
        onClick={decrement.bind(null, "p1")}
        className={`${classes.grid1A}`}
      ></div>
      <div
        onClick={increment.bind(null, "p1")}
        className={`${classes.grid2A} `}
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

      {/* ////////////////////////PLAYER 2///////////////////////////////// */}

      <div
        onClick={increment.bind(null, "p2")}
        className={`${classes.grid1B}`}
      ></div>
      <div
        onClick={decrement.bind(null, "p2")}
        className={`${classes.grid2B}`}
      ></div>
      <p className={`${classes.p2lifes}`}>{lifesState.lifesP2}</p>

      {/* ///////////////////////////PLAYER 3/////////////////////////////////// */}

      <div
        onClick={decrement.bind(null, "p3")}
        className={`${classes.grid1C}`}
      ></div>
      <div
        onClick={increment.bind(null, "p3")}
        className={`${classes.grid2C}`}
      ></div>
      <p className={`${classes.p3lifes}`}>{lifesState.lifesP3}</p>

      {/* ///////////////////////////PLAYER 4/////////////////////////////////// */}

      <div
        onClick={increment.bind(null, "p4")}
        className={`${classes.grid1D}`}
      ></div>
      <div
        onClick={decrement.bind(null, "p4")}
        className={`${classes.grid2D}`}
      ></div>
      <p className={`${classes.p4lifes}`}>{lifesState.lifesP4}</p>
    </div>
  );
};

export default FourPlayers;
