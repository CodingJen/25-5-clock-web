import React, { useState, useEffect } from "react";

import Controls from "../Controls/Controls";
import TimerDisplay from "../TimerDisplay/TimerDisplay";
import TimeControl from "../TimeControl/TimeControl";
import VolumeControl from "../VolumeControl/VolumeControl";
import { minsToMilli } from "../../utils";

//Styles
import { Wrapper, Body, ControlSection, ControlGrid } from "./Clock.styled";

function useMergeState(initialState) {
  const [state, setState] = useState(initialState);

  const setMergedState = (newState) => {
    console.log("setMergedState", newState);
    setState((prevState) => Object.assign({}, prevState, newState));
  };
  return [state, setMergedState];
}

const localStore = {};

const Clock = () => {
  const [state, setState] = useMergeState({
    sessionLength: 25, //min
    breakLength: 5, //min
    paused: true,
    timeRemaining: 25 * 60 * 1000, // min * sec * milliseconds
    runningInterval: null,
    lastTime: null,
    break: false,
    volume: 1,
  });

  /*  Has to be a better way !!! */
  function setSessionLength(newLength) {
    setState((last) => ({
      sessionLength: last.sessionLength,
      breakLength: last.breakLength,
      paused: last.paused,
      timeRemaining: last.timeRemaining,
      runningInterval: last.runningInterval,
      lastTime: last.lastTime,
      break: last.break,
      volume: last.volume,
    }));
  }
  function setBreakLength(newLength) {
    setState((last) => ({
      sessionLength: last.sessionLength,
      breakLength: last.breakLength,
      paused: last.paused,
      timeRemaining: last.timeRemaining,
      runningInterval: last.runningInterval,
      lastTime: last.lastTime,
      break: last.break,
      volume: last.volume,
    }));
  }
  function setPaused(newLength) {
    setState((last) => ({
      sessionLength: last.sessionLength,
      breakLength: last.breakLength,
      paused: last.paused,
      timeRemaining: last.timeRemaining,
      runningInterval: last.runningInterval,
      lastTime: last.lastTime,
      break: last.break,
      volume: last.volume,
    }));
  }
  function setTimeRemaining(newLength) {
    setState((last) => ({
      sessionLength: last.sessionLength,
      breakLength: last.breakLength,
      paused: last.paused,
      timeRemaining: last.timeRemaining,
      runningInterval: last.runningInterval,
      lastTime: last.lastTime,
      break: last.break,
      volume: last.volume,
    }));
  }
  function setSessionLength(newLength) {
    setState((last) => ({
      sessionLength: last.sessionLength,
      breakLength: last.breakLength,
      paused: last.paused,
      timeRemaining: last.timeRemaining,
      runningInterval: last.runningInterval,
      lastTime: last.lastTime,
      break: last.break,
      volume: last.volume,
    }));
  }
  function setSessionLength(newLength) {
    setState((last) => ({
      sessionLength: last.sessionLength,
      breakLength: last.breakLength,
      paused: last.paused,
      timeRemaining: last.timeRemaining,
      runningInterval: last.runningInterval,
      lastTime: last.lastTime,
      break: last.break,
      volume: last.volume,
    }));
  }
  function setSessionLength(newLength) {
    setState((last) => ({
      sessionLength: last.sessionLength,
      breakLength: last.breakLength,
      paused: last.paused,
      timeRemaining: last.timeRemaining,
      runningInterval: last.runningInterval,
      lastTime: last.lastTime,
      break: last.break,
      volume: last.volume,
    }));
  }
  function setSessionLength(newLength) {
    setState((last) => ({
      sessionLength: last.sessionLength,
      breakLength: last.breakLength,
      paused: last.paused,
      timeRemaining: last.timeRemaining,
      runningInterval: last.runningInterval,
      lastTime: last.lastTime,
      break: last.break,
      volume: last.volume,
    }));
  }

  console.log("clock rerender", state);

  /*   constructor(props) {
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
*/

  useEffect(() => {
    console.log("running effect");
    const getAndSet = () => {
      const tempStore = JSON.parse(localStorage.getItem("clockData")) || {};

      const sessionLength = parseInt(tempStore.sessionLength) || 25;
      const breakLength = parseInt(tempStore.breakLength) || 5;
      const timeRemaining = minsToMilli(sessionLength);
      const volume = parseFloat(tempStore.volume) || 1;

      setState({
        sessionLength, //min
        breakLength, //min
        paused: true,
        timeRemaining, // min * sec * milliseconds
        runningInterval: null,
        lastTime: null,
        break: false,
        volume,
      });
    };

    getAndSet();
  }, []);

  /*   componentDidMount() {
    this.localStore = JSON.parse(localStorage.getItem("clockData")) || {};
    const sessionLength = parseInt(this.localStore.sessionLength) || 25;
    const breakLength = parseInt(this.localStore.breakLength) || 5;
    const timeRemaining = minsToMilli(sessionLength);
    const volume = parseFloat(this.localStore.volume) || 1;

    this.setState({
      sessionLength,
      breakLength,
      timeRemaining,
      volume,
    });
  } */

  function updateLocalStorage(tag, value) {
    console.log("local store in updateLocalStorage()", localStore);
    localStore[tag] = value;
    localStorage.setItem("clockData", JSON.stringify(localStore));
  }

  function setSession(e) {
    if (!state.paused) return; // don't do anything if we're not paused
    const changeAmount = parseInt(e.target.dataset.val);
    let newLength = state.sessionLength + changeAmount;

    if (newLength < 1) newLength = 1;
    if (newLength > 60) newLength = 60;

    setState({ sessionLength: newLength });

    updateLocalStorage("sessionLength", newLength);

    if (!state.break) setState({ timeRemaining: minsToMilli(newLength) });
  }

  function setBreak(e) {
    if (!state.paused) return; // don't do anything if we're not paused
    const changeAmount = parseInt(e.target.dataset.val);
    let newLength = state.breakLength + changeAmount;

    if (newLength < 1) newLength = 1;
    if (newLength > 60) newLength = 60;

    setState({ breakLength: newLength });
    updateLocalStorage("breakLength", newLength);

    if (state.break) setState({ timeRemaining: minsToMilli(newLength) });
  }

  function handleTick() {
    console.log("start of handleTick() timeRemaining", state.timeRemaining);
    const now = Date.now();
    const remain = state.timeRemaining - (Date.now() - state.lastTime);

    console.log("remain", remain);

    if (remain < 1000) playSound(true);
    // test if the timer needs to be swapped
    if (remain < 0) {
      setState((lastState) => {
        return {
          lastTime: now,
          timeRemaining: lastState.break
            ? minsToMilli(lastState.sessionLength)
            : minsToMilli(lastState.breakLength),
          break: !lastState.break,
        };
      });
      playSound();
    } else {
      setState((lastState) => ({
        timeRemaining: remain,
        lastTime: now,
      }));
    }
    console.log("end of handleTick() state.timeRemaining", state.timeRemaining);
  }

  function playSound(testIfAlreadyPlaying = false) {
    const soundClip = document.getElementById("beep");
    if (testIfAlreadyPlaying && !soundClip.paused) return;
    soundClip.currentTime = 0;
    soundClip.play();
  }

  function handleVolume(e) {
    const soundClip = document.getElementById("beep");
    const volume = parseFloat(e.target.value);
    soundClip.volume = volume;
    setState({ volume });
    updateLocalStorage("volume", volume);
  }

  function handleReset() {
    if (!state.paused) clearTimeout(state.runningInterval);
    const soundClip = document.getElementById("beep");
    soundClip.pause();
    soundClip.currentTime = 0;
    setState((lastState) => ({
      break: false,
      paused: true,
      sessionLength: 25,
      breakLength: 5,
      timeRemaining: 25 * 60 * 1000,
      intervalTimer: null,
    }));
    updateLocalStorage("breakLength", 5);
    updateLocalStorage("sessionLength", 25);
  }

  function handleStartStop() {
    if (state.paused) {
      setState({
        runningInterval: setInterval(handleTick, 100),
        paused: false,
        lastTime: Date.now(),
      });
    } else {
      clearTimeout(state.runningInterval);
      setState({
        runningInterval: null,
        paused: true,
      });
    }
  }
  return (
    <Wrapper>
      <Body className="stopwatch-body">
        <TimerDisplay
          timerTitle={state.break ? "Break" : "Session"}
          timeRemaining={state.timeRemaining}
        />

        <ControlSection className="bottom-half">
          <ControlGrid className="selectors">
            <TimeControl
              id="break-length"
              name="Break"
              labelId="break-label"
              length={state.breakLength}
              upId="break-increment"
              downId="break-decrement"
              onClick={setBreak}
            />

            <TimeControl
              id="session-length"
              name="Session"
              labelId="session-label"
              length={state.sessionLength}
              upId="session-increment"
              downId="session-decrement"
              onClick={setSession}
            />
            <VolumeControl onChange={handleVolume} value={state.volume} />
          </ControlGrid>

          <Controls
            paused={state.paused}
            startStopHandler={handleStartStop}
            resetHandler={handleReset}
          />
        </ControlSection>
      </Body>

      <audio
        id="beep"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </Wrapper>
  );
};

export default Clock;
