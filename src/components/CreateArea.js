import React, { useState } from "react";
import _ from "lodash";
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
  function submitNote(e) {
    e.preventDefault();
    let emptyNote = { title: "", content: "" };
    if (!_.isEqual(note, emptyNote)) {
      props.onAdd(note);
      setNote(emptyNote);
    }
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
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
