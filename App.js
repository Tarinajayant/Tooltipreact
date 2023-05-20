import React from "react";
import Tooltip from "./tooltip";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello, this is a React tooltip </h1>

      <div className="example-wrapper">
        <Tooltip content="COMPLETE" direction="right">
          <span className="example-emoji" role="img" aria-label="check emoji">
            ✅
          </span>
        </Tooltip>
      </div>
    </div>
  );
}
