import { useState } from "react";

const useLogic = () => {
  const [numberInScreen, setNumberInScreen] = useState(0);
  const [prevNumber, setPrevNumber] = useState(0);
  const [previous, setPrevious] = useState(false);
  const [operationCompleted, setOperationCompleted] = useState(false);
  const [operation, setOperation] = useState("");
  const [showOperation, setShowOperation] = useState("");

  let parsedNumber = Number(numberInScreen);
  let parsedPrevNumber = Number(prevNumber);
  let signs = ["+", "-", "÷", "x", "="];

  const onChangeNumber = (text) => {
    if (signs.includes(text)) {
      if (!signs.includes(showOperation[showOperation.length - 1])) {
        setShowOperation((prevState) => prevState && `${prevState} ${text}`);
      }
    }

    if (text.match(/[0-9]/g)) {
      setNumberInScreen((prevState) => {
        return previous || !prevState
          ? (setPrevious(false), text)
          : `${prevState}${text}`;
      });
      setShowOperation((prevState) => {
        if (operation === 'done') {
          setOperationCompleted(false);
          return `${numberInScreen}${text}`
        }
        return signs.includes(prevState[prevState.length - 1])
          ? `${prevState} ${text}`
          : `${prevState}${text}`;
      });
    }

    if (text === ".") {
      setNumberInScreen((prevState) =>
        !prevState || previous ? (setPrevious(false), "0.") : `${prevState}.`
      );
      setShowOperation((prevState) => {
        if (!prevState || signs.includes(prevState[prevState.length - 1])) {
          return `${prevState && prevState} 0.`;
        } else if (prevState.match(/[0-9]+/)) {
          return `${prevState}.`;
        }
      });
    }

    if (text === "AC") {
      return setNumberInScreen(0), setOperation(null), setShowOperation('');
    }

    if (text === "+/-") {
      return setNumberInScreen(parsedNumber * -1);
    }

    const settings = () => {
      setPrevious(true);
      setPrevNumber(numberInScreen);
      if (operationCompleted) {
        setShowOperation(`${numberInScreen} ${text}`)
      }
    };

    switch (text) {
      case "+":
        settings();
        setOperation("+");
        break;
      case "-":
        settings();
        setOperation("-");
        break;
      case "÷":
        settings();
        setOperation("÷");
        break;
      case "x":
        settings();
        setOperation("x");
        break;
      case "%":
        setNumberInScreen(parsedNumber / 100);
      default:
        break;
    }

    if (text === "=") {
      setOperationCompleted(true);
      switch (operation) {
        case "+":
          setNumberInScreen(parsedPrevNumber + parsedNumber);
          setOperation("done");
          break;
        case "-":
          setNumberInScreen(parsedPrevNumber - parsedNumber);
          setOperation("done");
          break;
        case "÷":
          parsedNumber === 0
            ? setNumberInScreen("Cannot divide by zero")
            : setNumberInScreen(parsedPrevNumber / parsedNumber);
          setOperation("done");
          break;
        case "x":
          setNumberInScreen(parsedPrevNumber * parsedNumber);
          setOperation("done");
          break;
        case "done":
          setNumberInScreen(numberInScreen);
          break;
        case null:
          setNumberInScreen(0);
          break;
      }
    }
  };

  return {
    numberInScreen,
    onChangeNumber,
    showOperation,
  };
};

export default useLogic;
