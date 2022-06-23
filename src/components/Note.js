import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
export default function Note(props) {
  const deleteNote = () => {
    props.onDelete(props.id);
  };
  return (
    <div className="note">
      <button onClick={deleteNote}>
        <DeleteIcon />
      </button>
      <h1>
        {" "}
        {"(" + (props.id + 1) + ") "}
        {props.title}{" "}
      </h1>
      <p> {props.content} </p>
    </div>
  );
}
