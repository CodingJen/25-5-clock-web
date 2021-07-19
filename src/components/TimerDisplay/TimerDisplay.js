import { convertMillis } from "../../utils";

import { Wrapper, Label, Countdown } from "./TimerDisplay.styled";

const TimerDisplay = (props) => {
  return (
    <Wrapper className="session-box">
      <Label id="timer-label">{props.timerTitle}</Label>
      <Countdown id="time-left">{convertMillis(props.timeRemaining)}</Countdown>
    </Wrapper>
  );
};

export default TimerDisplay;
