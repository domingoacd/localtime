import React from "react";
import Clock from "../clock";
import Button from "../button";
import { LocationText, WelcomeText, Section, LeftSide } from "./style";
const BottomSection = ({ props }) => {
  return (
    <Section>
      <LeftSide>
        <WelcomeText>GOOD NIGHT, THE TIME IS</WelcomeText>
        <Clock />
        <LocationText>IN CARACAS, VENEZUELA</LocationText>
      </LeftSide>
      <Button />
    </Section>
  );
};

export default BottomSection;
