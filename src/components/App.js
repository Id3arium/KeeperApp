import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import CreateArea from "./CreateArea";

export default function App() {
  return (
    <div>
      <Header />
      <CreateArea />
      {notes.map((props) => (
        <Note {...props} />
      ))}
      <Footer />
    </div>
  );
}
