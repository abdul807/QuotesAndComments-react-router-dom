import { Fragment, useRef } from 'react';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';
// import { unstable_usePrompt } from 'react-router-dom';
// import useHttp from '../../Hooks/use-http';
// import { Addquote } from '../../lib/api';
// import Prompt from 'react-router-prompt'

const QuoteForm = (props) => {
  // const [isEntering, SetisEntering] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();



  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  // unstable_usePrompt({
  //   when:isEntering,
  //   message:"Enter a valid information"
  // })

  

  const focusHandler = () =>{
    // SetisEntering(true)
    console.log('focused')
  }

  return (
    <Fragment>
    {/* <unstable_usePrompt when={isEntering} message="data will be lost" /> */}
    <Card>
      <form onFocus={focusHandler} className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className='btn'>Add Quote</button>
        </div>
      </form>
    </Card>
    </Fragment>
  );
};

export default QuoteForm;
