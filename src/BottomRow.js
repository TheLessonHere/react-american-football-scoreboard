import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {

  const [currentdown, setCurrentDown] = useState(1)
  const [togo, setToGo] = useState(10)
  const [quarter, setQuarter] = useState(1)
  
  const handlerDownCalc = (value) => {
    if (value < 4) {return value + 1}
    else {return 1}
  }

  const handlerToGoCalc = (value) => {
    if (value > 1) {return value - 1}
    else {return 10}
  }

  const handlerQuarterCalc = (value) => {
    if (value < 4) {return value + 1}
    else {return 1}
  }

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value clickable" onClick={() => setCurrentDown(handlerDownCalc(currentdown))}>{currentdown}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value clickable" onClick={() => setToGo(handlerToGoCalc(togo))}>{togo}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">50</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value clickable" onClick={() => setQuarter(handlerQuarterCalc(quarter))}>{quarter}</div>
      </div>
    </div>
  );
};

export default BottomRow;
