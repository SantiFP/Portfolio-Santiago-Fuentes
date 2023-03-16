import { useState } from "react";

const useShowOperation = () => {
  const [operation, setOperation] = useState("");
  const [textState, setTextState] = useState("");
  const [operating, setOperating] = useState(false);

  let signsArray = ["+", "-", "x", "÷"];

  const showOperation = (text) => {
    setTextState(text);

    if (text.match(/[0-9]+/)) {
      setOperating(true);
      setOperation((prevState) =>
        !prevState || signsArray.includes(text)
          ? `${text}`
          : `${prevState}${text}`
      );
    }

    console.log("text: ", text);
    console.log("textState: ", textState);

    if (text === "=" && operating) {
      if (textState.match(/[0-9]+/) || textState === "+/-") {
        setOperation((prevState) => `${prevState} ${text}`);
      }
    }

    if (text === "." && textState !== ".") {
      if (textState !== "AC") {
        setOperation((prevState) =>
          !prevState || !textState.match(/[0-9]+/)
            ? `${prevState} 0${text}`
            : `${prevState}.`
        );
      } else if (textState === "AC") {
        setOperation("0.");
      }
    }

    if (text === "AC") {
      setOperation('');
      setOperating(false)
    }

    if (text === "+/-" && operating ) {
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

    if (signsArray.includes(text) && operation) {
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
  };
  return {
    operation,
    showOperation,
  };
};

export default useShowOperation;
