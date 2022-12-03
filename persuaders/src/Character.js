import React, { Component } from "react";
import "./App.css";

const Character = (props) => {
  if (props.status === "human") {
    return <img className="character" src={props.human} />;
  } else if (props.status === "halfZombie") {
    return <img className="character" src={props.halfZombie} />;
  } else {
    return <img className="character" src={props.zombie} />;
  }
};

export default Character;
