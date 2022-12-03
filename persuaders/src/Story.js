import React, { useState } from "react";
import "./App.css";

const Story = (props) => {
  const last = props.textList[props.textList.length - 1];
  const [text, setText] = useState(props.textList[0]);
  const [finished, setFinished] = useState(false);
  function update() {
    var n = props.textList.indexOf(text);
    setText(props.textList[n + 1]);
    n++;
  }

  function hide() {
    setFinished(true);
    console.log(finished);
  }

  return (
    <>
      <div
        className="narrative"
        id="narrative-box"
        style={{ display: finished ? "none" : "block" }}
      >
        <p>{text}</p>
        {text !== last ? (
          <button
            onClick={() => {
              update();
            }}
          >
            Next
          </button>
        ) : (
          <button
            onClick={() => {
              hide();
            }}
          >
            Challenge accepted!
          </button>
        )}
      </div>
      <div
        className="overlay"
        style={{ display: finished ? "none" : "block" }}
      ></div>
    </>
  );
};

export default Story;
