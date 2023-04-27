import { createContext, useReducer } from "react";

export const LifesContext = createContext({
  lifes: 0,
});

const MyContextProvider = (props) => {
  const initialLifes = {
    lifes: 20,
  };

  function reducer(state = initialLifes, action) {
    switch (action.type) {
      case "20":
        return { lifes: 20 };
      case "30":
        return { lifes: 30 };
      case "40":
        return { lifes: 40 };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialLifes);

  const lifesHandler = {
    state,
    dispatch
  };

  return <LifesContext.Provider value={lifesHandler} >{props.children}</LifesContext.Provider>
};

export default MyContextProvider;