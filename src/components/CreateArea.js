import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import _ from "lodash";
function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [isExpanded, setIsExpanded] = useState();
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
      <form className="create-note">
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
          onFocus={() => {
            setIsExpanded(true);
          }}
        />
        {isExpanded && (
          <textarea
            name="content"
            placeholder="Take a note..."
            rows="4"
            value={note.content}
            onChange={handleChange}
          />
        )}
        <Zoom in={true}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
