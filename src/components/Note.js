import React from "react";

export default function Note(props) {
  const deleteNote = () => {
    props.onDelete(props.id);
  };
  return (
    <div className="note">
      <button onClick={deleteNote}>X</button>
      <h1>
        {" "}
        {"(" + (props.id + 1) + ") "}
        {props.title}{" "}
      </h1>
      <p> {props.content} </p>
    </div>
  );
}
