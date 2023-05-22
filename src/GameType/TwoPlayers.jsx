import classes from "./TwoPlayers.module.css";
import { useContext } from "react";
import { ColorsContext } from "../Store/ColorStore";
import { LifeCounterCtx } from "../Store/LifeStore";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const TwoPlayers = () => {
  const navigate = useNavigate();
  const { state: colorsState, dispatch: dispatchColors } = useContext(ColorsContext);
  const { state: lifes, dispatch: dispatchLifes } = useContext(LifeCounterCtx);

  const [colorsStateP1, colorsStateP2] = colorsState;
  const { color1P1, color2P1 } = colorsStateP1;
  const { color1P2, color2P2 } = colorsStateP2;

  const decrement = (player) => {
    player === "p1" && dispatchLifes({ type: "decrement", player: "p1" });
    player === "p2" && dispatchLifes({ type: "decrement", player: "p2" });
  };

  const increment = (player) => {
    player === "p1" && dispatchLifes({ type: "increment", player: "p1" });
    player === "p2" && dispatchLifes({ type: "increment", player: "p2" });
  };

  const goHome = () => {
    dispatchColors({ type: "reset" });
    navigate("/");
    dispatchLifes({ starting: "start", type: "20" });
  };

  return (
    <>
      <Sidebar sidebarType='2p'>
        <div className={`relative overflow-hidden ${classes.grid}`}>
          <img
            onClick={goHome}
            className={`h-14 w-14 ${classes.centerLogo}`}
            src="/magic-logo-center.png"
            alt="centerLogo"
          />

          <p
            className={`absolute text-center text-white  w-fit  h-fit ${classes.rotate}`}
          >
            {lifes.lifesP1}
          </p>
          <div
            onClick={decrement.bind(null, "p1")}
            className={`${classes.grid1A} ${
              color1P1 === "bgWhite" ? classes.bgWhite : color1P1
            }`}
          ></div>
          <div
            onClick={increment.bind(null, "p1")}
            className={`${classes.grid2A} ${
              color2P1 === "bgWhite" ? classes.bgWhite : color2P1
            }`}
          ></div>

          <p
            className={`absolute text-center text-white w-fit h-fit ${classes.place} `}
          >
            {lifes.lifesP2}
          </p>
          <div
            onClick={increment.bind(null, "p2")}
            className={`${classes.grid1B} ${
              color1P2 === "bgWhite" ? classes.bgWhite : color1P2
            }`}
          ></div>
          <div
            onClick={decrement.bind(null, "p2")}
            className={`${classes.grid2B} ${
              color2P2 === "bgWhite" ? classes.bgWhite : color2P2
            }`}
          ></div>
        </div>
      </Sidebar>
    </>
  );
};

export default TwoPlayers;
