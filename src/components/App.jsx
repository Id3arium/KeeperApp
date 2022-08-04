import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
//import defaultNotes from "../notes";

export default function App() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'))
    setNotes(notes ? notes : []);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  function addNote(note) {
    setNotes((prevNotes) => {
      note.id = prevNotes.length
      note.key = prevNotes.length
      return [...prevNotes, note]
    });
  }
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => {
        return note.id !== id
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((props) => 
        <Note {...props} onDelete={deleteNote} />
      )}
      <Footer />
    </div>
  );
}
