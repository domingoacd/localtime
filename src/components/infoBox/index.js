import React from "react";
import { Container, Col, InfoElement, InfoName, Info } from "./style";

const InfoBox = (props) => {
  return (
    <Container>
      <Col>
        <InfoElement>
          <InfoName>CURRENT TIMEZONE</InfoName>
          <Info>Venezuelan VET</Info>
        </InfoElement>
        <InfoElement>
          <InfoName>DAY OF THE WEEK</InfoName>
          <Info>1</Info>
        </InfoElement>
      </Col>
      <Col>
        <InfoElement>
          <InfoName>DAY OF THE YEAR</InfoName>
          <Info>125</Info>
        </InfoElement>
        <InfoElement>
          <InfoName>WEEK NUMBER</InfoName>
          <Info>29</Info>
        </InfoElement>
      </Col>
    </Container>
  );
};

export default InfoBox;
