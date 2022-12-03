import React, { Component } from "react";
import "./App.css";

const Character = (props) => {
  if (props.status === "human") {
    return <img className="character" src={props.human} style={{ left: props.x, top: props.y }}/>;
  } else if (props.status === "halfZombie") {
    return <img className="character" src={props.halfZombie} style={{ left: props.x, top: props.y }} />;
  } else {
    return <img className="character" src={props.zombie} style={{ left: props.x, top: props.y }} />;
  }
};

export default Character;
