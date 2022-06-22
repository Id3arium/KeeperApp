import React from "react";

export default function Note(props) {
  return (
    <div className="note">
      <button>X</button>
      <h1> {props.title} </h1>
      <p> {props.content} </p>
    </div>
  );
}
