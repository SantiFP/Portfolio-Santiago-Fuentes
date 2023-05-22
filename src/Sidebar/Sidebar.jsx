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
  const {sidebarType} = props;

  return (
    <>
      <div>{props.children}</div>

      {/* /////////////////// PLAYER 1 ////////////////////////////////// */}

      <div
        className={`${sidebarType === "2p" && classes2P.sidebar} ${
          sidebarType === "3p" && classes3P.sidebar
        } ${
          side1
            ? `open`
            : `${sidebarType === "2p" && classes2P.closed} ${
                sidebarType === "3p" && classes3P.closed
              }`
        } `}
      >
        <ManaColors player="p1" position={`${sidebarType === '3p' ? 'P1-3P' : sidebarType === '2p' && '2P'}`} 
        bg={`${sidebarType === '2p' ? classes2P.ManaColorsBg : sidebarType === '3p' && classes3P.ManaColorsBgRight}`} />

        <img
          onClick={toggleSidebar.bind(null, "s1")}
          className={`h-11 w-11 
            ${sidebarType === "2p" && classes2P.sideArrowTop}
            ${sidebarType === "3p" && classes3P.sideArrowP1} 
            ${
              side1
                ? `${sidebarType === "2p" && classes2P.arrowReverse} ${
                    sidebarType === "3p" && classes3P.arrowReverse
                  }`
                : `${sidebarType === "2p" && classes2P.goBackArrow} ${
                    sidebarType === "3p" && classes3P.goBackArrow
                  } `
            }
            `}
          src="/flecha-correcta.png"
          alt="arrow"
        />
      </div>

      {/* ////////// PLAYER 2 //////////////// */}

      <div
        className={`${sidebarType === "2p" && classes2P.sidebar2} ${sidebarType === '3p' && ' rotate-180 '} ${
          sidebarType === "3p" && classes3P.sidebar2
        } ${
          side2
            ? `open`
            : `${sidebarType === "2p" && classes2P.closed} ${
                sidebarType === "3p" && classes3P.closed
              }`
        } `}
      >
        <ManaColors player="p2" position={`${sidebarType === '3p' ? 'P2-3P' : sidebarType === '2p' && '2P'}`} 
        bg={`${sidebarType === '2p' ? classes2P.ManaColorsBg : sidebarType === '3p' && classes3P.ManaColorsBgLeft}`} />

        <img
          onClick={toggleSidebar.bind(null, "s2")}
          className={`h-11 w-11 
            ${sidebarType === "2p" && classes2P.sideArrowBottom}
            ${sidebarType === "3p" && classes3P.sideArrowP2} 
            ${
              side2
                ? `${sidebarType === "2p" && classes2P.arrowReverse2} ${
                    sidebarType === "3p" && classes3P.arrowReverse2
                  }`
                : `${sidebarType === "2p" && classes2P.goBackArrow2} ${
                    sidebarType === "3p" && classes3P.goBackArrow2
                  } `
            }
            `}
          src="/flecha-correcta.png"
          alt="arrow"
        />
      </div>

      {/* //////////////// PLAYER 3 ///////////////////////////// */}

      {sidebarType === "3p" && (
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
