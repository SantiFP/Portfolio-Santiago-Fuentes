import classes from "./TwoPlayers.module.css";
import { useContext } from "react";
import { LifesContext } from "../Store/store";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const reducer = (state, action) => {
  if (action.player === "p1") {
    switch (action.type) {
      case "increment":
        return { lifesP2: state.lifesP2, lifesP1: state.lifesP1 + 1 };
      case "decrement":
        return { lifesP2: state.lifesP2, lifesP1: state.lifesP1 - 1 };
      default:
        throw new Error();
    }
  }
  if (action.player === "p2") {
    switch (action.type) {
      case "increment":
        return { lifesP1: state.lifesP1, lifesP2: state.lifesP2 + 1 };
      case "decrement":
        return { lifesP1: state.lifesP1, lifesP2: state.lifesP2 - 1 };
      default:
        throw new Error();
    }
  }
};

const TwoPlayers = () => {
  const { state, dispatch: dispatchCtx } = useContext(LifesContext);
  const navigate = useNavigate();

  const initialLifes = {
    lifesP1: state.lifes,
    lifesP2: state.lifes,
  };

  const [playersLifes, dispatch] = useReducer(reducer, initialLifes);

  const decrement = (player) => {
    player === "p1" && dispatch({ type: "decrement", player: "p1" });
    player === "p2" && dispatch({ type: "decrement", player: "p2" });
  };

  const increment = (player) => {
    player === "p1" && dispatch({ type: "increment", player: "p1" });
    player === "p2" && dispatch({ type: "increment", player: "p2" });
  };

  const goHome = () => {
    dispatchCtx({ type: "20" });
    navigate("/");
  };

  return (
    <>
      <Sidebar >
        <div className={`relative bg-red-500 ${classes.grid}`}>
          <img
            onClick={goHome}
            className={`h-14 w-14 ${classes.centerLogo}`}
            src="/magic-logo-center.png"
            alt="centerLogo"
          />
          <p
            className={`absolute text-center text-white text-9xl w-fit h-fit ${classes.rotate}`}
          >
            {playersLifes.lifesP1}
          </p>
          <div
            onClick={decrement.bind(null, "p1")}
            className={`${classes.grid1A} bg-red-500`}
          ></div>
          <div
            onClick={increment.bind(null, "p1")}
            className={`${classes.grid2A} bg-blue-700`}
          ></div>
          <p
            className={`absolute text-center text-white text-9xl w-fit h-fit ${classes.place} `}
          >
            {playersLifes.lifesP2}
          </p>
          <div
            onClick={increment.bind(null, "p2")}
            className={`${classes.grid1B} bg-red-500`}
          ></div>
          <div
            onClick={decrement.bind(null, "p2")}
            className={`${classes.grid2B} bg-green-700`}
          ></div>
        </div>
      </Sidebar>
    </>
  );
};

export default TwoPlayers;
