import React from "react";
import { Blockquote, QuoteAuthor } from "./style";
const Quote = ({ quoteData = {} }) => {
  return (
    <Blockquote>
      {quoteData.quote ? '"' + quoteData.quote + '"' : ""}
      <QuoteAuthor>{quoteData.author ? quoteData.author : ""}</QuoteAuthor>
    </Blockquote>
  );
};

export default Quote;
