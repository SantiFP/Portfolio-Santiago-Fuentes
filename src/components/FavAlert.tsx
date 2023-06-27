import { CSSTransition } from "react-transition-group";
import classes from "./FavAlert.module.css";
import { useRef } from "react";

const FavAlert: React.FC<{ isFav: boolean; children: React.ReactNode }> = (
  props
) => {
  const nodeRef = useRef<HTMLParagraphElement>(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={props.isFav}
      timeout={500}
      classNames={{
        enter: classes.enter,
        enterActive: classes.enterActive,
        exit: classes.exit,
        exitActive: classes.exitActive,
      }}
      mountOnEnter
      unmountOnExit
    >
      <div ref={nodeRef}>{props.children}</div>
    </CSSTransition>
  );
};

export default FavAlert;
