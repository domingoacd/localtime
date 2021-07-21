import React from "react";
import { Blockquote, QuoteAuthor } from "./style";

const Quote = (props) => {
  return (
    <Blockquote>
      "Don’t postpone joy until you have learned all of your lessons. Joy is
      your lesson."
      <QuoteAuthor>Alan Cohen</QuoteAuthor>
    </Blockquote>
  );
};

export default Quote;
