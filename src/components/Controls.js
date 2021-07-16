const Controls = (props) => {
    const icon = props.paused ? <i class="fas fa-play"></i> : <i class="fas fa-pause"></i>;
    return (
      <div class="controls">
        <div className="control-button" id="start_stop" onClick={props.startStopHandler}>{icon}</div>
        <div className="control-button" id="reset" onClick={props.resetHandler}><i class="fas fa-sync-alt"></i></div>
      </div>
    )
  }

  export default Controls;