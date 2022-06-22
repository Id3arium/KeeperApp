import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import defaultNotes from "../notes";
import CreateArea from "./CreateArea";
export default function App() {
  const [notes, setNotes] = useState([]);
  function addNote(note) {
    setNotes((prevNotes) => {
      note.id = prevNotes.length;
      note.key = prevNotes.length;
      return [...prevNotes, note];
    });
  }
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => {
        return note.id !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((props) => (
        <Note {...props} onDelete={deleteNote} />
      ))}
      <Footer />
    </div>
  );
}
