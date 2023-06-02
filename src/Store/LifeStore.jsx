import { createContext, useReducer } from "react";

export const LifeCounterCtx = createContext();

const counting = {
  p1up: false,
  p1down: false,
  p2up: false,
  p2down: false,
  p3up: false,
  p3down: false,
  p4up: false,
  p4down: false,
  up:false
};

const initialLifes = {
  lifesP1: 20,
  lifesP2: 20,
  lifesP3: 20,
  lifesP4: 20,
};

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
  if (action.player === "p4") {
    switch (action.type) {
      case "increment":
        return { ...state, lifesP4: state.lifesP4 + 1 };
      case "decrement":
        return { ...state, lifesP4: state.lifesP4 - 1 };
      default:
        throw new Error();
    }
  }
};

const countingReducer = (s, action) => {
  switch (action.type) {
    case "p1up":
      return {
        ...counting,
        p1up: true,
        up:true
      };
    case "p1down":
      return {
        ...counting,
        p1down: true,
      };
    case "p2up":
      return {
        ...counting,
        p2up: true,
        up:true,
      };
    case "p2down":
      return {
        ...counting,
        p2down: true,
      };
    case "p3up":
      return {
        ...counting,
        p3up: true,
        up:true,
      };
    case "p3down":
      return {
        ...counting,
        p3down: true,
      };
    case "p4up":
      return {
        ...counting,
        p4up: true,
        up:true,
      };
    case "p4down":
      return {
        ...counting,
        p4down: true,
      };
    default:
      break;
  }
};

const checkCounting = (obj, type) => {
  for (let prop in obj) {
    if (prop === type || prop === 'up') continue;
    if (obj[prop]) return true;
  }
};

export const LifeCounterProvider = (props) => {
  const [state, dispatch] = useReducer(counterReducer, initialLifes);
  const [countingState, dispatchCounting] = useReducer(
    countingReducer,
    counting
  );

  const lifeObject = {
    state,
    dispatch,
    countingState,
    dispatchCounting,
    checkCounting,
  };

  return (
    <LifeCounterCtx.Provider value={lifeObject}>
      {props.children}
    </LifeCounterCtx.Provider>
  );
};
