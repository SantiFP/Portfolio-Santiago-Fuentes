import { useContext } from "react";
import { ColorsContext } from "../Store/store";

export const changeColors = (color,props) => {

  const { dispatch } = useContext(ColorsContext);

    if (props.player === "1") {
      color === "blue" && dispatch({ type: "blue", player: "p1" });
      color === "white" && dispatch({ type: "white", player: "p1" });
      color === "green" && dispatch({ type: "green", player: "p1" });
      color === "black" && dispatch({ type: "black", player: "p1" });
      color === "red" && dispatch({ type: "red", player: "p1" });
      color === "blueAndWhite" &&
        dispatch({ type: "blueAndWhite", player: "p1" });
      color === "blackAndGreen" &&
        dispatch({ type: "blackAndGreen", player: "p1" });
      color === "blueAndRed" && dispatch({ type: "blueAndRed", player: "p1" });
      color === "blackAndRed" &&
        dispatch({ type: "blackAndRed", player: "p1" });
      color === "redAndWhite" &&
        dispatch({ type: "redAndWhite", player: "p1" });
      color === "blackAndWhite" &&
        dispatch({ type: "blackAndWhite", player: "p1" });
      color === "blackAndBlue" &&
        dispatch({ type: "blackAndBlue", player: "p1" });
        color === "greenAndBlue" &&
        dispatch({ type: "greenAndBlue", player: "p1" });
        color === "greenAndWhite" &&
        dispatch({ type: "greenAndWhite", player: "p1" });
        color === "greenAndWhite" &&
        dispatch({ type: "greenAndRed", player: "p1" });
    }
    if (props.player === "2") {
      color === "blue" && dispatch({ type: "blue", player: "p2" });
      color === "white" && dispatch({ type: "white", player: "p2" });
      color === "green" && dispatch({ type: "green", player: "p2" });
      color === "black" && dispatch({ type: "black", player: "p2" });
      color === "red" && dispatch({ type: "red", player: "p2" });
      color === "blueAndWhite" &&
        dispatch({ type: "blueAndWhite", player: "p2" });
      color === "blackAndGreen" &&
        dispatch({ type: "blackAndGreen", player: "p2" });
      color === "blueAndRed" && dispatch({ type: "blueAndRed", player: "p2" });
      color === "blackAndRed" &&
        dispatch({ type: "blackAndRed", player: "p2" });
      color === "redAndWhite" &&
        dispatch({ type: "redAndWhite", player: "p2" });
      color === "blackAndWhite" &&
        dispatch({ type: "blackAndWhite", player: "p2" });
      color === "blackAndBlue" &&
        dispatch({ type: "blackAndBlue", player: "p2" });
        color === "greenAndBlue" &&
        dispatch({ type: "greenAndBlue", player: "p2" });
        color === "greenAndWhite" &&
        dispatch({ type: "greenAndWhite", player: "p2" });
        color === "greenAndRed" &&
        dispatch({ type: "greenAndRed", player: "p2" });
    }
  };