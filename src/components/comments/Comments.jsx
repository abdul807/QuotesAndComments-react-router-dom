import { useState, useEffect, useCallback } from "react";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import useHttp from "../../Hooks/use-http";
import { getAllcomments } from "../../lib/api";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";


const Comments = () => {
  const { sendRequest, status, data: loadedComments } = useHttp(getAllcomments);
  const params = useParams();
  const { quoteId } = params;

  useEffect(() => {
    sendRequest(quoteId);
   
  }, [sendRequest, quoteId]);

  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const AddCommentHandler = useCallback(() => {}, []);
  let comment;

  if (status === "pending") {
    comment = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && loadedComments.length > 0) {
    comment = <CommentsList comments={loadedComments} />
  }

  if (
    status === "completed" &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comment = <div className="centered">No comments Found</div>;
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm onAddComment={AddCommentHandler} />}
      {comment}
    </section>
  );
};

export default Comments;
