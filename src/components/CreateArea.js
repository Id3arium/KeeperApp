import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="4"
          value={note.content}
          onChange={handleChange}
        />
        <button
          onClick={() => {
            props.handleAddNote(note);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
