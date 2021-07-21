import React from "react";
import { Image, Overlay } from "./style";

const BgImage = ({ imageUrl }) => {
  return (
    <Image url={imageUrl}>
      <Overlay />
    </Image>
  );
};

export default BgImage;
