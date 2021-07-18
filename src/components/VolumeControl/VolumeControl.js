

function VolumeControl(props) {
    return (
        <div className="volume-control">
            <input 
                type="range"                 
                id="volume-control"
                
                name="volumeControl"
                onChange={props.onChange} 
                value={props.value}
                min="0.02"
                max="1"
                step="0.02" />
        </div>
    );
}

export default VolumeControl;
