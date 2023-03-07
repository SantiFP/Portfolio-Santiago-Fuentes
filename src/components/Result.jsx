import classes from "./Result.module.css";

const Result = ({ number,showOperation }) => {
  return (
    <>
      <div className={classes.resultDiv}>
        <div className={`${classes.showResults} `}>
          <p style={{paddingRight:'1rem' ,paddingTop:'0.5rem'}}>{showOperation ? showOperation : 'operation will be shown here'}</p>
        </div>
        <div className={`${classes.resultFlex} `}>
          <p style={{ paddingRight: "1rem" }}>{number}</p>
        </div>
      </div>
    </>
  );
};

export default Result;
