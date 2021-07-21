import React from "react";
import Clock from "../clock";
import Button from "../button";
import { LocationText, WelcomeText, Section, LeftSide, Icon } from "./style";
import moon from "../../assets/moon.png";

const BottomSection = ({ props }) => {
  return (
    <Section>
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
