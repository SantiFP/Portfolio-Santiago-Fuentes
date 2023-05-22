import { useContext, useState } from "react";
import { ColorsContext } from "../Store/ColorStore";
import classes2P from "./Sidebar2P.module.css";
import classes3P from "./Sidebar3P.module.css";

const ManaColors = (props) => {
  const { dispatch } = useContext(ColorsContext);
  const [selected, setSelected] = useState();

  const imgClick = (img) => {
    setSelected(img);
  };

  const { position } = props;

  return (
    <form
      className={` h-full pt-3 pl-1 pointer ${props.bg}  
      ${(position === "P1-3P" || position === "P2-3P") && " lg:w-auto "}`}
    >
      <div
        className={`${
          position === "2P" && "flex flex-wrap space-x-2 space-y-4"
        } 
        ${
          position === "P1-3P" &&
          `${classes3P.rotateRight} space-x-3 ml-2 space-y-4`
        }
        ${
          position === "P2-3P" &&
          `${classes3P.rotateLeft} space-x-3 ml-2 space-y-4`
        }
        ${
          position === "P3-3P" &&
          ` flex flex-row flex-wrap pb-6  space-x-3  space-y-4`
        }

        `}
      >
        <img
          className={`${
            position === "2P"
              ? "ml-2 mt-4 "
              : (position === "P1-3P" ||
                  position === "P2-3P" ||
                  position == "P3-3P") &&
                " ml-[0.65rem] mt-4 "
          } ${
            selected === 1
              ? ` ${
                  position === "P1-3P" ||
                  position === "P2-3P" ||
                  position === "P3-3P"
                    ? classes3P.selectedImg
                    : position === "2P" && classes2P.selectedImg
                } `
              : "w-[4.5rem] h-[4.5rem]"
          }`}
          src="/mana symbols/blue.png"
          alt="blue"
          onClick={() => {
            dispatch({ type: "blue", player: props.player });
            imgClick(1);
          }}
        />
        <img
          className={`${position === "2P" && "ml-2 "} ${
            selected === 2
              ? ` ${
                  position === "P1-3P" ||
                  position === "P2-3P" ||
                  position === "P3-3P"
                    ? classes3P.selectedImg
                    : position === "2P" && classes2P.selectedImg
                } `
              : "w-[4.5rem] h-[4.5rem]"
          }`}
          src="/mana symbols/white.png"
          alt="white"
          onClick={() => {
            dispatch({ type: "white", player: props.player });
            imgClick(2);
          }}
        />
        <img
          className={`${position === "2P" && " ml-2 "}${
            selected === 3
              ? ` ${
                  position === "P1-3P" ||
                  position === "P2-3P" ||
                  position === "P3-3P"
                    ? classes3P.selectedImg
                    : position === "2P" && classes2P.selectedImg
                } `
              : "w-[4.5rem] h-[4.5rem]"
          }`}
          src="/mana symbols/green.png"
          alt="green"
          onClick={() => {
            dispatch({ type: "green", player: props.player });
            imgClick(3);
          }}
        />
        <img
          className={`${position === "2P" && "ml-2"} ${
            selected === 4
              ? ` ${
                  position === "P1-3P" ||
                  position === "P2-3P" ||
                  position === "P3-3P"
                    ? classes3P.selectedImg
                    : position === "2P" && classes2P.selectedImg
                } `
              : "w-[4.5rem] h-[4.5rem]"
          } `}
          src="/mana symbols/black.png"
          alt="black"
          onClick={() => {
            dispatch({ type: "black", player: props.player });
            imgClick(4);
          }}
        />
        <img
          className={`${position === "2P" && " ml-2 "}${
            selected === 5
              ? ` ${
                  position === "P1-3P" ||
                  position === "P2-3P" ||
                  position === "P3-3P"
                    ? classes3P.selectedImg
                    : position === "2P" && classes2P.selectedImg
                } `
              : "w-[4.5rem] h-[4.5rem]"
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
            selected === 6
              ? ` ${
                  position === "P1-3P" ||
                  position === "P2-3P" ||
                  position === "P3-3P"
                    ? classes3P.selectedImg
                    : position === "2P" && classes2P.selectedImg
                } `
              : "w-[4.5rem] h-[4.5rem]"
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
            selected === 7
              ? ` ${
                  position === "P1-3P" ||
                  position === "P2-3P" ||
                  position === "P3-3P"
                    ? classes3P.selectedImg
                    : position === "2P" && classes2P.selectedImg
                } `
              : "w-[4.5rem] h-[4.5rem]"
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
            selected === 8
              ? ` ${
                  position === "P1-3P" ||
                  position === "P2-3P" ||
                  position === "P3-3P"
                    ? classes3P.selectedImg
                    : position === "2P" && classes2P.selectedImg
                } `
              : "w-[4.5rem] h-[4.5rem]"
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
            selected === 9
              ? ` ${
                  position === "P1-3P" ||
                  position === "P2-3P" ||
                  position === "P3-3P"
                    ? classes3P.selectedImg
                    : position === "2P" && classes2P.selectedImg
                } `
              : "w-[4.5rem] h-[4.5rem]"
          } `}
          src="/mana symbols/black-and-red.png"
          alt="b&r"
          onClick={() => {
            dispatch({ type: "blackAndRed", player: props.player });
            imgClick(9);
          }}
        />
        <img
          className={`${
            selected === 10
              ? ` ${
                  position === "P1-3P" ||
                  position === "P2-3P" ||
                  position === "P3-3P"
                    ? classes3P.selectedImg
                    : position === "2P" && classes2P.selectedImg
                } `
              : "w-[4.5rem] h-[4.5rem]"
          } `}
          src="/mana symbols/red-and-white.png"
          alt="r&w"
          onClick={() => {
            dispatch({ type: "redAndWhite", player: props.player });
            imgClick(10);
          }}
        />
        <img
          className={`${
            selected === 11
              ? ` ${
                  position === "P1-3P" ||
                  position === "P2-3P" ||
                  position === "P3-3P"
                    ? classes3P.selectedImg
                    : position === "2P" && classes2P.selectedImg
                } `
              : "w-[4.5rem] h-[4.5rem]"
          } `}
          src="/mana symbols/black-and-white.png"
          alt="b&w"
          onClick={() => {
            dispatch({ type: "blackAndWhite", player: props.player });
            imgClick(11);
          }}
        />
        <img
          className={`${
            selected === 12
              ? ` ${
                  position === "P1-3P" ||
                  position === "P2-3P" ||
                  position === "P3-3P"
                    ? classes3P.selectedImg
                    : position === "2P" && classes2P.selectedImg
                } `
              : "w-[4.5rem] h-[4.5rem]"
          } `}
          src="/mana symbols/black-and-blue.png"
          alt="b&b"
          onClick={() => {
            dispatch({ type: "blackAndBlue", player: props.player });
            imgClick(12);
          }}
        />
        <img
          className={`${
            selected === 13
              ? ` ${
                  position === "P1-3P" ||
                  position === "P2-3P" ||
                  position === "P3-3P"
                    ? classes3P.selectedImg
                    : position === "2P" && classes2P.selectedImg
                } `
              : "w-[4.5rem] h-[4.5rem]"
          }`}
          src="/mana symbols/green-and-blue.png"
          alt="b&g"
          onClick={() => {
            dispatch({ type: "greenAndBlue", player: props.player });
            imgClick(13);
          }}
        />
        <img
          className={`${
            selected === 14
              ? ` ${
                  position === "P1-3P" ||
                  position === "P2-3P" ||
                  position === "P3-3P"
                    ? classes3P.selectedImg
                    : position === "2P" && classes2P.selectedImg
                } `
              : "w-[4.5rem] h-[4.5rem]"
          }`}
          src="/mana symbols/green-and-white.png"
          alt="g&w"
          onClick={() => {
            dispatch({ type: "greenAndWhite", player: props.player });
            imgClick(14);
          }}
        />
        <img
          className={`${
            selected === 15
              ? ` ${
                  position === "P1-3P" ||
                  position === "P2-3P" ||
                  position === "P3-3P"
                    ? classes3P.selectedImg
                    : position === "2P" && classes2P.selectedImg
                } `
              : "w-[4.5rem] h-[4.5rem]"
          }`}
          src="/mana symbols/red-and-green.png"
          alt="r&g"
          onClick={() => {
            dispatch({ type: "greenAndRed", player: props.player });
            imgClick(15);
          }}
        />
      </div>
    </form>
  );
};

export default ManaColors;

// <>
//   <form
//     className={`${props.bg} pointer flex flex-wrap h-full pt-3 pl-1 space-x-2 space-y-2 `}
//   >
//     <img
//       className={`ml-2 mt-2 ${
//         selected === 1 ? `${classes2P.selectedImg}` : "w-[4.5rem] h-[4.5rem]"
//       }`}
//       src="/mana symbols/blue.png"
//       alt="blue"
//       onClick={() => {
//         dispatch({ type: "blue", player: props.player });
//         imgClick(1);
//       }}
//     />
//     <img
//       className={`ml-2 ${
//         selected === 2 ? `${classes2P.selectedImg}`: "w-[4.5rem] h-[4.5rem]"
//       }`}
//       src="/mana symbols/white.png"
//       alt="white"
//       onClick={() => {
//         dispatch({ type: "white", player: props.player });
//         imgClick(2);
//       }}
//     />
//     <img
//       className={`ml-2 ${
//         selected === 3 ? `${classes2P.selectedImg}`: "w-[4.5rem] h-[4.5rem]"
//       }`}
//       src="/mana symbols/green.png"
//       alt="green"
//       onClick={() => {
//         dispatch({ type: "green", player: props.player });
//         imgClick(3);
//       }}
//     />
//     <img
//       className={`"ml-2 ${
//         selected === 4 ? `${classes2P.selectedImg}`: "w-[4.5rem] h-[4.5rem]"
//       } `}
//       src="/mana symbols/black.png"
//       alt="black"
//       onClick={() => {
//         dispatch({ type: "black", player: props.player });
//         imgClick(4);
//       }}
//     />
//     <img
//       className={`"ml-2 ${
//         selected === 5 ? `${classes2P.selectedImg}`: "w-[4.5rem] h-[4.5rem]"
//       } `}
//       src="/mana symbols/red.png"
//       alt="red"
//       onClick={() => {
//         dispatch({ type: "red", player: props.player });
//         imgClick(5);
//       }}
//     />

//     <img
//       className={`${
//         selected === 6 ? `${classes2P.selectedImg}` : "w-[4.5rem] h-[4.5rem]"
//       } `}
//       src="/mana symbols/blue-and-white.png"
//       alt="b&w"
//       onClick={() => {
//         dispatch({ type: "blueAndWhite", player: props.player });
//         imgClick(6);
//       }}
//     />
//     <img
//       className={`${
//         selected === 7 ? `${classes2P.selectedImg}` : "w-[4.5rem] h-[4.5rem]"
//       } `}
//       src="/mana symbols/black-and-green.png"
//       alt="b&g"
//       onClick={() => {
//         dispatch({ type: "blackAndGreen", player: props.player });
//         imgClick(7);
//       }}
//     />
//     <img
//       className={`${
//         selected === 8 ? `${classes2P.selectedImg}` : "w-[4.5rem] h-[4.5rem]"
//       } `}
//       src="/mana symbols/blue-and-red.png"
//       alt="b&r"
//       onClick={() => {
//         dispatch({ type: "blueAndRed", player: props.player });
//         imgClick(8);
//       }}
//     />
//     <img
//       className={`${
//         selected === 9 ? `${classes2P.selectedImg}` : "w-[4.5rem] h-[4.5rem]"
//       } `}
//       src="/mana symbols/black-and-red.png"
//       alt="b&r"
//       onClick={() => {
//         dispatch({ type: "blackAndRed", player: props.player });
//         imgClick(9);
//       }}
//     />
//     <img
//       className={`${selected === 10 ? `${classes2P.selectedImg}` : "w-[4.5rem] h-[4.5rem]"} `}
//       src="/mana symbols/red-and-white.png"
//       alt="r&w"
//       onClick={() => {
//         dispatch({ type: "redAndWhite", player: props.player });
//         imgClick(10);
//       }}
//     />
//     <img
//       className={`${selected === 11 ? `${classes2P.selectedImg}` : "w-[4.5rem] h-[4.5rem]"} `}
//       src="/mana symbols/black-and-white.png"
//       alt="b&w"
//       onClick={() => {
//         dispatch({ type: "blackAndWhite", player: props.player });
//         imgClick(11);
//       }}
//     />
//     <img
//       className={`${selected === 12 ? `${classes2P.selectedImg}` : "w-[4.5rem] h-[4.5rem]"} `}
//       src="/mana symbols/black-and-blue.png"
//       alt="b&b"
//       onClick={() => {
//         dispatch({ type: "blackAndBlue", player: props.player });
//         imgClick(12);
//       }}
//     />
//     <img
//       className={`${selected === 13 ? `${classes2P.selectedImg}` : "w-[4.5rem] h-[4.5rem]"}`}
//       src="/mana symbols/green-and-blue.png"
//       alt="b&g"
//       onClick={() => {
//         dispatch({ type: "greenAndBlue", player: props.player });
//         imgClick(13);
//       }}
//     />
//     <img
//       className={`${selected === 14 ? `${classes2P.selectedImg}` : "w-[4.5rem] h-[4.5rem]"}`}
//       src="/mana symbols/green-and-white.png"
//       alt="g&w"
//       onClick={() => {
//         dispatch({ type: "greenAndWhite", player: props.player });
//         imgClick(14);
//       }}
//     />
//     <img
//       className={`${selected === 15 ? `${classes2P.selectedImg}` : "w-[4.5rem] h-[4.5rem]"}`}
//       src="/mana symbols/red-and-green.png"
//       alt="r&g"
//       onClick={() => {
//         dispatch({ type: "greenAndRed", player: props.player });
//         imgClick(15);
//       }}
//     />
//   </form>
// </>
