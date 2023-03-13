import classes from "./Buttons.module.css";

const Button = ({ text, className, onShowResult,onShowOperation }) => {
  const showNumber = () => {
    onShowResult(text);
    onShowOperation(text)
  };

  return (
    <button
      onClick={showNumber}
      className={`${classes.items} ${className && className}`}
    >
      {text}
    </button>
  );
};

export default Button;
