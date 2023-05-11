import { useReducer } from "react";
import classes from "./Sidebar.module.css";
import ManaColors from "./ManaColors";

let sideIsOpen = {
  side1: false,
  side2: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "s1":
      return { side1: !state.side1, side2: state.side2 };
    case "s2":
      return { side1: state.side1, side2: !state.side2 };
    default:
      break;
  }
};

function Sidebar(props) {
  const [openSides, dispatch] = useReducer(reducer, sideIsOpen);

  const toggleSidebar = (side) => {
    side === "s1" && dispatch({ type: "s1" });
    side === "s2" && dispatch({ type: "s2" });
  };

  const { side1, side2 } = openSides;

  return (
    <>
      <div>{props.children}</div>

      <div
        className={`${classes.sidebar} ${side1 ? `open` : `${classes.closed}`}`}
      >
        <ManaColors player='1'  bg={classes.ManaColorsBg}/>
        <img
          onClick={toggleSidebar.bind(null, "s1")}
          className={`h-11 w-11 ${classes.sideArrowTop} ${
            side1 ? `${classes.arrowReverse}` : `${classes.goBackArrow}`
          }`}
          src="/flecha-correcta.png"
          alt="arrow"
        />
      </div>

      <div
        className={`${classes.sidebar2} ${
          side2 ? `open` : `${classes.closed}`
        } `}
      >
        <ManaColors player='2' bg={classes.ManaColorsBg}/>

        <img
          onClick={toggleSidebar.bind(null, "s2")}
          className={`h-11 w-11 ${classes.sideArrowBottom} ${
            side2 ? `${classes.arrowReverse2}` : `${classes.goBackArrow2}`
          }`}
          src="/flecha-correcta.png"
          alt="arrow"
        />
      </div>
    </>
  );
}

export default Sidebar;
