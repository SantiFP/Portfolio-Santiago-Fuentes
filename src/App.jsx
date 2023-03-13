import Button from "./components/Buttons";
import classes from "./App.module.css";
import Result from "./components/Result";
import useLogic from "./logic/useLogic";
import useShowOperation from "./logic/useShowOperation";

function App() {
  const { numberInScreen, showResult } = useLogic();
  const { operation, showOperation } = useShowOperation();

  return (
    <>
      <Result number={numberInScreen} operation={operation} />
      <div className={classes.calculatorGrid}>
        <Button
          onShowOperation={showOperation}
          onShowResult={showResult}
          className={classes.operations}
          text={"AC"}
        />
        <Button
          onShowOperation={showOperation}
          onShowResult={showResult}
          className={classes.operations}
          text={"+/-"}
        />
        <Button
          onShowOperation={showOperation}
          onShowResult={showResult}
          className={classes.operations}
          text={"%"}
        />
        <Button
          onShowOperation={showOperation}
          onShowResult={showResult}
          className={classes.operations}
          text={"÷"}
        />
        <Button
          onShowOperation={showOperation}
          onShowResult={showResult}
          text={"7"}
        />
        <Button
          onShowOperation={showOperation}
          onShowResult={showResult}
          text={"8"}
        />
        <Button
          onShowOperation={showOperation}
          onShowResult={showResult}
          text={"9"}
        />
        <Button
          onShowOperation={showOperation}
          onShowResult={showResult}
          className={classes.operations}
          text={"x"}
        />
        <Button
          onShowOperation={showOperation}
          onShowResult={showResult}
          text={"4"}
        />
        <Button
          onShowOperation={showOperation}
          onShowResult={showResult}
          text={"5"}
        />
        <Button
          onShowOperation={showOperation}
          onShowResult={showResult}
          text={"6"}
        />
        <Button
          onShowOperation={showOperation}
          onShowResult={showResult}
          className={classes.operations}
          text={"-"}
        />
        <Button
          onShowOperation={showOperation}
          onShowResult={showResult}
          text={"1"}
        />
        <Button
          onShowOperation={showOperation}
          onShowResult={showResult}
          text={"2"}
        />
        <Button
          onShowOperation={showOperation}
          onShowResult={showResult}
          text={"3"}
        />
        <Button
          onShowOperation={showOperation}
          onShowResult={showResult}
          className={classes.operations}
          text={"+"}
        />
        <Button
          onShowOperation={showOperation}
          onShowResult={showResult}
          className={classes.zero}
          text={"0"}
        />
        <Button
          onShowOperation={showOperation}
          onShowResult={showResult}
          text={"."}
        />
        <Button
          onShowOperation={showOperation}
          onShowResult={showResult}
          className={classes.operations}
          text={"="}
        />
      </div>
    </>
  );
}

export default App;
