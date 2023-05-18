import { useReducer } from "react";
import classes2P from "./Sidebar2P.module.css";
import classes3P from "./Sidebar3P.module.css";
import ManaColors from "./ManaColors";

let sideIsOpen = {
  side1: false,
  side2: false,
  side3: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "s1":
      return { ...state, side1: !state.side1 };
    case "s2":
      return { ...state, side2: !state.side2 };
    case "s3":
      return { ...state, side3: !state.side3 };
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
  };

  const { side1, side2,side3 } = openSides;

  return (
    <>
      <div>{props.children}</div>

      {/* /////////////////// PLAYER 1 ////////////////////////////////// */}

      <div
        className={`${props.sidebarType === "2p" && classes2P.sidebar} ${
          props.sidebarType === "3p" && classes3P.sidebar
        } ${
          side1
            ? `open`
            : `${props.sidebarType === "2p" && classes2P.closed} ${
                props.sidebarType === "3p" && classes3P.closed
              }`
        } `}
      >
        <ManaColors player="p1" bg={classes2P.ManaColorsBg} />

        <img
          onClick={toggleSidebar.bind(null, "s1")}
          className={`h-11 w-11 
            ${props.sidebarType === "2p" && classes2P.sideArrowTop}
            ${props.sidebarType === "3p" && classes3P.sideArrowP1} 
            ${
              side1
                ? `${props.sidebarType === "2p" && classes2P.arrowReverse} ${
                    props.sidebarType === "3p" && classes3P.arrowReverse
                  }`
                : `${props.sidebarType === "2p" && classes2P.goBackArrow} ${
                    props.sidebarType === "3p" && classes3P.goBackArrow
                  } `
            }
            `}
          src="/flecha-correcta.png"
          alt="arrow"
        />
      </div>

      {/* ////////// PLAYER 2 //////////////// */}

      <div
        className={`${props.sidebarType === "2p" && classes2P.sidebar2} ${
          props.sidebarType === "3p" && classes3P.sidebar2
        } ${
          side2
            ? `open`
            : `${props.sidebarType === "2p" && classes2P.closed} ${
                props.sidebarType === "3p" && classes3P.closed
              }`
        } `}
      >
        <ManaColors player="p2" bg={classes2P.ManaColorsBg} />

        <img
          onClick={toggleSidebar.bind(null, "s2")}
          className={`h-11 w-11 
            ${props.sidebarType === "2p" && classes2P.sideArrowBottom}
            ${props.sidebarType === "3p" && classes3P.sideArrowP2} 
            ${
              side2
                ? `${props.sidebarType === "2p" && classes2P.arrowReverse2} ${
                    props.sidebarType === "3p" && classes3P.arrowReverse2
                  }`
                : `${props.sidebarType === "2p" && classes2P.goBackArrow2} ${
                    props.sidebarType === "3p" && classes3P.goBackArrow2
                  } `
            }
            `}
          src="/flecha-correcta.png"
          alt="arrow"
        />
      </div>

      {/* //////////////// PLAYER 3 ///////////////////////////// */}

      {props.sidebarType === "3p" && (
        <div
          className={`${classes3P.sidebar3} ${
            side3 ? `open` : `${classes3P.closed}`
          }`}
        >
          <ManaColors player="p1" bg={classes3P.ManaColorsBg} />
          <img
            onClick={toggleSidebar.bind(null, "s3")}
            className={`h-11 w-11 ${classes3P.sideArrowP3} ${
              side3 ? `${classes3P.arrowReverse3}` : `${classes3P.goBackArrow3}`
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
