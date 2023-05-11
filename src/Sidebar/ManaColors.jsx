import { useContext } from "react";
import { ColorsContext } from "../Store/store";

const ManaColors = (props) => {
  const { dispatch } = useContext(ColorsContext);

  const changeColors = (color) => {
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

  return (
    <>
      <div
        className={`${props.bg} pointer flex flex-wrap h-full pt-3 pl-1 space-x-2 space-y-2 `}
      >
        <img
          className="w-[4.5rem] h-[4.5rem] ml-2 mt-2 outline-0"
          src="/mana symbols/blue.png"
          alt="blue"
          onClick={changeColors.bind(null, "blue")}
        />
        <img
          className="w-[4.5rem] h-[4.5rem] ml-2 "
          src="/mana symbols/white.png"
          alt="white"
          onClick={changeColors.bind(null, "white")}
        />
        <img
          className="w-[4.5rem] h-[4.5rem] ml-2"
          src="/mana symbols/green.png"
          alt="green"
          onClick={changeColors.bind(null, "green")}
        />
        <img
          className="w-[4.5rem] h-[4.5rem] ml-2"
          src="/mana symbols/black.png"
          alt="black"
          onClick={changeColors.bind(null, "black")}
        />
        <img
          className="w-[4.5rem] h-[4.5rem] ml-2 "
          src="/mana symbols/red.png"
          alt="red"
          onClick={changeColors.bind(null, "red")}
        />

        <img
          className="w-[4.5rem] h-[4.5rem] "
          src="/mana symbols/blue-and-white.png"
          alt="b&w"
          onClick={changeColors.bind(null, "blueAndWhite")}
        />
        <img
          className="w-[4.5rem] h-[4.5rem] "
          src="/mana symbols/black-and-green.png"
          alt="b&g"
          onClick={changeColors.bind(null, "blackAndGreen")}
        />
        <img
          className="w-[4.5rem] h-[4.5rem] "
          src="/mana symbols/blue-and-red.png"
          alt="b&r"
          onClick={changeColors.bind(null, "blueAndRed")}
        />
        <img
          className="w-[4.5rem] h-[4.5rem] "
          src="/mana symbols/black-and-red.png"
          alt="b&r"
          onClick={changeColors.bind(null, "blackAndRed")}
        />
        <img
          className="w-[4.5rem] h-[4.5rem] "
          src="/mana symbols/red-and-white.png"
          alt="r&w"
          onClick={changeColors.bind(null, "redAndWhite")}
        />
        <img
          className="w-[4.5rem] h-[4.5rem] "
          src="/mana symbols/black-and-white.png"
          alt="b&w"
          onClick={changeColors.bind(null, "blackAndWhite")}
        />
        <img
          className="w-[4.5rem] h-[4.5rem] "
          src="/mana symbols/black-and-blue.png"
          alt="b&b"
          onClick={changeColors.bind(null, "blackAndBlue")}
        />
        <img
          className="w-[4.5rem] h-[4.5rem] "
          src="/mana symbols/green-and-blue.png"
          alt="b&g"
          onClick={changeColors.bind(null, "greenAndBlue")}

        />
        <img
          className="w-[4.5rem] h-[4.5rem] "
          src="/mana symbols/green-and-white.png"
          alt="g&w"
          onClick={changeColors.bind(null, "greenAndWhite")}

        />
        <img
          className="w-[4.5rem] h-[4.5rem] "
          src="/mana symbols/red-and-green.png"
          alt="r&g"
          onClick={changeColors.bind(null, "greenAndRed")}

        />
      </div>
    </>
  );
};

export default ManaColors;
