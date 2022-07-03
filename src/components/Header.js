import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
export default function Header() {
  return (
    <header>
      <h1>
        <HighlightIcon />
        {" Keeper"}
      </h1>
      <p>Keep your notes wherever you go</p>
    </header>
  );
}
