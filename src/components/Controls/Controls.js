import { Wrapper, Button } from "./Controls.styled";

const Controls = (props) => {
  const icon = props.paused ? (
    <i className="fas fa-play"></i>
  ) : (
    <i className="fas fa-pause"></i>
  );
  return (
    <Wrapper className="controls">
      <Button
        className="control-button"
        id="start_stop"
        onClick={props.startStopHandler}
      >
        {icon}
      </Button>
      <Button
        className="control-button"
        id="reset"
        onClick={props.resetHandler}
      >
        <i className="fas fa-sync-alt"></i>
      </Button>
    </Wrapper>
  );
};

export default Controls;
