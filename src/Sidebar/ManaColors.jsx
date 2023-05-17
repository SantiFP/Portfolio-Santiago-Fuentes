import { useContext, useState } from "react";
import { ColorsContext } from "../Store/ColorStore";
import classes from './Sidebar.module.css'

const ManaColors = (props) => {
  const { dispatch } = useContext(ColorsContext);
  const [selected, setSelected] = useState();

  const imgClick = (img) => {
    setSelected(img);
  };

  return (
    <>
      <form
        className={`${props.bg} pointer flex flex-wrap h-full pt-3 pl-1 space-x-2 space-y-2 `}
      >
        <img
          className={`ml-2 mt-2 ${
            selected === 1 ? `${classes.selectedImg}` : "w-[4.5rem] h-[4.5rem]"
          }`}
          src="/mana symbols/blue.png"
          alt="blue"
          onClick={() => {
            dispatch({ type: "blue", player: props.player });
            imgClick(1);
          }}
        />
        <img
          className={`ml-2 ${
            selected === 2 ? `${classes.selectedImg}`: "w-[4.5rem] h-[4.5rem]"
          }`}
          src="/mana symbols/white.png"
          alt="white"
          onClick={() => {
            dispatch({ type: "white", player: props.player });
            imgClick(2);
          }}
        />
        <img
          className={`ml-2 ${
            selected === 3 ? `${classes.selectedImg}`: "w-[4.5rem] h-[4.5rem]"
          }`}
          src="/mana symbols/green.png"
          alt="green"
          onClick={() => {
            dispatch({ type: "green", player: props.player });
            imgClick(3);
          }}
        />
        <img
          className={`"ml-2 ${
            selected === 4 ? `${classes.selectedImg}`: "w-[4.5rem] h-[4.5rem]"
          } `}
          src="/mana symbols/black.png"
          alt="black"
          onClick={() => {
            dispatch({ type: "black", player: props.player });
            imgClick(4);
          }}
        />
        <img
          className={`"ml-2 ${
            selected === 5 ? `${classes.selectedImg}`: "w-[4.5rem] h-[4.5rem]"
          } `}
          src="/mana symbols/red.png"
          alt="red"
          onClick={() => {
            dispatch({ type: "red", player: props.player });
            imgClick(5);
          }}
        />

        <img
          className={`${
            selected === 6 ? `${classes.selectedImg}` : "w-[4.5rem] h-[4.5rem]"
          } `}
          src="/mana symbols/blue-and-white.png"
          alt="b&w"
          onClick={() => {
            dispatch({ type: "blueAndWhite", player: props.player });
            imgClick(6);
          }}
        />
        <img
          className={`${
            selected === 7 ? `${classes.selectedImg}` : "w-[4.5rem] h-[4.5rem]"
          } `}
          src="/mana symbols/black-and-green.png"
          alt="b&g"
          onClick={() => {
            dispatch({ type: "blackAndGreen", player: props.player });
            imgClick(7);
          }}
        />
        <img
          className={`${
            selected === 8 ? `${classes.selectedImg}` : "w-[4.5rem] h-[4.5rem]"
          } `}
          src="/mana symbols/blue-and-red.png"
          alt="b&r"
          onClick={() => {
            dispatch({ type: "blueAndRed", player: props.player });
            imgClick(8);
          }}
        />
        <img
          className={`${
            selected === 9 ? `${classes.selectedImg}` : "w-[4.5rem] h-[4.5rem]"
          } `}
          src="/mana symbols/black-and-red.png"
          alt="b&r"
          onClick={() => {
            dispatch({ type: "blackAndRed", player: props.player });
            imgClick(9);
          }}
        />
        <img
          className={`${selected === 10 ? `${classes.selectedImg}` : "w-[4.5rem] h-[4.5rem]"} `}
          src="/mana symbols/red-and-white.png"
          alt="r&w"
          onClick={() => {
            dispatch({ type: "redAndWhite", player: props.player });
            imgClick(10);
          }}
        />
        <img
          className={`${selected === 11 ? `${classes.selectedImg}` : "w-[4.5rem] h-[4.5rem]"} `}
          src="/mana symbols/black-and-white.png"
          alt="b&w"
          onClick={() => {
            dispatch({ type: "blackAndWhite", player: props.player });
            imgClick(11);
          }}
        />
        <img
          className={`${selected === 12 ? `${classes.selectedImg}` : "w-[4.5rem] h-[4.5rem]"} `}
          src="/mana symbols/black-and-blue.png"
          alt="b&b"
          onClick={() => {
            dispatch({ type: "blackAndBlue", player: props.player });
            imgClick(12);
          }}
        />
        <img
          className={`${selected === 13 ? `${classes.selectedImg}` : "w-[4.5rem] h-[4.5rem]"}`}
          src="/mana symbols/green-and-blue.png"
          alt="b&g"
          onClick={() => {
            dispatch({ type: "greenAndBlue", player: props.player });
            imgClick(13);
          }}
        />
        <img
          className={`${selected === 14 ? `${classes.selectedImg}` : "w-[4.5rem] h-[4.5rem]"}`}
          src="/mana symbols/green-and-white.png"
          alt="g&w"
          onClick={() => {
            dispatch({ type: "greenAndWhite", player: props.player });
            imgClick(14);
          }}
        />
        <img
          className={`${selected === 15 ? `${classes.selectedImg}` : "w-[4.5rem] h-[4.5rem]"}`}
          src="/mana symbols/red-and-green.png"
          alt="r&g"
          onClick={() => {
            dispatch({ type: "greenAndRed", player: props.player });
            imgClick(15);
          }}
        />
      </form>
    </>
  );
};

export default ManaColors;
