import classes from "./TwoPlayers.module.css";
import { useContext } from "react";
import { ColorsContext, LifesContext } from "../Store/store";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const reducer = (state, action) => {
  if (action.player === "p1") {
    switch (action.type) {
      case "increment":
        return { ...state, lifesP1: state.lifesP1 + 1 };
      case "decrement":
        return { ...state, lifesP1: state.lifesP1 - 1 };
      default:
        throw new Error();
    }
  }
  if (action.player === "p2") {
    switch (action.type) {
      case "increment":
        return { ...state, lifesP2: state.lifesP2 + 1 };
      case "decrement":
        return { ...state, lifesP2: state.lifesP2 - 1 };
      default:
        throw new Error();
    }
  }
};

const TwoPlayers = () => {
  const navigate = useNavigate();
  const { state, dispatch: dispatchCtx } = useContext(LifesContext);
  const {state: colorsState,dispatch: dispatchColors} = useContext(ColorsContext);

  const [colorsStateP1,colorsStateP2] = colorsState;
  const {color1P1,color2P1} = colorsStateP1;
  const {color1P2,color2P2} = colorsStateP2;


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
    dispatchColors({type: 'reset'});
    navigate("/");
  };

  return (
    <>
      <Sidebar >
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
            {playersLifes.lifesP1}
          </p>
          <div
            onClick={decrement.bind(null, "p1")}
            className={`${classes.grid1A} ${color1P1 === 'bgWhite' ? classes.bgWhite : color1P1}`}
          ></div>
          <div
            onClick={increment.bind(null, "p1")}
            className={`${classes.grid2A} ${color2P1 === 'bgWhite' ? classes.bgWhite : color2P1}`}
          ></div>


          <p
            className={`absolute text-center text-white w-fit h-fit ${classes.place} `}
          >
            {playersLifes.lifesP2}
          </p>
          <div
            onClick={increment.bind(null, "p2")}
            className={`${classes.grid1B} ${color1P2 === 'bgWhite' ? classes.bgWhite : color1P2}`}
          ></div>
          <div
            onClick={decrement.bind(null, "p2")}
            className={`${classes.grid2B} ${color2P2 === 'bgWhite' ? classes.bgWhite : color2P2}`}
          ></div>


          
        </div>
      </Sidebar>
    </>
  );
};

export default TwoPlayers;
