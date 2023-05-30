import classes from "./TwoPlayers.module.css";
import { useContext, useState, useEffect } from "react";
import { ColorsContext } from "../Store/ColorStore";
import { LifeCounterCtx } from "../Store/LifeStore";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { useSpring, animated } from "react-spring";

const TwoPlayers = () => {
  const navigate = useNavigate();
  const { state: colorsState, dispatch: dispatchColors } = useContext(ColorsContext);
  const { state: lifesState, dispatch: dispatchLifes } = useContext(LifeCounterCtx);

  const [count, setCount] = useState(0);
  const [showCount, setShowCount] = useState(false);

  const props = useSpring({
    opacity: showCount ? 1 : 0,
    config: { duration: 1000 },
  });

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

  useEffect(() => {

    showCount && setCount(prevCount => prevCount + 1);

    const timer = setTimeout(() => setShowCount(false), 1000);

    const interval = setTimeout(() => setCount(0), 1950);

    return () => {
      clearInterval(timer)
      clearInterval(interval);
    };
  }, [lifesP1, lifesP2]);

  const handleCounting = () => {
    setShowCount(true);
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
            className={`absolute text-center text-white w-fit h-fit ${classes.rotate}`}
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

          {/* ///////////////// 2 //////////////////////////////// */}

          <p
            className={`absolute text-center text-white w-fit h-fit ${classes.place} `}
          >
            {lifesP2}
          </p>

          <animated.p
            style={props}
            className={`p1up`}
          >{`+ ${count}`}</animated.p>

          <div
            onClick={() => {
              handleCounting();
              increment("p2");
            }}
            className={`${classes.grid1B} ${color1P2}`}
          ></div>
          <div
            onClick={() => {
              decrement("p2");
            }}
            className={`${classes.grid2B} ${color2P2}`}
          ></div>
        </div>
      </Sidebar>
    </>
  );
};

export default TwoPlayers;
