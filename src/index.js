import React from "react";
import ReactDOM from "react-dom";

function MyApp() {
  return (
    <div className="container">
      <h1>Hello Welcome to PiBOTS</h1>
      <p>dfdfc</p>
    </div>
  );
}

function AList() {
  return (
    <ul>
      <li>HTML</li>
      <li>Css</li>
      <li>JS</li>
    </ul>
  );
}

ReactDOM.render(
  <div>
    <MyApp />
    <AList />
  </div>,
  document.getElementById("root")
);
