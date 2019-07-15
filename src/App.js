//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homescore, setHomeScore] = useState(0);
  const [awayscore, setAwayScore] = useState(0);
  const [timeleft, setTimeLeft] = useState(900);

  const convertedTimer = (seconds) => {
    let minutesleft = Math.floor(seconds / 60);
    let secondsleft = seconds % 60;
    if (secondsleft < 10) {
      return `${minutesleft}:0${secondsleft}`
    } else {
    return `${minutesleft}:${secondsleft}`
    }
  }

  var runningTimer;

  // const startTimer = () => {
  //   setTimeLeft(timeleft-1);
  //   useEffect(() => {
  //     function timerIncrement(value) {
  //       if (value > 0) {
  //         setTimeLeft(value - 1)
  //       } else {
  //         clearInterval(runningTimer);
  //         setTimeLeft(0)
  //       }
  //     }
  //     runningTimer = setInterval(timerIncrement(timeleft), 1000);
  //   });}

  // const stopTimer = () => {
  //   clearInterval(runningTimer);
  // }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homescore}</div>
          </div>
          <div className="timer">
            {convertedTimer(timeleft)}
          </div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayscore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          {/* <button className="start__timer" onClick={() => startTimer()}>Start Timer</button> */}
          <button className="homeButtons__touchdown" onClick={() => setHomeScore(homescore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setHomeScore(homescore + 3)}>Home Field Goal</button>
          </div>
        <div className="awayButtons">
          {/* <button className="stop__timer" onClick={() => stopTimer()}>Stop Timer</button> */}
          <button className="awayButtons__touchdown" onClick={() => setAwayScore(awayscore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setAwayScore(awayscore + 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}
export default App;
