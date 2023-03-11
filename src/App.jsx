import Button from "./components/Buttons";
import classes from "./App.module.css";
import Result from "./components/Result";
import useLogic from "./logic/useLogic";

function App() {
  
  const { numberInScreen, showResult } = useLogic();

  return (
    <>
      <Result number={numberInScreen}  />
      <div className={classes.calculatorGrid}>
        <Button
          onShowResult={showResult}
          className={classes.operations}
          text={"AC"}
        />
        <Button
          onShowResult={showResult}
          className={classes.operations}
          text={"+/-"}
        />
        <Button
          onShowResult={showResult}
          className={classes.operations}
          text={"%"}
        />
        <Button
          onShowResult={showResult}
          className={classes.operations}
          text={"÷"}
        />
        <Button onShowResult={showResult} text={"7"} />
        <Button onShowResult={showResult} text={"8"} />
        <Button onShowResult={showResult} text={"9"} />
        <Button
          onShowResult={showResult}
          className={classes.operations}
          text={"x"}
        />
        <Button onShowResult={showResult} text={"4"} />
        <Button onShowResult={showResult} text={"5"} />
        <Button onShowResult={showResult} text={"6"} />
        <Button
          onShowResult={showResult}
          className={classes.operations}
          text={"-"}
        />
        <Button onShowResult={showResult} text={"1"} />
        <Button onShowResult={showResult} text={"2"} />
        <Button onShowResult={showResult} text={"3"} />
        <Button
          onShowResult={showResult}
          className={classes.operations}
          text={"+"}
        />
        <Button onShowResult={showResult} className={classes.zero} text={"0"} />
        <Button onShowResult={showResult} text={"."} />
        <Button
          onShowResult={showResult}
          className={classes.operations}
          text={"="}
        />
      </div>
    </>
  );
}

export default App;
