import { CSSTransition } from "react-transition-group";
import classes from "./FavAlert.module.css";
import { useRef } from "react";

const FavAlert: React.FC<{ favPrompt: boolean }> = (props) => {
  const nodeRef = useRef<HTMLParagraphElement>(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={props.favPrompt}
      timeout={1000}
      classNames={{
        enter: classes.enter,
        enterActive: classes.enterActive,
        exit: classes.exit,
        exitActive: classes.exitActive,
      }}
      mountOnEnter
    >
      <p className="fav" ref={nodeRef}>FAVORITES</p>
    </CSSTransition>
  );
};

export default FavAlert;
