import { useContext, useState, useEffect } from "react";
import { ColorsContext } from "../Store/ColorStore";
import { LifeCounterCtx } from "../Store/LifeStore";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import classes from "./TwoPlayers.module.css";
import Sidebar from "../Sidebar/Sidebar";

const TwoPlayers = () => {

  const navigate = useNavigate();

  const [count, setCount] = useState(0);
  const [showCount, setShowCount] = useState(false);
  const [changing, setChanging] = useState(false);

  const { state: colorsState, dispatch: dispatchColors } = useContext(ColorsContext);
  const {
    state: lifesState,
    dispatch: dispatchLifes,
    countingState,
    dispatchCounting,
    checkCounting
  } = useContext(LifeCounterCtx);

  const [colorsStateP1, colorsStateP2] = colorsState;
  const { color1P1, color2P1 } = colorsStateP1;
  const { color1P2, color2P2 } = colorsStateP2;
  const { lifesP1, lifesP2 } = lifesState;
  const { p1up,p1down,p2up,p2down,up } = countingState;

  useEffect(() => {
    showCount && setCount(prevCount => changing === 0 ? 1 : prevCount + 1);

    const hideCount = setTimeout(() => setShowCount(false), 1000);

    const resetCount = setTimeout(() => setCount(0), 2000);

    return () => {
      clearInterval(hideCount);
      clearInterval(resetCount);
    };
  }, [lifesP1, lifesP2]);

  const props = useSpring({
    opacity: showCount ? 1 : 0,
    config: { duration: 1000 },
  });

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

  const handleCounting = (countingType) => {
    setShowCount(true);
    dispatchCounting({ type: countingType });
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

        <animated.p
          style={props}
          className={
            p1up
              ? "p1up"
              : p1down
              ? "p1down"
              : p2up
              ? "p2up"
              : p2down
              ? "p2down"
              : "hidden"
          }
        >{`${up ? "+" : "-"} ${count}`}</animated.p>

          {/* ////////////////////////// PLAYER 1 //////////////////////////////// */}

          <p
            className={`absolute text-center text-white w-fit h-fit ${classes.rotate}`}
          >
            {lifesP1}
          </p>

          <div
            onClick={() => {
              decrement("p1");
              handleCounting('p1down');
              checkCounting(countingState,'p1down') ? setChanging(0) : setChanging();
            }}
            className={`${classes.grid1A} ${color1P1}`}
          ></div>
          <div
            onClick={() => {
              increment("p1");
              handleCounting('p1up');
              checkCounting(countingState,'p1up') ? setChanging(0) : setChanging();
            }}
            className={`${classes.grid2A} ${color2P1}`}
          ></div>

          {/* ///////////////////////// PLAYER 2 //////////////////////////////// */}

          <p
            className={`absolute text-center text-white w-fit h-fit ${classes.place} `}
          >
            {lifesP2}
          </p>

          <div
            onClick={() => {
              handleCounting("p2up");
              increment("p2");
              checkCounting(countingState,'p2up') ? setChanging(0) : setChanging();
            }}
            className={`${classes.grid1B} ${color1P2}`}
          ></div>
          <div
            onClick={() => {
              handleCounting("p2down");
              decrement("p2");
              checkCounting(countingState,'p2down') ? setChanging(0) : setChanging();
            }}
            className={`${classes.grid2B} ${color2P2}`}
          ></div>
        </div>
      </Sidebar>
    </>
  );
};

export default TwoPlayers;
