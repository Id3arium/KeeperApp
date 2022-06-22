import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import defaultNotes from "../notes";
import CreateArea from "./CreateArea";
export default function App() {
  const [notes, setNotes] = useState(defaultNotes);
  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }
  return (
    <div>
      <Header />
      <CreateArea handleAddNote={addNote} />
      {notes.map((props) => (
        <Note {...props} />
      ))}
      <Footer />
    </div>
  );
}
