import classes from "./TwoPlayers.module.css";
import { useContext } from "react";
import { ColorsContext } from "../Store/ColorStore";
import { LifeCounterCtx } from "../Store/LifeStore";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const TwoPlayers = () => {
  const navigate = useNavigate();
  const { state: colorsState, dispatch: dispatchColors } = useContext(ColorsContext);
  const { state: lifesState, dispatch: dispatchLifes } = useContext(LifeCounterCtx);

  const [colorsStateP1, colorsStateP2] = colorsState;
  const { color1P1, color2P1 } = colorsStateP1;
  const { color1P2, color2P2 } = colorsStateP2;
  const { lifesP1, lifesP2 } = lifesState;

  const decrement = (player) => {
    dispatchLifes({ player: player, type: "decrement" });
  };

  const increment = (player) => {
    dispatchLifes({ player: player, type: "increment" });
  };

  const goHome = () => {
    navigate("/");
    dispatchColors({ type: "reset" });
    dispatchLifes({ starting: "start", type: "20" });
  };

  return (
    <>
      <Sidebar sidebarType="2p">
        <div className={`relative overflow-hidden ${classes.grid}`}>
          <img
            onClick={goHome}
            className={`h-14 w-14 ${classes.centerLogo}`}
            src="/magic-logo-center.png"
            alt="centerLogo"
          />

          <p
            className={`absolute text-center text-white w-fit  h-fit ${classes.rotate}`}
          >
            {lifesP1}
          </p>
          <div
            onClick={decrement.bind(null, "p1")}
            className={`${classes.grid1A} ${color1P1}`}
          ></div>
          <div
            onClick={increment.bind(null, "p1")}
            className={`${classes.grid2A} ${color2P1}`}
          ></div>

          <p
            className={`absolute text-center text-white w-fit h-fit ${classes.place} `}
          >
            {lifesP2}
          </p>
          <div
            onClick={increment.bind(null, "p2")}
            className={`${classes.grid1B} ${color1P2}`}
          ></div>
          <div
            onClick={decrement.bind(null, "p2")}
            className={`${classes.grid2B} ${color2P2}`}
          ></div>
        </div>
      </Sidebar>
    </>
  );
};

export default TwoPlayers;
