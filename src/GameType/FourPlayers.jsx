import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ColorsContext } from "../Store/ColorStore";
import { LifeCounterCtx } from "../Store/LifeStore";
import classes from "./FourPlayers.module.css";
import Sidebar from "../Sidebar/Sidebar";

const FourPlayers = () => {
  const navigate = useNavigate();

  const { state: colorsState, dispatch: dispatchColors } = useContext(ColorsContext);
  const { state: lifesState, dispatch: dispatchLifes } = useContext(LifeCounterCtx);

  const [colorsStateP1, colorsStateP2, colorsStateP3, colorsStateP4] = colorsState;
  const { color1P1, color2P1 } = colorsStateP1;
  const { color1P2, color2P2 } = colorsStateP2;
  const { color1P3, color2P3 } = colorsStateP3;
  const { color1P4, color2P4 } = colorsStateP4;
  const { lifesP1, lifesP2, lifesP3, lifesP4 } = lifesState;

  const increment = (player) => {
    dispatchLifes({ player: player, type: "increment" });
  };

  const decrement = (player) => {
    dispatchLifes({ player: player, type: "decrement" });
  };

  const goHome = () => {
    navigate("/");
    dispatchColors({ type: "reset" });
    dispatchLifes({ starting: "start", type: "20" });
  };

  return (
    <Sidebar sidebarType="4p">
      <div className={`${classes.grid4P}`}>
        {/* /////////////////// PLAYER 1 /////////////////////////////////// */}
        <div
          onClick={decrement.bind(null, "p1")}
          className={`${classes.grid1A} ${
            color1P1 === "bgWhite" ? classes.bgWhite : color1P1
          }`}
        ></div>
        <div
          onClick={increment.bind(null, "p1")}
          className={`${classes.grid2A}  ${
            color2P1 === "bgWhite" ? classes.bgWhite : color2P1
          }`}
        ></div>
        <p
          className={`${classes.p1lifes} 
          ${lifesP1 > 20 && "left-[12%] md:left-[22%]"}
          ${lifesP1 === 20 && "left-[12%] md:left-[22%]"}
          ${lifesP1 < 20 && lifesP1 >= 10 && "left-[14%] md:left-[23%]"}
          ${lifesP1 < 10 && lifesP1 >= 0 && "left-[19%] md:left-[24%]"}
          ${lifesP1 < 0 && lifesP1 >= -9 && "left-[16%] md:left-[23%]"}
          ${lifesP1 < -9 && "left-[8%] md:left-[21%]"}`}
        >
          {lifesP1}
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
          className={`${classes.grid1B}  ${
            color1P2 === "bgWhite" ? classes.bgWhite : color1P2
          }`}
        ></div>
        <div
          onClick={decrement.bind(null, "p2")}
          className={`${classes.grid2B}  ${
            color2P2 === "bgWhite" ? classes.bgWhite : color2P2
          }`}
        ></div>
        <p className={`${classes.p2lifes}
          ${lifesP2 > 20 && "right-[12%] md:right-[22%]"}
          ${lifesP2 === 20 && "right-[12%] md:right-[22%]"}
          ${lifesP2 < 20 && lifesP2 >= 10 && "right-[14%] md:right-[23%]"}
          ${lifesP2 < 10 && lifesP2 >= 0 && "right-[19%] md:right-[24%]"}
          ${lifesP2 < 0 && lifesP2 >= -9 && "right-[16%] md:right-[23%]"}
          ${lifesP2 < -9 && "right-[8%] md:right-[21%]"}`}>{lifesP2}</p>

        {/* ///////////////////////////PLAYER 3/////////////////////////////////// */}

        <div
          onClick={decrement.bind(null, "p3")}
          className={`${classes.grid1C}  ${
            color1P3 === "bgWhite" ? classes.bgWhite : color1P3
          }`}
        ></div>
        <div
          onClick={increment.bind(null, "p3")}
          className={`${classes.grid2C}  ${
            color2P3 === "bgWhite" ? classes.bgWhite : color2P3
          }`}
        ></div>
        <p
          className={`${classes.p3lifes}  
          ${lifesP3 > 20 && "left-[12%] md:left-[22%]"}
          ${lifesP3 === 20 && "left-[12%] md:left-[22%]"}
          ${lifesP3 < 20 && lifesP3 >= 10 && "left-[14%] md:left-[23%]"}
          ${lifesP3 < 10 && lifesP3 >= 0 && "left-[19%] md:left-[24%]"}
          ${lifesP3 < 0 && lifesP3 >= -9 && "left-[16%] md:left-[23%]"}
          ${lifesP3 < -9 && "left-[8%] md:left-[21%]"}`}
        >
          {lifesP3}
        </p>

        {/* ///////////////////////////PLAYER 4/////////////////////////////////// */}

        <div
          onClick={increment.bind(null, "p4")}
          className={`${classes.grid1D}  ${
            color1P4 === "bgWhite" ? classes.bgWhite : color1P4
          }`}
        ></div>
        <div
          onClick={decrement.bind(null, "p4")}
          className={`${classes.grid2D}  ${
            color2P4 === "bgWhite" ? classes.bgWhite : color2P4
          }`}
        ></div>
        <p className={`${classes.p4lifes}
           ${lifesP4 > 20 && "right-[12%] md:right-[22%]"}
           ${lifesP4 === 20 && "right-[12%] md:right-[22%]"}
           ${lifesP4 < 20 && lifesP4 >= 10 && "right-[14%] md:right-[23%]"}
           ${lifesP4 < 10 && lifesP4 >= 0 && "right-[19%] md:right-[24%]"}
           ${lifesP4 < 0 && lifesP4 >= -9 && "right-[16%] md:right-[23%]"}
           ${lifesP4 < -9 && "right-[8%] md:right-[21%]"}
        `}>{lifesP4}</p>
      </div>
    </Sidebar>
  );
};

export default FourPlayers;
