import classes from "./ThreePlayers.module.css";
import { useContext } from "react";
import { LifesContext } from "../Store/store";
import { useNavigate } from "react-router-dom";

// const ThreePlayers = () => {
//   const navigate = useNavigate();

//   const { state, dispatch: dispatchCtx } = useContext(LifesContext);

//   const goHome = () => {
//     dispatchCtx({ type: "20" });
//     navigate("/");
//   };
//   return (
//     <div className={`text-center w-full ${classes.common}`}>
//       <div className="flex flex-col h-[35vh] relative">
//         <div className={`${classes.grid1A} h-1/2`}></div>
//         <div className={`${classes.grid2A} h-1/2`}></div>
//         <p className={`${classes.p1lifes}`}>20</p>
//         <img
//           className={`h-14 w-14 ${classes.centerLogo}`}
//           src="/magic-logo-center.png"
//           alt="centerLogo"
//           onClick={goHome}
//         />
//       </div>

//       <div className="flex flex-row w-full h-[65vh] relative">
//         <div className="flex flex-row w-1/2 ">
//           <div className={classes.grid1B}></div>
//           <div className={classes.grid2B}></div>
//           <p className={`${classes.p2lifes}`}>20</p>
//         </div>

//         <div className="flex flex-row w-1/2 relative">
//           <div className={classes.grid1C}></div>
//           <div className={classes.grid2C}></div>
//           <p className={`${classes.p3lifes}`}>20</p>
//         </div>
//       </div>
//     </div>
//   );
// };

const ThreePlayers = () => {
  const navigate = useNavigate();

  const { state, dispatch: dispatchCtx } = useContext(LifesContext);

  const goHome = () => {
    dispatchCtx({ type: "20" });
    dispatchColors({ type: "reset" });
    navigate("/");
  };
  return (
    <div className={`text-center w-full ${classes.common}`}>
      <div className={`${classes.grid1A}`}></div>
      <div className={`${classes.grid2A}`}></div>
      <p className={`${classes.p1lifes}`}>20</p>
      <img
        className={`h-14 w-14 ${classes.centerLogo}`}
        src="/magic-logo-center.png"
        alt="centerLogo"
        onClick={goHome}
      />

      <div className={classes.grid1B}></div>
      <div className={classes.grid2B}></div>
      <p className={`${classes.p2lifes}`}>20</p>

      <div className={classes.grid1C}></div>
      <div className={classes.grid2C}></div>
      <p className={`${classes.p3lifes}`}>20</p>
    </div>
  );
};

export default ThreePlayers;
