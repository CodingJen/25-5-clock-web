import { Wrapper, Slider } from "./VolumeControl.styled";

function VolumeControl(props) {
  return (
    <Wrapper className="volume-control">
      <Slider
        type="range"
        id="volume-control"
        name="volumeControl"
        onChange={props.onChange}
        value={props.value}
        min="0.02"
        max="1"
        step="0.02"
      />
    </Wrapper>
  );
}

export default VolumeControl;
