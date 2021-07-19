import React from "react";

import Controls from "../Controls/Controls";
import TimerDisplay from "../TimerDisplay";
import TimeControl from "../TimeControl/TimeControl";
import VolumeControl from "../VolumeControl/VolumeControl";
import { minsToMilli } from "../../utils";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionLength: 25, //min
      breakLength: 5, //min
      paused: true,
      timeRemaining: 25 * 60 * 1000, // min * sec * milliseconds
      runningInterval: null,
      lastTime: null,
      break: false,
      volume: 1,
    };
    this.setSession = this.setSession.bind(this);
    this.setBreak = this.setBreak.bind(this);
    this.handleTick = this.handleTick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleStartStop = this.handleStartStop.bind(this);
    this.playSound = this.playSound.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.updateLocalStorage = this.updateLocalStorage.bind(this);

    this.localStore = {};
  }

  componentDidMount() {
      this.localStore = JSON.parse(localStorage.getItem('clockData')) || {};
      const sessionLength = parseInt(this.localStore.sessionLength) || 25;
      const breakLength = parseInt(this.localStore.breakLength) || 5;
      const timeRemaining = minsToMilli(sessionLength);
      const volume = parseFloat(this.localStore.volume) || 1;

    this.setState({
      sessionLength,
      breakLength,
      timeRemaining,
      volume,
    })
  }

  updateLocalStorage(tag, value) {
    this.localStore[tag] = value;
    localStorage.setItem('clockData', JSON.stringify(this.localStore));
  }

  setSession(e) {
    if (!this.state.paused) return; // don't do anything if we're not paused
    const changeAmount = parseInt(e.target.dataset.val);
    let newLength = this.state.sessionLength + changeAmount;
    
    if (newLength < 1) newLength = 1;
    if (newLength > 60) newLength = 60;
    
    this.setState({sessionLength: newLength});

    this.updateLocalStorage('sessionLength', newLength);

    if (!this.state.break)
      this.setState({ timeRemaining: minsToMilli(newLength) });
  }

  setBreak(e) {
    if (!this.state.paused) return; // don't do anything if we're not paused
    const changeAmount = parseInt(e.target.dataset.val);
    let newLength = this.state.breakLength + changeAmount;
    
    if (newLength < 1) newLength = 1;
    if (newLength > 60) newLength = 60;

    this.setState({ breakLength: newLength });
    this.updateLocalStorage('breakLength', newLength);

    if (this.state.break)
      this.setState({ timeRemaining: minsToMilli(newLength) });
  }

  handleTick() {
    // going to assume if we're here and it says paused this is the first loop; so set a starting time
    if (this.state.paused) {
      this.setState(() => ({
        lastTime: Date.now(),
        paused: false,
      }));
    } else {
      const now = Date.now();
      const remain =
        this.state.timeRemaining - (Date.now() - this.state.lastTime);
      if (remain < 1000) this.playSound(true);
      // test if the timer needs to be swapped
      if (remain < 0) {
        this.setState((state) => {
          return {
            lastTime: now,
            timeRemaining: state.break
              ? minsToMilli(state.sessionLength)
              : minsToMilli(state.breakLength),
            break: !state.break,
          };
        });
        this.playSound();
      } else {
        this.setState((state) => ({
          timeRemaining: remain,
          lastTime: now,
        }));
      }
    }
  }

  playSound(testIfAlreadyPlaying = false) {
    const soundClip = document.getElementById("beep");
    if (testIfAlreadyPlaying && !soundClip.paused) return;
    soundClip.currentTime = 0;
    soundClip.play();
  }

  handleVolume(e) {
    const soundClip = document.getElementById("beep");
    const volume = parseFloat(e.target.value);
    soundClip.volume = volume;
    this.setState({volume})
    this.updateLocalStorage('volume', volume);
  }

  handleReset() {
    if (!this.state.paused) clearTimeout(this.state.runningInterval);
    const soundClip = document.getElementById("beep");
    soundClip.pause();
    soundClip.currentTime = 0;
    this.setState((state) => ({
      break: false,
      paused: true,
      sessionLength: 25,
      breakLength: 5,
      timeRemaining: 25 * 60 * 1000,
      intervalTimer: null,
    }));
    this.updateLocalStorage('breakLength', 5)
    this.updateLocalStorage('sessionLength', 25)
  }

  handleStartStop() {
    if (this.state.paused) {
      this.setState({
        runningInterval: setInterval(this.handleTick, 100),
        paused: false,
        lastTime: Date.now(),
      });
    } else {
      clearTimeout(this.state.runningInterval);
      this.setState({
        runningInterval: null,
        paused: true,
      });
    }
  }

  render() {
    return (
      <main>
        <div className="stopwatch-body">
          <TimerDisplay
            timerTitle={this.state.break ? "Break" : "Session"}
            timeRemaining={this.state.timeRemaining}
          />

          <div className="bottom-half">
            <div className="selectors">
              <TimeControl
                id="break-length"
                name="Break"
                labelId="break-label"
                length={this.state.breakLength}
                upId="break-increment"
                downId="break-decrement"
                onClick={this.setBreak}
              />

              <TimeControl
                id="session-length"
                name="Session"
                labelId="session-label"
                length={this.state.sessionLength}
                upId="session-increment"
                downId="session-decrement"
                onClick={this.setSession}
              />
              <VolumeControl
                onChange={this.handleVolume}
                value={this.state.volume} />
            </div>

            <Controls
              paused={this.state.paused}
              startStopHandler={this.handleStartStop}
              resetHandler={this.handleReset}
            />
          </div>
        </div>

        <audio
          id="beep"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        />
      </main>
    );
  }
}

export default Clock;
