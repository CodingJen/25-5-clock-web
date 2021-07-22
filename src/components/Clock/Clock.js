import React, { useState, useEffect } from "react";

import Controls from "../Controls/Controls";
import TimerDisplay from "../TimerDisplay/TimerDisplay";
import TimeControl from "../TimeControl/TimeControl";
import VolumeControl from "../VolumeControl/VolumeControl";
import { minsToMilli } from "../../utils";

//Styles
import { Wrapper, Body, ControlSection, ControlGrid } from "./Clock.styled";

const localStore = {};

const Clock = () => {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [isPaused, setIsPaused] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState(minsToMilli(25));
  const [lastTime, setLastTime] = useState(Date.now());
  const [isBreak, setIsBreak] = useState(false);
  const [appVolume, setAppVolume] = useState(1);

  useEffect(() => {
    let timer;
    if (!isPaused) {
      timer = setInterval(handleTick, 200);
    }
    return () => clearTimeout(timer);
  }, [isPaused]);

  useEffect(() => {
    if (timeRemaining < 1000) playSound(true);
  }, [timeRemaining]);

  useEffect(() => {
    const getAndSet = () => {
      const tempStore = JSON.parse(localStorage.getItem("clockData")) || {};

      const sessLength = parseInt(tempStore.sessionLength) || 25;
      setSessionLength(sessLength);
      setTimeRemaining(minsToMilli(sessLength));
      setBreakLength(parseInt(tempStore.breakLength) || 5);
      setAppVolume(parseFloat(tempStore.volume) || 1);
    };

    getAndSet();
  }, []);

  function updateLocalStorage(tag, value) {
    localStore[tag] = value;
    localStorage.setItem("clockData", JSON.stringify(localStore));
  }

  function setSession(e) {
    if (!isPaused) return; // don't do anything if we're not paused
    const changeAmount = parseInt(e.target.dataset.val);
    let newLength = sessionLength + changeAmount;

    if (newLength < 1) newLength = 1;
    if (newLength > 60) newLength = 60;

    setSessionLength(newLength);
    updateLocalStorage("sessionLength", newLength);

    if (!isBreak) setTimeRemaining(minsToMilli(newLength));
  }

  function setBreak(e) {
    if (!isPaused) return; // don't do anything if we're not paused
    const changeAmount = parseInt(e.target.dataset.val);
    let newLength = breakLength + changeAmount;

    if (newLength < 1) newLength = 1;
    if (newLength > 60) newLength = 60;

    setBreakLength(newLength);
    updateLocalStorage("breakLength", newLength);

    if (isBreak) setTimeRemaining(minsToMilli(newLength));
  }

  function handleTick() {
    if (isPaused) {
      setLastTime(Date.now());
      setIsPaused(false);
    } else {
      const now = Date.now();
      const deltaTime = now - lastTime;
      const newTimeRemain = timeRemaining - deltaTime;

      // test if the timer needs to be swapped
      if (newTimeRemain < 0) {
        setTimeRemaining(
          isBreak ? minsToMilli(sessionLength) : minsToMilli(breakLength)
        );
        setIsBreak((last) => !last);
        setLastTime(now);
      } else {
        setTimeRemaining(newTimeRemain);
        setLastTime(now);
      }
    }
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
    setAppVolume(volume);
    updateLocalStorage("volume", volume);
  }

  function handleReset() {
    console.log("handleReset()");
    const soundClip = document.getElementById("beep");
    soundClip.pause();
    soundClip.currentTime = 0;

    setIsBreak(false);
    setIsPaused(true);
    setSessionLength(25);
    setBreakLength(5);
    setTimeRemaining(minsToMilli(25));

    updateLocalStorage("breakLength", 5);
    updateLocalStorage("sessionLength", 25);
  }

  function handleStartStop() {
    if (isPaused) {
      setIsPaused(false);
      setLastTime(Date.now());
    } else {
      setIsPaused(true);
    }
  }

  return (
    <Wrapper>
      <Body className="stopwatch-body">
        <TimerDisplay
          timerTitle={isBreak ? "Break" : "Session"}
          timeRemaining={timeRemaining}
        />

        <ControlSection className="bottom-half">
          <ControlGrid className="selectors">
            <TimeControl
              id="break-length"
              name="Break"
              labelId="break-label"
              length={breakLength}
              upId="break-increment"
              downId="break-decrement"
              onClick={setBreak}
            />

            <TimeControl
              id="session-length"
              name="Session"
              labelId="session-label"
              length={sessionLength}
              upId="session-increment"
              downId="session-decrement"
              onClick={setSession}
            />
            <VolumeControl onChange={handleVolume} value={appVolume} />
          </ControlGrid>

          <Controls
            paused={isPaused}
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
