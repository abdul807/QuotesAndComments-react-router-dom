import React, { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NotFound from "./NotFound";
import LoadingSpinner from "../components/UI/LoadingSpinner";

import useHttp from "../Hooks/use-http";
import { getquote } from "../lib/api";

const QuoteDetails = () => {
  const { sendRequest, status, error, data:quote } = useHttp(getquote, true);
  const params = useParams();
  const { quoteId } = params;
  // console.log(params.quoteId);
  // const quot = loadedQuotes.find((quote) => { return quote.id == params.quoteId});

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "error") {
    return <p className="centered focused">{error}</p>;
  }
  //  console.log(quote)

  //  const quot = loadedQuotes.find((quote) => { return quote.id == params.quoteId});

  if(!quote.text){
    return <NotFound />
  }

  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Outlet />
    </div>
  );
};

export default QuoteDetails;
