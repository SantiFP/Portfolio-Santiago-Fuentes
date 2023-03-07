import classes from "./Buttons.module.css";

const Button = ({ text, className, onClick }) => {
  const showNumber = () => {
    console.log();
    onClick(text);
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
