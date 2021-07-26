import React from "react";
import { useSelector } from "react-redux";
import { Blockquote, QuoteAuthor } from "./style";

const Quote = ({ quoteData = {} }) => {
  const showInfoBox = useSelector((state) => state.show_infobox);
  return (
    <Blockquote show={!showInfoBox}>
      {quoteData.quote ? '"' + quoteData.quote + '"' : ""}
      <QuoteAuthor>{quoteData.author ? quoteData.author : ""}</QuoteAuthor>
    </Blockquote>
  );
};

export default Quote;
