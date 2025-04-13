import React, { useEffect, useState } from "react";
import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../Hooks/use-http";
import { getAllquotes } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

// const quotes = [
//   {
//     id: 1,
//     text: "The greatest glory in living lies not in never falling, but in rising everytime we fall.",
//     author: "Nelson Mandela",
//     category: "Inspirational",
//   },
//   {
//     id: 2,
//     text: "Believe you can and you're halfway there.",
//     author: "Theodore Roosevelt",
//     category: "Inspirational",
//   },
// ];

const AllQuotes = () => {
  // const [quotes, setQuotes] = useState()
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllquotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

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

  if(status ==="completed" && (!loadedQuotes || loadedQuotes.length == 0)){
    return <NoQuotesFound />
  }

  return (
    <div>
      <QuoteList quotes={loadedQuotes} />
    </div>
  );
};

export default AllQuotes;
