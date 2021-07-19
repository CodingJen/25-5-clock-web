 import React from "react";
 
 const TimeControl = (props) => {
    return (
      <React.Fragment>
        <label htmlFor="" className="selector-label" id={props.labelId}>{props.name}</label>
          <span className="selector-num" id={props.id}>{props.length}</span>
          <i onClick={props.onClick} id={props.upId} data-val="1" className="arrow fas fa-arrow-up"></i>
          <i onClick={props.onClick} id={props.downId} data-val="-1" className="arrow fas fa-arrow-down"></i>
      </React.Fragment>
    )
  }

 export default TimeControl;