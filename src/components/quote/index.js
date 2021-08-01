import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuote } from "../../functions";
import { Blockquote, QuoteAuthor } from "./style";

const Quote = () => {
  const showInfoBox = useSelector((state) => state.show_infobox);
  const [quoteData, setQuoteData] = useState(false);
  useEffect(() => {
    getQuote().then((data) => setQuoteData(data));
  }, []);

  if (quoteData && quoteData.error) {
    console.error(quoteData.error);
  }
  return (
    <Blockquote show={!showInfoBox}>
      {quoteData.content ? '"' + quoteData.content + '"' : ""}
      <QuoteAuthor>{quoteData.author ? quoteData.author : ""}</QuoteAuthor>
    </Blockquote>
  );
};

export default Quote;
