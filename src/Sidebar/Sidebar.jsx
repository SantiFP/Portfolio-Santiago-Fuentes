import { useReducer } from "react";
import classes2P from "./Sidebar2P.module.css";
import classes3P from "./Sidebar3P.module.css";
import classes4P from "./Sidebar4P.module.css";
import ManaColors from "./ManaColors";

let sideIsOpen = {
  side1: false,
  side2: false,
  side3: false,
  side4: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "s1":
      return { ...state, side1: !state.side1 };
    case "s2":
      return { ...state, side2: !state.side2 };
    case "s3":
      return { ...state, side3: !state.side3 };
    case "s4":
      return { ...state, side4: !state.side4 };
    default:
      break;
  }
};

function Sidebar(props) {
  const [openSides, dispatch] = useReducer(reducer, sideIsOpen);

  const toggleSidebar = (side) => {
    side === "s1" && dispatch({ type: "s1" });
    side === "s2" && dispatch({ type: "s2" });
    side === "s3" && dispatch({ type: "s3" });
    side === "s4" && dispatch({ type: "s4" });
  };

  const { side1, side2, side3, side4 } = openSides;
  const { sidebarType } = props;

  return (
    <>
      <div>{props.children}</div>

      {/* /////////////////// PLAYER 1 ////////////////////////////////// */}

      <div
        className={`${sidebarType === "2p" && classes2P.sidebar}
         ${sidebarType === "3p" && classes3P.sidebar} 
        ${sidebarType === "4p" && classes4P.sidebar} ${
          side1
            ? `open`
            : `${sidebarType === "2p" && classes2P.closed} 
            ${sidebarType === "3p" && classes3P.closed}
            ${sidebarType === "4p" && classes4P.closed}`
        } `}
      >
        <ManaColors
          player="p1"
          position={`${
            sidebarType === "3p"
              ? "P1-3P"
              : sidebarType === "2p"
              ? "2P"
              : "P1-4P"
          }`}
          bg={`${
            sidebarType === "2p"
              ? classes2P.ManaColorsBg
              : sidebarType === "3p"
              ? classes3P.ManaColorsBgRight
              : classes4P.ManaColorsBgRight
          }`}
        />

        <img
          onClick={toggleSidebar.bind(null, "s1")}
          className={`h-11 w-11 
            ${sidebarType === "2p" && classes2P.sideArrowTop}
            ${sidebarType === "3p" && classes3P.sideArrowP1} 
            ${sidebarType === "4p" && classes4P.sideArrowP1} 
            ${
              side1
                ? `${sidebarType === "2p" && classes2P.arrowReverse}
                 ${sidebarType === "3p" && classes3P.arrowReverse}
                 ${sidebarType === "4p" && classes4P.arrowReverse}`
                : `${sidebarType === "2p" && classes2P.goBackArrow} 
                ${sidebarType === "3p" && classes3P.goBackArrow}
                ${sidebarType === "4p" && classes4P.goBackArrow} 
                 `
            }
            `}
          src="/flecha-correcta.png"
          alt="arrow"
        />
      </div>

      {/* ////////// PLAYER 2 //////////////// */}

      <div
        className={`${sidebarType === "2p" && classes2P.sidebar2}
         ${sidebarType === "3p" && " rotate-180 "} 
         ${sidebarType === "3p" && classes3P.sidebar2} 
         ${sidebarType === "4p" && classes4P.sidebar2} 
          ${
            side2
              ? `open`
              : `${sidebarType === "2p" && classes2P.closed}
             ${sidebarType === "3p" && classes3P.closed}
             ${sidebarType === "4p" && classes4P.closed}
             `
          } `}
      >
        <ManaColors
          player="p2"
          position={`${
            sidebarType === "3p"
              ? "P2-3P"
              : sidebarType === "2p"
              ? "2P"
              : "P2-4P"
          }`}
          bg={`${
            sidebarType === "2p"
              ? classes2P.ManaColorsBg
              : sidebarType === "3p"
              ? classes3P.ManaColorsBgLeft
              : classes4P.ManaColorsBgRight
          }`}
        />

        <img
          onClick={toggleSidebar.bind(null, "s2")}
          className={`h-11 w-11 
            ${sidebarType === "2p" && classes2P.sideArrowBottom}
            ${sidebarType === "3p" && classes3P.sideArrowP2} 
            ${sidebarType === "4p" && classes4P.sideArrowP2} 

            ${
              side2
                ? `${sidebarType === "2p" && classes2P.arrowReverse2}
                 ${sidebarType === "3p" && classes3P.arrowReverse2}
                 ${sidebarType === "4p" && classes4P.arrowReverse2}
                 `
                : `${sidebarType === "2p" && classes2P.goBackArrow2}
                 ${sidebarType === "3p" && classes3P.goBackArrow2}
                 ${sidebarType === "4p" && classes4P.goBackArrow2}
                  `
            }
            `}
          src="/flecha-correcta.png"
          alt="arrow"
        />
      </div>

      {/* //////////////// PLAYER 3 ///////////////////////////// */}

      {(sidebarType === "3p" || sidebarType === "4p") && (
        <div
          className={`${
            sidebarType === "3p" ? classes3P.sidebar3 : classes4P.sidebar3
          }
          ${
            side3
              ? `open`
              : `${sidebarType === "3p" ? classes3P.closed : classes4P.closed}`
          }`}
        >
          <ManaColors
            player="p3"
            position={`${sidebarType === "3p" ? "P3-3P" : "P3-4P"}`}
            bg={`${
              sidebarType === "3p"
                ? classes3P.ManaColorsBg
                : classes4P.ManaColorsBgLeft
            }`}
          />

          <img
            onClick={toggleSidebar.bind(null, "s3")}
            className={`h-11 w-11 ${
              sidebarType === "3p"
                ? classes3P.sideArrowP3
                : classes4P.sideArrowP3
            } ${
              side3
                ? `${
                    sidebarType === "3p"
                      ? classes3P.arrowReverse3
                      : classes4P.arrowReverse3
                  }`
                : `${
                    sidebarType === "3p"
                      ? classes3P.goBackArrow3
                      : classes4P.goBackArrow3
                  }`
            }`}
            src="/flecha-correcta.png"
            alt="arrow"
          />
        </div>
      )}

      {/* //////////////// PLAYER 4 ///////////////////////////// */}

      {sidebarType === "4p" && (
        <div
          className={`${classes4P.sidebar4}  ${
            side4 ? `open` : `${classes4P.closed}`
          }`}
        >
          <ManaColors
            player="p4"
            position={`${sidebarType === "4p" && "P4-4P"}`}
            bg={classes4P.ManaColorsBgRight}
          />

          <img
            onClick={toggleSidebar.bind(null, "s4")}
            className={`h-11 w-11 ${classes4P.sideArrowP4} ${
              side4 ? `${classes4P.arrowReverse4}` : `${classes4P.goBackArrow4}`
            }`}
            src="/flecha-correcta.png"
            alt="arrow"
          />
        </div>
      )}
    </>
  );
}

export default Sidebar;
