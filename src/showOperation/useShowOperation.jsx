import { useState } from "react";
import CalcContext from "../store/calc-context";
import { useContext } from "react";

const useShowOperation = () => {
  const [operation, setOperation] = useState("");
  const [textState, setTextState] = useState("");
  const [operating, setOperating] = useState(false);
  const [done, setDone] = useState(false);

  const calcCtx = useContext(CalcContext);

  const { numberInScreen } = calcCtx;

  let signsArray = ["+", "-", "x", "÷"];

  const showOperation = (text) => {
    setTextState(text);

    if (text.match(/[0-9]+/)) {
      if (done) {
        setOperation(text);
        setDone(false);
      } else {
        setOperating(true);
        setOperation((prevState) =>
          !prevState || (signsArray.includes(text) && textState !== "=")
            ? (console.log("chau"), `${text}`)
            : `${prevState}${text}`
        );
      }
    }

    if (text === "." && textState !== ".") {
      if (
        textState !== "AC" &&
        textState !== "+/-" &&
        textState !== "%" &&
        textState !== "="
      ) {
        setOperation((prevState) =>
          !prevState || !textState.match(/[0-9]+/)
            ? `${prevState} 0${text}`
            : `${prevState}.`
        );
      } else if (textState === "+/-" || textState === "%") {
        setOperation((prevState) => `${prevState}.`);
      } else if (textState === "AC" || textState === "=") {
        setDone(false);
        setOperation("0.");
      }
    }

    if (text === "+/-" && operating && !signsArray.includes(textState)) {
      setOperation((prevState) => {
        let fromString = prevState.split("").reverse();
        let noSpace = true;

        for (let i = 0; i < fromString.length; i++) {
          if (fromString[i] === " ") {
            if (fromString[i - 1] === "-") {
              fromString.splice(i - 1, 1);
            } else {
              fromString.splice(i, 0, "-");
            }
            noSpace = false;
            break;
          }
        }

        if (noSpace && !fromString.includes("-")) {
          fromString.push("-");
        } else if (noSpace && fromString.includes("-")) {
          fromString.splice(fromString.length - 1, 1);
        }
        return fromString.reverse().join("");
      });
    }

    if (text === "%" && operating && !signsArray.includes(textState)) {
      setOperation((prevState) => {
        let arr = prevState.split("").reverse("");
        if (!arr.includes(" ")) {
          arr.unshift("/100)");
          arr.push("(");
          return arr.reverse().join("");
        }

        if (arr.includes(" ")) {
          for (let i = 0; i < arr.length; i++) {
            if (arr[i] === " ") {
              arr.splice(i, 0, "(");
              break;
            }
          }
          arr.unshift("/100)");
          return arr.reverse().join("");
        }
      });
    }

    if (signsArray.includes(text) && operation) {
      setDone(false);
      if (textState === "=") {
        setOperation(`${numberInScreen} ${text} `);
      }
      if (signsArray.includes(textState)) {
        setOperation((prevState) => {
          let arr = prevState.split("");
          arr.splice(prevState.length - 2, 1, text);
          return arr.join("");
        });
      } else if (text !== "=" && textState !== "=") {
        setOperation((prevState) => `${prevState} ${text} `);
      }
    }

    if (text === "=" && operating) {
      setOperating(false);
      setDone(true);
      if (
        textState.match(/[0-9]+/) ||
        textState === "+/-" ||
        textState === "%"
      ) {
        setOperation((prevState) => `${prevState} ${text}`);
      }
    }

    if (text === "AC") {
      setOperation("");
      setOperating(false);
      setDone(false);
    }
  };

  return {
    operation,
    showOperation,
  };
};

export default useShowOperation;
