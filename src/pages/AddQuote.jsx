import React from "react";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom"
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../Hooks/use-http";
import { Addquote } from "../lib/api";

const AddQuote = () => {
const navigate = useNavigate()
const {sendRequest, status} = useHttp(Addquote)


useEffect(() => {
  if(status === 'completed'){
    navigate('/quotes')
  }
  return () => {
    
  };
}, [status,navigate]);

  const QuoteAddHandler = (data) => {
    // const transformedquote = {
    //   id: 1,
    //   ...data
    // }
    // console.log(transformedquote)
    sendRequest(data)
  };
  return (
    <div>
      <QuoteForm isLoading={status === 'pending'} onAddQuote={QuoteAddHandler} />
    </div>
  );
};

export default AddQuote;
