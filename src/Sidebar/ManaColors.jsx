import { useContext, useState } from "react";
import { ColorsContext } from "../Store/ColorStore";
import classes2P from "./Sidebar2P.module.css";
import classes3P from "./Sidebar3P.module.css";
import classes4P from "./Sidebar4P.module.css";
import imagesArray from "./ImagesArray";


const ManaColors = (props) => {
  const { dispatch } = useContext(ColorsContext);
  const [selected, setSelected] = useState();

  const imgClick = (img) => {
    setSelected(img);
  };

  const { position } = props;
  const positionsArray = ['P1-3P','P2-3P','P1-4P','P2-4P','P3-4P','P4-4P',]

  return (
    <form className={` h-full pt-3 pl-1 pointer ${props.bg} ${positionsArray.includes(position) && " lg:w-auto "}`}>
      <div
        className={`${position === "2P" && "flex flex-wrap space-x-2 space-y-4"} 
        ${position === "P1-3P" && `${classes3P.rotateRight} space-x-3 ml-2 space-y-4`}
        ${position === "P2-3P" && `${classes3P.rotateLeft} space-x-3 ml-2 space-y-4`}
        ${ position === "P3-3P" && ` flex flex-row flex-wrap pb-6 space-x-2  space-y-4`}
        ${position === "P1-4P" && `${classes4P.rotateLeft} space-x-3 ml-2 space-y-4`}
        ${position === "P2-4P" && `${classes4P.rotateRight} space-x-3 ml-2 space-y-4`}
        ${position === "P3-4P" && `${classes4P.rotateLeft} space-x-3 ml-2 space-y-4`}
        ${position === "P4-4P" && `${classes4P.rotateRight} space-x-3 ml-2 space-y-4`}
        `}
        
      >
        {imagesArray.map((el, i) => {
          return (
            <img
              className={`${
                position === "2P"
                  ? ` ${i <= 5 && "ml-2"} ${i === 0 && "mt-4"} `
                  : (position === "P1-3P" ||
                      position === "P2-3P" ||
                      position == "P3-3P") ?
                    `${i === 0 && "ml-[0.65rem] mt-4"}` : `${i === 0 && "ml-[0.65rem] mt-4"}`
              } ${
                selected === el.id
                  ? ` ${
                      position === "P1-3P" ||
                      position === "P2-3P" ||
                      position === "P3-3P"
                        ? classes3P.selectedImg
                        : position === "2P" ? classes2P.selectedImg : classes4P.selectedImg
                    } `
                  : "w-[4.5rem] h-[4.5rem]"
              }`}
              src={el.src}
              alt={el.alt}
              key={el.id}
              onClick={() => {
                dispatch({ type: el.type, player: props.player });
                imgClick(el.id);
              }}
            />
          );
        })}
      </div>
    </form>
  );
};

export default ManaColors;
