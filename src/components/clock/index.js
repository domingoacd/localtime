import React, { useEffect, useRef, useState } from "react";
import { getCurrentHour, getFormatedTime } from "../../functions";
import { Time } from "./style";

const Clock = (props) => {
  const previousTime = useRef(getFormatedTime());
  const [currentTime, setCurrentTime] = useState(getFormatedTime());

  useEffect(() => {
    setInterval(() => {
      if (getFormatedTime() !== previousTime.current) {
        previousTime.current = getFormatedTime();
        setCurrentTime(previousTime.current);
      }
    }, 1000);
  }, []);
  return <Time>{currentTime}</Time>;
};

export default Clock;
