import { convertMillis } from "../utils";

const TimerDisplay = (props) => {
    return (
      <div class="session-box">
        <div id="timer-label">{props.timerTitle}</div>
        <div id="time-left">{convertMillis(props.timeRemaining)}</div>
      </div>
    )
  }

  export default TimerDisplay;