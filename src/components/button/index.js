import React from "react";
import { Btn, Arrow } from "./style";
import arrow from "../../assets/arrow.png";

const Button = (props) => {
  return (
    <Btn>
      Show more <Arrow image={arrow} />
    </Btn>
  );
};

export default Button;
