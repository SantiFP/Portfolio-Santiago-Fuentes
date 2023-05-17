import { createContext, useReducer } from "react";

export const LifeCounterCtx = createContext({
  lifesP1: 20,
  lifesP2: 20,
  lifesP3: 20,
  lifesP4: 20,
});

const counterReducer = (state, action) => {
  if (action.starting === "start") {
    switch (action.type) {
      case "20":
        return {
          lifesP1: 20,
          lifesP2: 20,
          lifesP3: 20,
          lifesP4: 20,
        };
      case "30":
        return {
          lifesP1: 30,
          lifesP2: 30,
          lifesP3: 30,
          lifesP4: 30,
        };
      case "40":
        return {
          lifesP1: 40,
          lifesP2: 40,
          lifesP3: 40,
          lifesP4: 40,
        };
      default:
        throw new Error();
    }
  }

  if (action.player === "p1") {
    switch (action.type) {
      case "increment":
        return { ...state, lifesP1: state.lifesP1 + 1 };
      case "decrement":
        return { ...state, lifesP1: state.lifesP1 - 1 };
      default:
        throw new Error();
    }
  }
  if (action.player === "p2") {
    switch (action.type) {
      case "increment":
        return { ...state, lifesP2: state.lifesP2 + 1 };
      case "decrement":
        return { ...state, lifesP2: state.lifesP2 - 1 };
      default:
        throw new Error();
    }
  }  
  if (action.player === "p3") {
    switch (action.type) {
      case "increment":
        return { ...state, lifesP3: state.lifesP3 + 1 };
      case "decrement":
        return { ...state, lifesP3: state.lifesP3 - 1 };
      default:
        throw new Error();
    }
  }
};

export const LifeCounterProvider = (props) => {
  const initialLifes = {
    lifesP1: 20,
    lifesP2: 20,
    lifesP3: 20,
    lifesP4: 20,
  };
  const [state, dispatch] = useReducer(counterReducer, initialLifes);


  const lifeObject = {
    state,
    dispatch,
  };

  return (
    <LifeCounterCtx.Provider value={lifeObject}>
      {props.children}
    </LifeCounterCtx.Provider>
  );
};
