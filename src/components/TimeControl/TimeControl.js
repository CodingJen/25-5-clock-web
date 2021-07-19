import React from "react";

import { ControlLabel, CurrentValue, Arrow } from "./TimeControl.styled";

const TimeControl = (props) => {
  return (
    <React.Fragment>
      <ControlLabel htmlFor="" id={props.labelId}>
        {props.name}
      </ControlLabel>
      <CurrentValue id={props.id}>{props.length}</CurrentValue>
      <Arrow
        onClick={props.onClick}
        id={props.upId}
        data-val="1"
        className="arrow fas fa-arrow-up"
      ></Arrow>
      <Arrow
        onClick={props.onClick}
        id={props.downId}
        data-val="-1"
        className="arrow fas fa-arrow-down"
      ></Arrow>
    </React.Fragment>
  );
};

export default TimeControl;
