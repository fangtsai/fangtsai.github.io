import React from "react";
import ReactDOM from "react-dom/client";
import { StyleB } from "./style-b.jsx";
import { PORTFOLIO_DATA } from "./data.jsx";

function App() {
  return <StyleB data={PORTFOLIO_DATA} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

function fit() {
  const frame = document.getElementById("frame");
  if (!frame) return;
  const s = Math.min(window.innerWidth / 1280, window.innerHeight / 820);
  frame.style.transform = `scale(${s})`;
}
window.addEventListener("resize", fit);
fit();
