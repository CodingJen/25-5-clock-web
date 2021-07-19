const Controls = (props) => {
    const icon = props.paused ? <i className="fas fa-play"></i> : <i className="fas fa-pause"></i>;
    return (
      <div className="controls">
        <div className="control-button" id="start_stop" onClick={props.startStopHandler}>{icon}</div>
        <div className="control-button" id="reset" onClick={props.resetHandler}><i className="fas fa-sync-alt"></i></div>
      </div>
    )
  }

  export default Controls;