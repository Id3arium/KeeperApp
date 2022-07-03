import React from "react";

export default function Footer() {
  let date = new Date();
  let currYear = date.getFullYear();
  return (
    <footer>
      <p> Copyright © {currYear} </p>
    </footer>
  );
}
