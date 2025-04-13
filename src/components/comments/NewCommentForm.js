import { useRef, useEffect } from "react";

import classes from "./NewCommentForm.module.css";
import useHttp from "../../Hooks/use-http";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../UI/LoadingSpinner";
import { Addcomment } from "../../lib/api";

const NewCommentForm = (props) => {
  const { sendRequest, status, error } = useHttp(Addcomment);
  const commentTextRef = useRef();
  const params = useParams();

  const { quoteId } = params;
  const {onAddComment} = props

  useEffect(() => {

    if(status === 'completed' && !error){
      onAddComment()
    }
    
   
  }, [sendRequest, status, onAddComment, error]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    console.log(commentTextRef.current.value);
    console.log(quoteId);

    const enteredData = commentTextRef.current.value



    sendRequest({commentData:{text:enteredData}, quoteId:quoteId});

    // optional: Could validate here

    // send comment to server
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === "pending" && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
