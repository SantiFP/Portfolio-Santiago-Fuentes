import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
import { ColorsContext } from "../Store/ColorStore";
import { LifeCounterCtx } from "../Store/LifeStore";
import { Transition } from "react-transition-group";
import classes from "./FourPlayers.module.css";
import Sidebar from "../Sidebar/Sidebar";

const FourPlayers = () => {
  const navigate = useNavigate();
  const nodeRef = useRef();

  const [count, setCount] = useState(0);
  const [showCount, setShowCount] = useState(false);
  const [changing, setChanging] = useState(false);

  const { state: colorsState, dispatch: dispatchColors } =
    useContext(ColorsContext);
  const {
    state: lifesState,
    dispatch: dispatchLifes,
    countingState,
    dispatchCounting,
    checkCounting,
  } = useContext(LifeCounterCtx);

  const [colorsStateP1, colorsStateP2, colorsStateP3, colorsStateP4] = colorsState;
  const { color1P1, color2P1 } = colorsStateP1;
  const { color1P2, color2P2 } = colorsStateP2;
  const { color1P3, color2P3 } = colorsStateP3;
  const { color1P4, color2P4 } = colorsStateP4;
  const { lifesP1, lifesP2, lifesP3, lifesP4 } = lifesState;
  const { p1up, p1down, p2up, p2down, p3up, p3down, p4up, p4down, up } = countingState;

  useEffect(() => {
    showCount && setCount((prevCount) => (changing === 0 ? 1 : prevCount + 1));

    const hideCount = setTimeout(() => setShowCount(false), 1000);

    const resetCount = setTimeout(() => setCount(0), 2000);

    return () => {
      clearInterval(hideCount);
      clearInterval(resetCount);
    };
  }, [lifesP1, lifesP2, lifesP3, lifesP4]);

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

  const handleCounting = (countingType) => {
    setShowCount(true);
    dispatchCounting({ type: countingType });
  };

  return (
    <Sidebar sidebarType="4p">
      <div className={`${classes.grid4P}`}>
        <img
          className={`h-14 w-14 ${classes.centerLogo}`}
          src="/magic-logo-center.png"
          alt="centerLogo"
          onClick={goHome}
        />

        <Transition
          timeout={1000}
          nodeRef={nodeRef}
          in={showCount}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <p
              style={{
                opacity: state === "exiting" ? 0 : 1,
                transition: "ease-out 1s opacity",
              }}
              ref={nodeRef}
              className={
                p1up
                  ? "p1up4p"
                  : p1down
                  ? "p1down4p"
                  : p2up
                  ? "p2up4p"
                  : p2down
                  ? "p2down4p"
                  : p3up
                  ? "p3up4p"
                  : p3down
                  ? "p3down4p"
                  : p4up
                  ? "p4up4p"
                  : p4down
                  ? "p4down4p"
                  : ""
              }
            >
              {`${up ? "+" : "-"} ${!changing && count ? count : 1}`}
            </p>
          )}
        </Transition>

        {/* /////////////////// PLAYER 1 /////////////////////////////////// */}

        <div
          onClick={() => {
            decrement("p1");
            handleCounting("p1down");
            checkCounting(countingState, "p1down")
              ? setChanging(0)
              : setChanging();
          }}
          className={`${classes.grid1A} ${color1P1}`}
        ></div>
        <div
          onClick={() => {
            increment("p1");
            handleCounting("p1up");
            checkCounting(countingState, "p1up")
              ? setChanging(0)
              : setChanging();
          }}
          className={`${classes.grid2A}  ${color2P1}`}
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

        {/* ////////////////////////PLAYER 2///////////////////////////////// */}

        <div
          onClick={() => {
            increment("p2");
            handleCounting("p2up");
            checkCounting(countingState, "p2up")
              ? setChanging(0)
              : setChanging();
          }}
          className={`${classes.grid1B}  ${color1P2}`}
        ></div>
        <div
          onClick={() => {
            decrement("p2");
            handleCounting("p2down");
            checkCounting(countingState, "p2down")
              ? setChanging(0)
              : setChanging();
          }}
          className={`${classes.grid2B}  ${color2P2}`}
        ></div>
        <p
          className={`${classes.p2lifes}
          ${lifesP2 > 20 && "right-[12%] md:right-[22%]"}
          ${lifesP2 === 20 && "right-[12%] md:right-[22%]"}
          ${lifesP2 < 20 && lifesP2 >= 10 && "right-[14%] md:right-[23%]"}
          ${lifesP2 < 10 && lifesP2 >= 0 && "right-[19%] md:right-[24%]"}
          ${lifesP2 < 0 && lifesP2 >= -9 && "right-[16%] md:right-[23%]"}
          ${lifesP2 < -9 && "right-[8%] md:right-[21%]"}`}
        >
          {lifesP2}
        </p>

        {/* ///////////////////////////PLAYER 3/////////////////////////////////// */}

        <div
          onClick={() => {
            decrement("p3");
            handleCounting("p3down");
            checkCounting(countingState, "p3down")
              ? setChanging(0)
              : setChanging();
          }}
          className={`${classes.grid1C}  ${color1P3}`}
        ></div>
        <div
          onClick={() => {
            increment("p3");
            handleCounting("p3up");
            checkCounting(countingState, "p3up")
              ? setChanging(0)
              : setChanging();
          }}
          className={`${classes.grid2C}  ${color2P3}`}
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
          onClick={() => {
            increment("p4");
            handleCounting("p4up");
            checkCounting(countingState, "p4up")
              ? setChanging(0)
              : setChanging();
          }}
          className={`${classes.grid1D} ${color1P4}`}
        ></div>
        <div
          onClick={() => {
            decrement("p4");
            handleCounting("p4down");
            checkCounting(countingState, "p4down")
              ? setChanging(0)
              : setChanging();
          }}
          className={`${classes.grid2D} ${color2P4}`}
        ></div>
        <p
          className={`${classes.p4lifes}
           ${lifesP4 > 20 && "right-[12%] md:right-[22%]"}
           ${lifesP4 === 20 && "right-[12%] md:right-[22%]"}
           ${lifesP4 < 20 && lifesP4 >= 10 && "right-[14%] md:right-[23%]"}
           ${lifesP4 < 10 && lifesP4 >= 0 && "right-[19%] md:right-[24%]"}
           ${lifesP4 < 0 && lifesP4 >= -9 && "right-[16%] md:right-[23%]"}
           ${lifesP4 < -9 && "right-[8%] md:right-[21%]"}
        `}
        >
          {lifesP4}
        </p>
      </div>
    </Sidebar>
  );
};

export default FourPlayers;
