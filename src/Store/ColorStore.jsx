import { createContext, useReducer } from "react";

export const ColorsContext = createContext({
  colors: "",
});

export const MyColorProvider = (props) => {
  
  const initialColors = [
    {
      color1P1: 'bg-blue-500',
      color2P1: 'bg-blue-500'
    },
    {
      color1P2: 'bg-blue-500',
      color2P2: 'bg-blue-500'
    },
    {
      color1P3: 'bg-blue-500',
      color2P3: 'bg-blue-500'
    },
    {
      color1P4: 'bg-blue-500',
      color2P4: 'bg-blue-500'
    },
  ];

  const reducer = (state = initialColors, action) => {

    switch (action.type) {
      case "blue":
        switch (action.player) {
          case "p1":
            return state.map((el,i) => i === 0 ? ({
              color1P1: "bg-blue-500",
              color2P1: "bg-blue-500",
            }) : el);
          case "p2":
            return state.map((el,i) => i === 1 ? ({
              color1P2: "bg-blue-500",
              color2P2: "bg-blue-500",
            }) : el );
          case "p3":
            return state.map((el,i) => i === 2 ? ({
              color1P3: "bg-blue-500",
              color2P3: "bg-blue-500",
            }) : el );
          case "p4":
            return state.map((el,i) => i === 3 ? ({
              color1P4: "bg-blue-500",
              color2P4: "bg-blue-500",
            }) : el );
        }
 
      case "white":
        switch (action.player) {
          case "p1":
            return state.map((el,i) => i === 0 ? ({
              color1P1: "bgWhite",
              color2P1: "bgWhite",
            }) : el );
          case "p2":
            return state.map((el,i) => i === 1 ? ({
              color1P2: "bgWhite",
              color2P2: "bgWhite",
            }) : el);
          case "p3":
            return state.map((el,i) => i === 2 ? ({
              color1P3: "bgWhite",
              color2P3: "bgWhite",
            }) : el );
          case "p4":
            return state.map((el,i) => i === 3 ? ({
              color1P4: "bgWhite",
              color2P4: "bgWhite",
            }) : el );
        }    

      case "green":
        switch(action.player) {
          case "p1":
          return state.map((el,i) => i === 0 ? ({
            color1P1: "bg-green-800",
            color2P1: "bg-green-800",
          }) : el );
        case "p2":
          return state.map((el,i) => i === 1 ? ({
            color1P2: "bg-green-800",
            color2P2: "bg-green-800",
          }) : el );
        case "p3":
          return state.map((el,i) => i === 2 ? ({
            color1P3: "bg-green-800",
            color2P3: "bg-green-800",
          }) : el );
        case "p4":
          return state.map((el,i) => i === 3 ? ({
            color1P4: "bg-green-800",
            color2P4: "bg-green-800",
          }) : el );

        }
      
      case "black":
        switch(action.player) {
          case "p1":
            return state.map((el,i) => i === 0 ? ({
              color1P1: "bg-zinc-900",
              color2P1: "bg-zinc-900",
            }) : el );
          case "p2":
            return state.map((el,i) => i === 1 ? ({
              color1P2: "bg-zinc-900",
              color2P2: "bg-zinc-900",
            }) : el );
          case "p3":
            return state.map((el,i) => i === 2 ? ({
              color1P3: "bg-zinc-900",
              color2P3: "bg-zinc-900",
            }) : el );
          case "p4":
            return state.map((el,i) => i === 3 ? ({
              color1P4: "bg-zinc-900",
              color2P4: "bg-zinc-900",
            }) : el );
        }
          
      case "red":
        switch(action.player) {
          case "p1":
            return state.map((el,i) => i === 0 ? ({
              color1P1: "bg-red-600",
              color2P1: "bg-red-600",
            }) : el );
          case "p2":
            return state.map((el,i) => i === 1 ? ({
              color1P2: "bg-red-600",
              color2P2: "bg-red-600",
            }) : el );
          case "p3":
            return state.map((el,i) => i === 2 ? ({
              color1P3: "bg-red-600",
              color2P3: "bg-red-600",
            }) : el );
          case "p4":
            return state.map((el,i) => i === 3 ? ({
              color1P4: "bg-red-600",
              color2P4: "bg-red-600",
            }) : el );
        }

      case "blueAndWhite":
        switch(action.player){
          case "p1":
            return state.map((el,i) => i === 0 ? ({
              color1P1: "bgWhite",
              color2P1: "bg-blue-500",
            }) : el );
          case "p2":
            return state.map((el,i) => i === 1 ? ({
              color1P2: "bgWhite",
              color2P2: "bg-blue-500",
            }) : el );
          case "p3":
            return state.map((el,i) => i === 2 ? ({
              color1P3: "bgWhite",
              color2P3: "bg-blue-500",
            }) : el );
          case "p4":
            return state.map((el,i) => i === 3 ? ({
              color1P4: "bgWhite",
              color2P4: "bg-blue-500",
            }) : el );
        }
          
      case "blackAndGreen":
        switch(action.player){
          case "p1":
            return state.map((el,i) => i === 0 ? ({
              color1P1: "bg-green-800",
              color2P1: "bg-zinc-900",
            }) : el );
          case "p2":
            return state.map((el,i) => i === 1 ? ({
              color1P2: "bg-green-800",
              color2P2: "bg-zinc-900",
            }) : el );
          case "p3":
            return state.map((el,i) => i === 2 ? ({
              color1P3: "bg-green-800",
              color2P3: "bg-zinc-900",
            }) : el );
          case "p4":
            return state.map((el,i) => i === 3 ? ({
              color1P4: "bg-green-800",
              color2P4: "bg-zinc-900",
            }) : el);
        }

      case "blueAndRed":
        switch(action.player){
          case "p1":
            return state.map((el,i) => i === 0 ? ({
              color1P1: "bg-blue-500",
              color2P1: "bg-red-600",
            }) : el );
          case "p2":
            return state.map((el,i) => i === 1 ? ({
              color1P2: "bg-blue-500",
              color2P2: "bg-red-600",
            }) : el );
          case "p3":
            return state.map((el,i) => i === 2 ? (state[2] = {
              color1P3: "bg-blue-500",
              color2P3: "bg-red-600",
            }) : state[i] );
          case "p4":
            return state.map((el,i) => i === 3 ? (state[3] = {
              color1P4: "bg-blue-500",
              color2P4: "bg-red-600",
            }) : state[i] );
        }
              
      case "blackAndRed":
        switch(action.player){
          case "p1":
            return state.map((el,i) => i === 0 ? ({
              color1P1: "bg-red-600",
              color2P1: "bg-zinc-900",
            }) : el );
          case "p2":
            return state.map((el,i) => i === 1 ? ({
              color1P2: "bg-red-600",
              color2P2: "bg-zinc-900",
            }) : el );
          case "p3":
            return state.map((el,i) => i === 2 ? ({
              color1P3: "bg-red-600",
              color2P3: "bg-zinc-900",
            }) : el );
          case "p4":
            return state.map((el,i) => i === 3 ? ({
              color1P4: "bg-red-600",
              color2P4: "bg-zinc-900",
            }) : el );
        }
          
      case "redAndWhite":
        switch(action.player){
          case "p1":
            return state.map((el,i) => i === 0 ? ({
              color1P1: "bgWhite",
              color2P1: "bg-red-600",
            }) : el);
          case "p2":
            return state.map((el,i) => i === 1 ? ({
              color1P2: "bgWhite",
              color2P2: "bg-red-600",
            }) : el );
          case "p3":
            return state.map((el,i) => i === 2 ? ({
              color1P3: "bgWhite",
              color2P3: "bg-red-600",
            }) : el );
          case "p4":
            return state.map((el,i) => i === 3 ? ({
              color1P4: "bgWhite",
              color2P4: "bg-red-600",
            }) : el );
        }
          
      case "blackAndWhite":
        switch(action.player){
          case "p1":
            return state.map((el,i) => i === 0 ? ({
              color1P1: "bg-zinc-900",
              color2P1: "bgWhite",
            }) : el );
          case "p2":
            return state.map((el,i) => i === 1 ? ({
              color1P2: "bg-zinc-900",
              color2P2: "bgWhite",
            }) : el );
          case "p3":
            return state.map((el,i) => i === 2 ? ({
              color1P3: "bg-zinc-900",
              color2P3: "bgWhite",
            }) : el );
          case "p4":
            return state.map((el,i) => i === 3 ? ({
              color1P4: "bg-zinc-900",
              color2P4: "bgWhite",
            }) : el );
        }
          
      case "blackAndBlue":
        switch(action.player){
          case "p1":
            return state.map((el,i) => i === 0 ? ({
              color1P1: "bg-blue-500",
              color2P1: "bg-zinc-900",
            }) : el );
          case "p2":
            return state.map((el,i) => i === 1 ? ({
              color1P2: "bg-blue-500",
              color2P2: "bg-zinc-900",
            }) : el );
          case "p3":
            return state.map((el,i) => i === 2 ? ({
              color1P3:"bg-blue-500",
              color2P3:"bg-zinc-900",
            }) : el );
          case "p4":
            return state.map((el,i) => i === 3 ? ({
              color1P4: "bg-blue-500",
              color2P4: "bg-zinc-900"
            }) : el );
        }
          
      case "greenAndBlue":
        switch(action.player){
          case "p1":
            return state.map((el,i) => i === 0 ? ({
              color1P1: "bg-green-800",
              color2P1: "bg-blue-500",
            }) : el );
          case "p2":
            return state.map((el,i) => i === 1 ? ({
              color1P2: "bg-green-800",
              color2P2: "bg-blue-500",
            }) : el );
          case "p3":
            return state.map((el,i) => i === 2 ? ({
              color1P3:"bg-green-800",
              color2P3:"bg-blue-500",
            }) : el );
          case "p4":
            return state.map((el,i) => i === 3 ? ({
              color1P4: "bg-green-800",
              color2P4: "bg-blue-500",
            }) : el );
        }

      case "greenAndWhite":
        switch(action.player){
          case "p1":
            return state.map((el,i) => i === 0 ? ({
              color1P1: "bgWhite",
              color2P1: "bg-green-800",
            }) : el );
          case "p2":
            return state.map((el,i) => i === 1 ? ({
              color1P2: "bgWhite",
              color2P2: "bg-green-800",
            }) : el );
          case "p3":
            return state.map((el,i) => i === 2 ? ({
              color1P3:"bgWhite",
              color2P3:"bg-green-800",
            }) : el );
          case "p4":
            return state.map((el,i) => i === 3 ? ({
              color1P4: "bgWhite",
              color2P4: "bg-green-800",
            }) : el );
        }     
      case "greenAndRed":
        switch(action.player){
          case "p1":
            return state.map((el,i) => i === 0 ? ({
              color1P1: "bg-green-800",
              color2P1: "bg-red-600",
            }) : el );
          case "p2":
            return state.map((el,i) => i === 1 ? ({
              color1P2: "bg-green-800",
              color2P2: "bg-red-600",
            }) : el );
          case "p3":
            return state.map((el,i) => i === 2 ? ({
              color1P3:"bg-green-800",
              color2P3:"bg-red-600",
            }) : el );
          case "p4":
            return state.map((el,i) => i === 3 ? ({
              color1P4: "bg-green-800",
              color2P4: "bg-red-600",
            }) : el );
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
