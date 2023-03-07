import Button from "./components/Buttons";
import classes from "./App.module.css";
import Result from "./components/Result";
import useLogic from "./logic/useLogic";

function App() {
  
  const { numberInScreen, onChangeNumber,showOperation } = useLogic();

  return (
    <>
      <Result number={numberInScreen} showOperation={showOperation} />
      <div className={classes.calculatorGrid}>
        <Button
          onClick={onChangeNumber}
          className={classes.operations}
          text={"AC"}
        />
        <Button
          onClick={onChangeNumber}
          className={classes.operations}
          text={"+/-"}
        />
        <Button
          onClick={onChangeNumber}
          className={classes.operations}
          text={"%"}
        />
        <Button
          onClick={onChangeNumber}
          className={classes.operations}
          text={"÷"}
        />
        <Button onClick={onChangeNumber} text={"7"} />
        <Button onClick={onChangeNumber} text={"8"} />
        <Button onClick={onChangeNumber} text={"9"} />
        <Button
          onClick={onChangeNumber}
          className={classes.operations}
          text={"x"}
        />
        <Button onClick={onChangeNumber} text={"4"} />
        <Button onClick={onChangeNumber} text={"5"} />
        <Button onClick={onChangeNumber} text={"6"} />
        <Button
          onClick={onChangeNumber}
          className={classes.operations}
          text={"-"}
        />
        <Button onClick={onChangeNumber} text={"1"} />
        <Button onClick={onChangeNumber} text={"2"} />
        <Button onClick={onChangeNumber} text={"3"} />
        <Button
          onClick={onChangeNumber}
          className={classes.operations}
          text={"+"}
        />
        <Button onClick={onChangeNumber} className={classes.zero} text={"0"} />
        <Button onClick={onChangeNumber} text={"."} />
        <Button
          onClick={onChangeNumber}
          className={classes.operations}
          text={"="}
        />
      </div>
    </>
  );
}

export default App;
