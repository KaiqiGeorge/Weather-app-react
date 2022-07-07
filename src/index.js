import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "./index.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Beijing" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
