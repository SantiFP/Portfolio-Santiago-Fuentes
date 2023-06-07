import classes from "./ThreePlayers.module.css";
import { useContext, useState, useEffect,useRef } from "react";
import { ColorsContext } from "../Store/ColorStore";
import { useNavigate } from "react-router-dom";
import { LifeCounterCtx } from "../Store/LifeStore";
import { Transition } from "react-transition-group";
import Sidebar from "../Sidebar/Sidebar";

const ThreePlayers = () => {
  const navigate = useNavigate();
  const nodeRef = useRef();

  const [count, setCount] = useState(0);
  const [showCount, setShowCount] = useState(false);
  const [changing, setChanging] = useState(false);

  const { state: colorsState, dispatch: dispatchColors } = useContext(ColorsContext);
  const {
    state: lifesState,
    dispatch: dispatchLifes,
    countingState,
    dispatchCounting,
    checkCounting,
  } = useContext(LifeCounterCtx);

  const [colorsStateP1, colorsStateP2, colorsStateP3] = colorsState;
  const { color1P1, color2P1 } = colorsStateP1;
  const { color1P2, color2P2 } = colorsStateP2;
  const { color1P3, color2P3 } = colorsStateP3;
  const { lifesP1, lifesP2, lifesP3 } = lifesState;
  const { p1up, p1down, p2up, p2down, p3up, p3down, up } = countingState;

  useEffect(() => {
    showCount && setCount((prevCount) => (changing ? 1 : prevCount + 1));

    const hideCount = setTimeout(() => setShowCount(false), 1000);

    const resetCount = setTimeout(() => setCount(0), 2000);

    return () => {
      clearInterval(hideCount);
      clearInterval(resetCount);
    };
  }, [lifesP1, lifesP2, lifesP3]);

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
    <Sidebar sidebarType="3p">
      <div className={`text-center w-full ${classes.common}`}>
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
                  ? "p1up3p"
                  : p1down
                  ? "p1down3p"
                  : p2up
                  ? "p2up3p"
                  : p2down
                  ? "p2down3p"
                  : p3up
                  ? "p3up3p"
                  : p3down
                  ? "p3down3p"
                  : ""
              }
            >
              {`${up ? "+" : "-"} ${!changing && count ? count : 1}`}
            </p>
          )}
        </Transition>

        {/* ///////////////////////////////// PLAYER 1 /////////////////////////////////////// */}

        <div
          onClick={() => {
            decrement("p1");
            handleCounting("p1down");
            checkCounting(countingState, "p1down")
              ? setChanging(0)
              : setChanging();
          }}
          className={`${classes.grid1A} ${color1P3}`}
        ></div>
        <div
          onClick={() => {
            increment("p1");
            handleCounting("p1up");
            checkCounting(countingState, "p1up")
              ? setChanging(0)
              : setChanging();
          }}
          className={`${classes.grid2A} ${color2P3}`}
        ></div>
        <p className={`${classes.p1lifes} pointer-events-none`}>{lifesP1}</p>

        {/* ///////////////////////////////// PLAYER 2 ////////////////////////////////////////// */}

        <div
          onClick={() => {
            decrement("p2");
            handleCounting("p2down");
            checkCounting(countingState, "p2down")
              ? setChanging(0)
              : setChanging();
          }}
          className={`${classes.grid1B} ${color1P2}`}
        ></div>
        <div
          onClick={() => {
            increment("p2");
            handleCounting("p2up");
            checkCounting(countingState, "p2up")
              ? setChanging(0)
              : setChanging();
          }}
          className={`${classes.grid2B} ${color2P2}`}
        ></div>
        <p
          className={`${classes.p2lifes} pointer-events-none 
          ${lifesState.lifesP2 >= 20 && "left-[11.5%] md:left-[21.5%]"}
          ${
            lifesState.lifesP2 < 20 &&
            lifesState.lifesP2 > 9 &&
            "left-[13.5%] md:left-[22%]"
          } 
          ${
            lifesState.lifesP2 <= 9 &&
            "pb-12 top-[52.5%] left-[13.5%] md:pb-6 md:left-[22.5%]"
          } 
          ${
            lifesState.lifesP2 < 0 &&
            lifesState.lifesP2 >= -9 &&
            "left-[8%]  md:left-[21%]"
          }
          ${
            lifesState.lifesP2 <= -10 &&
            lifesState.lifesP2 > -18 &&
            "ml-[-0.5rem] left-[6.5%]  md:ml-[0] md:left-[19.7%]"
          }
          ${
            lifesState.lifesP2 <= -18 &&
            "ml-[-1rem] left-[6.5%] md:ml-[0] md:left-[19.7%]"
          }`}
        >
          {lifesP2}
        </p>

        {/* ///////////////////////////////// PLAYER 3 ////////////////////////////////////////// */}

        <div
          onClick={() => {
            increment("p3");
            handleCounting("p3up");
            checkCounting(countingState, "p3up")
              ? setChanging(0)
              : setChanging();
          }}
          className={`${classes.grid1C} ${color1P1}`}
        ></div>
        <div
          onClick={() => {
            decrement("p3");
            handleCounting("p3down");
            checkCounting(countingState, "p3down")
              ? setChanging(0)
              : setChanging();
          }}
          className={`${classes.grid2C} ${color2P1}`}
        ></div>
        <p
          className={`${classes.p3lifes} pointer-events-none ${
            lifesState.lifesP3 >= 20 && "right-[11.5%] md:right-[21.5%]"
          }
        ${
          lifesState.lifesP3 < 20 &&
          lifesState.lifesP3 > 9 &&
          "right-[13.5%] md:right-[22%]"
        } 
        ${
          lifesState.lifesP3 <= 9 &&
          "pb-12 top-[52.5%] right-[13.5%] md:pb-6 md:right-[22.5%]"
        } 
        ${
          lifesState.lifesP3 < 0 &&
          lifesState.lifesP3 >= -9 &&
          "right-[8%]  md:right-[21%]"
        }
        ${
          lifesState.lifesP3 <= -10 &&
          lifesState.lifesP3 > -18 &&
          "mr-[-0.5rem] right-[6.5%]  md:mr-[0] md:right-[19.7%]"
        }
        ${
          lifesState.lifesP3 <= -18 &&
          "mr-[-1rem] right-[6.5%] md:mr-[0] md:right-[19.7%]"
        }`}
        >
          {lifesP3}
        </p>
      </div>
    </Sidebar>
  );
};

export default ThreePlayers;
