import { useContext } from "react";
import { ColorsContext } from "../Store/store";

const ManaColors = (props) => {
  const { dispatch } = useContext(ColorsContext);

  return (
    <>
      <div
        className={`${props.bg} pointer flex flex-wrap h-full pt-3 pl-1 space-x-2 space-y-2 `}
      >
        <img
          className="w-[4.5rem] h-[4.5rem] ml-2 mt-2 outline-0"
          src="/mana symbols/blue.png"
          alt="blue"
          onClick={dispatch.bind(null, { type: "blue", player: props.player })}
        />
        <img
          className="w-[4.5rem] h-[4.5rem] ml-2 "
          src="/mana symbols/white.png"
          alt="white"
          onClick={dispatch.bind(null, { type: "white", player: props.player })}
        />
        <img
          className="w-[4.5rem] h-[4.5rem] ml-2"
          src="/mana symbols/green.png"
          alt="green"
          onClick={dispatch.bind(null, { type: "green", player: props.player })}
        />
        <img
          className="w-[4.5rem] h-[4.5rem] ml-2"
          src="/mana symbols/black.png"
          alt="black"
          onClick={dispatch.bind(null, { type: "black", player: props.player })}
        />
        <img
          className="w-[4.5rem] h-[4.5rem] ml-2 "
          src="/mana symbols/red.png"
          alt="red"
          onClick={dispatch.bind(null, { type: "red", player: props.player })}
        />

        <img
          className="w-[4.5rem] h-[4.5rem] "
          src="/mana symbols/blue-and-white.png"
          alt="b&w"
          onClick={dispatch.bind(null, {
            type: "blueAndWhite",
            player: props.player,
          })}
        />
        <img
          className="w-[4.5rem] h-[4.5rem] "
          src="/mana symbols/black-and-green.png"
          alt="b&g"
          onClick={dispatch.bind(null, {
            type: "blackAndGreen",
            player: props.player,
          })}
        />
        <img
          className="w-[4.5rem] h-[4.5rem] "
          src="/mana symbols/blue-and-red.png"
          alt="b&r"
          onClick={dispatch.bind(null, {
            type: "blueAndRed",
            player: props.player,
          })}
        />
        <img
          className="w-[4.5rem] h-[4.5rem] "
          src="/mana symbols/black-and-red.png"
          alt="b&r"
          onClick={dispatch.bind(null, {
            type: "blackAndRed",
            player: props.player,
          })}
        />
        <img
          className="w-[4.5rem] h-[4.5rem] "
          src="/mana symbols/red-and-white.png"
          alt="r&w"
          onClick={dispatch.bind(null, {
            type: "redAndWhite",
            player: props.player,
          })}
        />
        <img
          className="w-[4.5rem] h-[4.5rem] "
          src="/mana symbols/black-and-white.png"
          alt="b&w"
          onClick={dispatch.bind(null, {
            type: "blackAndWhite",
            player: props.player,
          })}
        />
        <img
          className="w-[4.5rem] h-[4.5rem] "
          src="/mana symbols/black-and-blue.png"
          alt="b&b"
          onClick={dispatch.bind(null, {
            type: "blackAndBlue",
            player: props.player,
          })}
        />
        <img
          className="w-[4.5rem] h-[4.5rem] "
          src="/mana symbols/green-and-blue.png"
          alt="b&g"
          onClick={dispatch.bind(null, {
            type: "greenAndBlue",
            player: props.player,
          })}
        />
        <img
          className="w-[4.5rem] h-[4.5rem] "
          src="/mana symbols/green-and-white.png"
          alt="g&w"
          onClick={dispatch.bind(null, {
            type: "greenAndWhite",
            player: props.player,
          })}
        />
        <img
          className="w-[4.5rem] h-[4.5rem] "
          src="/mana symbols/red-and-green.png"
          alt="r&g"
          onClick={dispatch.bind(null, {
            type: "greenAndRed",
            player: props.player,
          })}
        />
      </div>
    </>
  );
};

export default ManaColors;
