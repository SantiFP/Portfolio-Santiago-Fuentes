import classes from "./ThreePlayers.module.css";
import { useContext } from "react";
import { ColorsContext } from "../Store/ColorStore";
import { useNavigate } from "react-router-dom";
import { LifeCounterCtx } from "../Store/LifeStore";

const ThreePlayers = () => {
  const navigate = useNavigate();

  const { dispatch: dispatchColors } = useContext(ColorsContext);
  const { state: lifesState, dispatch: dispatchLifes } =
    useContext(LifeCounterCtx);

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
    <div className={`text-center w-full ${classes.common}`}>
      <div
        onClick={decrement.bind(null, "p1")}
        className={`${classes.grid1A}`}
      ></div>
      <div
        onClick={increment.bind(null, "p1")}
        className={`${classes.grid2A}`}
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
        className={classes.grid1B}
      ></div>
      <div
        onClick={increment.bind(null, "p2")}
        className={classes.grid2B}
      ></div>
      <p
        className={`${classes.p2lifes} pointer-events-none ${
          lifesState.lifesP2 < 20 && "left-[13.5%]"
        } ${lifesState.lifesP2 <= 9 && "pb-12 top-[20%]"}`}
      >
        {lifesState.lifesP2}
      </p>

      <div
        onClick={increment.bind(null, "p3")}
        className={classes.grid1C}
      ></div>
      <div
        onClick={decrement.bind(null, "p3")}
        className={classes.grid2C}
      ></div>
      <p
        className={`${classes.p3lifes} pointer-events-none ${
          lifesState.lifesP3 < 20 && "right-[13.5%]"
        } ${lifesState.lifesP3 <= 9 && "pb-12 top-[50%]"}`}
      >
        {lifesState.lifesP3}
      </p>
    </div>
  );
};

export default ThreePlayers;
