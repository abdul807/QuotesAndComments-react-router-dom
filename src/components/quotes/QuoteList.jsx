import { Fragment } from "react";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";
import NoQuotesFound from "./NoQuotesFound";
import { useLocation, useNavigate } from "react-router-dom";

const QuoteList = (props) => {
  const SortQuotes = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
      if (ascending) {
        return quoteA.id < quoteB.id ? 1 : -1;
      } else {
        return quoteA.id > quoteB.id ? 1 : -1;
      }
    });
  };

  const navigate = useNavigate();
  const location = useLocation();
  const queryparams = new URLSearchParams(location.search);

  const isSortingAscending = queryparams.get("sort") === "asc";

  const sortedQuotes = SortQuotes(props.quotes, isSortingAscending);

  const handleSorting = () => {
    // navigate("/quotes?sort=" + (isSortingAscending ? "desc" : "asc"));
    navigate({
      pathname: "/quotes",
      search: "?sort=" + (isSortingAscending ? "desc" : "asc"),
    })
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
          <p></p>
        </ul>
      )}
    </Fragment>
  );
};

export default QuoteList;
