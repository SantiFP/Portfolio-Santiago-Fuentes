import { useState } from "react";

const useShowOperation = () => {

    const [operation,setOperation] = useState();
    let signs = ["+", "-", "x", "÷", "="];

    const showOperation = (text) => {

        if (text.match(/[0-9]+/)) {
            console.log(text);
        }
        setOperation(text)



    };
    return {
        operation,
        showOperation
    }
};

export default useShowOperation;