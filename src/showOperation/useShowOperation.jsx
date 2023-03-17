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

    if (!done) {
      if (text.match(/[0-9]+/)) {
        setOperating(true);
        setOperation((prevState) =>
          !prevState || signsArray.includes(text)
            ? `${text}`
            : `${prevState}${text}`
        );
      }

      if (text === "." && textState !== ".") {
        if (textState !== "AC" && textState !== '+/-' && textState !== '%') {
          setOperation((prevState) =>
            !prevState || !textState.match(/[0-9]+/) 
              ? `${prevState} 0${text}`
              : `${prevState}.`
          );
        }else if(textState === '+/-' || textState === '%'){
          setOperation(prevState => `${prevState}.`)
        } else if (textState === "AC") {
          setOperation("0.");
        }
      }

      if (text === "+/-" && operating) {
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

      if (text === "%" && operating) {
        setOperation((prevState) => {
          let f = prevState.split("").reverse();

          let expo = "";

          if (!f.includes(" ")) {
            if (!f.includes("(")) {
              f.push("(");
              f.unshift("/100)");
              return f.reverse().join("");
            }

            if (f[0] === ")") {
              f.unshift("^2");
              return f.reverse().join("");
            }

            if (f.indexOf("^") !== -1) {
              f.splice(0, 1, (Number(f[0]) + 1).toString());
              return f.reverse().join("");
            }
          }

          for (let i = 0; i < f.length; i++) {
            if (f[i] === "^") {
              expo = f[i];
              break;
            } else if (signsArray.includes(f[i])) {
              break;
            }
          }

          if (f.includes(" ") && f[0].match(/[0-9]+/) && !expo) {
            for (let i = 0; i < f.length; i++) {
              if (f[i] === " ") {
                f.splice(i, 0, "(");
                break;
              }
            }
            f.unshift("/100");
            f.unshift(")");
            return f.reverse().join("");
          }

          if (f[0] === ")") {
            f.unshift("^2");
            return f.reverse().join("");
          }

          if (expo) {
            f.splice(0, 1, (Number(f[0]) + 1).toString());
            return f.reverse().join("");
          }
        });
      }

      if (signsArray.includes(text) && operation && operating) {
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
        if (textState.match(/[0-9]+/) || textState === "+/-" || textState === '%') {
          setOperation((prevState) => `${prevState} ${text}`);
        }
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
