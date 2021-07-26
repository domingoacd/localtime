import React from "react";
import { Btn, Arrow } from "./style";
import arrow from "../../assets/arrow.png";
import { useDispatch, useSelector } from "react-redux";
import { hideInfoBox, showInfoBox } from "../../store/actions";

const Button = (props) => {
  const dispatch = useDispatch();
  const show_infobox = useSelector((state) => state.show_infobox);

  const toggleInfoBox = (e) => {
    if (show_infobox) {
      dispatch(hideInfoBox());
    } else {
      dispatch(showInfoBox());
    }
  };

  return (
    <Btn onClick={toggleInfoBox}>
      {show_infobox ? "Show less " : "Show more "}
      <Arrow image={arrow} rotate={show_infobox} />
    </Btn>
  );
};

export default Button;
