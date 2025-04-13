import { Fragment } from "react";
import classes from "./HighlightedQuote.module.css";
import { Link } from "react-router-dom";

const HighlightedQuote = (props) => {
 

  return (
    <Fragment>
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
    <Link to="comments" className={classes.sorting}>Show Comments</Link>
    </Fragment>
  );
};

export default HighlightedQuote;
