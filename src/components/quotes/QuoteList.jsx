import { Fragment } from "react";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";
import NoQuotesFound from "./NoQuotesFound";
import { useLocation, useNavigate } from "react-router-dom";

const QuoteList = (props) => {
  const SortQuotes = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
      return ascending ? quoteB.id - quoteA.id : quoteA.id - quoteB.id;
    });
  };

  const navigate = useNavigate();
  const location = useLocation();
  const queryparams = new URLSearchParams(location.search);

  const isSortingAscending = queryparams.get("sort") === "asc";

  const sortedQuotes = SortQuotes(props.quotes, isSortingAscending);

  const handleSorting = () => {
    navigate("/quotes?sort=" + (isSortingAscending ? "desc" : "asc"));
    console.log(location);
    // console.log(query)
    console.log(isSortingAscending);
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={handleSorting}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      {sortedQuotes.length === 0 ? (
        <NoQuotesFound />
      ) : (
        <ul className={classes.list}>
          {sortedQuotes.map((quote) => (
            <QuoteItem
              key={quote.id}
              id={quote.id}
              author={quote.author}
              text={quote.text}
            />
          ))}
        </ul>
      )}
    </Fragment>
  );
};

export default QuoteList;
