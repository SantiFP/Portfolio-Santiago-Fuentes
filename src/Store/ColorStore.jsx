import { createContext, useReducer } from "react";

export const ColorsContext = createContext({
  lifes: 0,
});

export const MyColorProvider = (props) => {
  const initialColors = [
    {
      color1P1: "bg-blue-500",
      color2P1: " bg-blue-500",
    },
    {
      color1P2: "bg-blue-500",
      color2P2: "bg-blue-500",
    },
  ];

  const reducer = (state = initialColors, action) => {
    switch (action.type) {
      case "blue":
        if (action.player === "p1") {
          return [
            {
              color1P1: "bg-blue-500",
              color2P1: "bg-blue-500",
            },
            state[1],
          ];
        } else {
          return [
            state[0],
            {
              color1P2: "bg-blue-500",
              color2P2: "bg-blue-500",
            },
          ];
        }
      case "white":
        if (action.player === "p1") {
          return [
            {
              color1P1: "bgWhite",
              color2P1: "bgWhite",
            },
            state[1],
          ];
        } else {
          return [
            state[0],
            {
              color1P2: "bgWhite",
              color2P2: "bgWhite",
            },
          ];
        }
      case "green":
        if (action.player === "p1") {
          return [
            {
              color1P1: "bg-green-800",
              color2P1: "bg-green-800",
            },
            state[1],
          ];
        } else {
          return [
            state[0],
            {
              color1P2: "bg-green-800",
              color2P2: "bg-green-800",
            },
          ];
        }
      case "black":
        if (action.player === "p1") {
          return [
            {
              color1P1: "bg-zinc-900",
              color2P1: "bg-zinc-900",
            },
            state[1],
          ];
        } else {
          return [
            state[0],
            {
              color1P2: "bg-zinc-900",
              color2P2: "bg-zinc-900",
            },
          ];
        }
      case "red":
        if (action.player === "p1") {
          return [
            {
              color1P1: "bg-red-600",
              color2P1: "bg-red-600",
            },
            state[1],
          ];
        } else {
          return [
            state[0],
            {
              color1P2: "bg-red-600",
              color2P2: "bg-red-600",
            },
          ];
        }
      case "blueAndWhite":
        if (action.player === "p1") {
          return [
            {
              color1P1: "bgWhite",
              color2P1: "bg-blue-500",
            },
            state[1],
          ];
        } else {
          return [
            state[0],
            {
              color1P2: "bgWhite",
              color2P2: "bg-blue-500",
            },
          ];
        }
      case "blackAndGreen":
        if (action.player === "p1") {
          return [
            {
              color1P1: "bg-green-800",
              color2P1: "bg-zinc-900",
            },
            state[1],
          ];
        } else {
          return [
            state[0],
            {
              color1P2: "bg-green-800",
              color2P2: "bg-zinc-900",
            },
          ];
        }
      case "blueAndRed":
        if (action.player === "p1") {
          return [
            {
              color1P1: "bg-blue-500",
              color2P1: "bg-red-600",
            },
            state[1],
          ];
        } else {
          return [
            state[0],
            {
              color1P2: "bg-blue-500",
              color2P2: "bg-red-600",
            },
          ];
        }
      case "blackAndRed":
        if (action.player === "p1") {
          return [
            {
              color1P1: "bg-red-600",
              color2P1: "bg-zinc-900",
            },
            state[1],
          ];
        } else {
          return [
            state[0],
            {
              color1P2: "bg-red-600",
              color2P2: "bg-zinc-900",
            },
          ];
        }
      case "redAndWhite":
        if (action.player === "p1") {
          return [
            {
              color1P1: "bgWhite",
              color2P1: "bg-red-600",
            },
            state[1],
          ];
        } else {
          return [
            state[0],
            {
              color1P2: "bgWhite",
              color2P2: "bg-red-600",
            },
          ];
        }
      case "blackAndWhite":
        if (action.player === "p1") {
          return [
            {
              color1P1: "bg-zinc-900",
              color2P1: "bgWhite",
            },
            state[1],
          ];
        } else {
          return [
            state[0],
            {
              color1P2: "bg-zinc-900",
              color2P2: "bgWhite",
            },
          ];
        }
      case "blackAndBlue":
        if (action.player === "p1") {
          return [
            {
              color1P1: "bg-blue-500",
              color2P1: "bg-zinc-900",
            },
            state[1],
          ];
        } else {
          return [
            state[0],
            {
              color1P2: "bg-blue-500",
              color2P2: "bg-zinc-900",
            },
          ];
        }

      case "greenAndBlue":
        if (action.player === "p1") {
          return [
            {
              color1P1: "bg-green-800",
              color2P1: "bg-blue-500",
            },
            state[1],
          ];
        } else {
          return [
            state[0],
            {
              color1P2: "bg-green-800",
              color2P2: "bg-blue-500",
            },
          ];
        }

      case "greenAndWhite":
        if (action.player === "p1") {
          return [
            {
              color1P1: "bgWhite",
              color2P1: "bg-green-800",
            },
            state[1],
          ];
        } else {
          return [
            state[0],
            {
              color1P2: "bgWhite",
              color2P2: "bg-green-800",
            },
          ];
        }
      case "greenAndRed":
        if (action.player === "p1") {
          return [
            {
              color1P1: "bg-green-800",
              color2P1: "bg-red-600",
            },
            state[1],
          ];
        } else {
          return [
            state[0],
            {
              color1P2: "bg-green-800",
              color2P2: "bg-red-600",
            },
          ];
        }
      default:
        return [...initialColors];
    }
  };

  const [state, dispatch] = useReducer(reducer, initialColors);

  const colorsHandler = {
    state,
    dispatch,
  };

  return (
    <ColorsContext.Provider value={colorsHandler}>
      {props.children}
    </ColorsContext.Provider>
  );
};
