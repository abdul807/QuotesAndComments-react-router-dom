import React from "react";

import MainHeader from "./components/layout/MainHeader";
// import HighlightedQuote from "./components/quotes/HighlightedQuote";
// import QuoteForm from "./components/quotes/QuoteForm";
import AllQuotes from "./pages/AllQuotes";
// import QuoteItem from "./components/quotes/QuoteItem";
// import Homepage from "./pages/Homepage";
import { Navigate, Route, Routes } from "react-router-dom";
import QuoteDetails from "./pages/QuoteDetails";
// import AddQuote from "./pages/AddQuote";
import Comments from "./components/comments/Comments";
import NotFound from "./pages/NotFound";
import { Suspense } from "react";
import LoadingSpinner from "./components/UI/LoadingSpinner";
// import Comments from "./components/comments/Comments";

const AddQuote = React.lazy(() => import("./pages/AddQuote"));

function App() {
  // let data;
  // const AddHandler = (quote) => {
  //   console.log(quote);
  //   data = quote;
  //   console.log(data);
  //   console.log(quote);
  //   // <Homepage />
  // };

  const RedirectToHome = () => {
    return <Navigate to="/quotes" />;
  };

  return (
    <div>
      <MainHeader />
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<RedirectToHome />} />
          <Route path="/quotes" element={<AllQuotes />} />

          <Route path="/quotes/:quoteId" element={<QuoteDetails />}>
            <Route path="comments" element={<Comments />} />
          </Route>
          <Route path="/addquote" element={<AddQuote />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route
                path={`/quotes/:quoteId/comments`}
                element={<Comments />}
              /> */}
          {/* <Route path="/quotes/:quoteId/comments" element={< />} /> */}

          {/* <Route path="/quotes" element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route
          path="/addquote"
          element={<QuoteForm onAddQuote={AddHandler} />}
        /> */}
          {/* <Route path="/quotes" element={<QuoteItem />} /> */}
          {/* <Route
          path="/quotes/:quoteId"
          element={
            <HighlightedQuote text="{data.text}" author="{data.author}" />
          }
        /> */}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
