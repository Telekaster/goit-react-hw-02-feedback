import React, { Component } from "react";
import styles from "./Section.css";

function Section({ title, children }) {
  return (
    <section title={title} className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default Section;
