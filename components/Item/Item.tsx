import { useState } from "react";
import { ItemObj } from "@/pages";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { cartActions } from "@/store";

const Item = (props: ItemObj) => {
  const [amount, setAmount] = useState<number>(1);
  const dispatch = useDispatch<AppDispatch>();

  const amountHandler = (type: string) => {
    type === "+" && setAmount(amount + 1);
    type === "-" && setAmount(amount === 1 ? amount : amount - 1);
  };

  const addToCart = () => {
    dispatch(
      cartActions.addToCart({
        name: props.name,
        price: props.price * amount,
        id: props.id,
        img: props.img,
        amount,
      })
    );
  };

  return (
    <div className="itemDiv">
      <div className="flex flex-col lg:flex lg:flex-row">
        <img
          width={0}
          height={0}
          className="w-[14rem] h-[10rem]"
          alt={props.type}
          src={props.img}
        />

        <div className="flex flex-col space-y-2 text-center mt-4 w-full">
          <p className="text-xl">{props.name}</p>
          <div className="text-3xl">
            <button className="signs" onClick={amountHandler.bind(null, "+")}>
              <span className="relative bottom-[0.2rem]">+</span>
            </button>
            <p>{amount}</p>
            <button className="signs" onClick={amountHandler.bind(null, "-")}>
              <span className="relative bottom-[0.2rem]">-</span>
            </button>
          </div>
          <p>
            Total x{amount}:{" "}
            <span className="text-2xl">${props.price * amount}</span>{" "}
          </p>
        </div>
      </div>
      <div className="text-center text-white mt-8">
        <button
          onClick={() => {
            addToCart();
          }}
          className="addButton"
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};
export default Item;