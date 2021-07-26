import React from "react";
import Clock from "../clock";
import Button from "../button";
import { LocationText, WelcomeText, Section, LeftSide, Icon } from "./style";
import moon from "../../assets/moon.png";
import { useSelector } from "react-redux";

const BottomSection = ({ props }) => {
  const showInfoBox = useSelector((state) => state.show_infobox);
  return (
    <Section translate={showInfoBox}>
      <LeftSide>
        <WelcomeText>
          <Icon src={moon} alt="" /> GOOD NIGHT, THE TIME IS
        </WelcomeText>
        <Clock />
        <LocationText>IN CARACAS, VENEZUELA</LocationText>
      </LeftSide>
      <Button />
    </Section>
  );
};

export default BottomSection;
