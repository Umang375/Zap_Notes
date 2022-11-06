import React from "react";
import { useContext, useState } from "react";

import noteContext from "../context/noteContext";

export const Addnote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "general",
  });

  const handleClick = (e) => {
    e.preventDefault();
    // Add a note
    addNote(note.title, note.description, note.tag);
    // setNote({
    //   title: "",
    //   description: "",
    //   tag: "general",
    // });
  };

  const onChange = (e) => {
    setNote({...note, [e.target.name]: e.target.value})
  };

  return (
    <div>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your notes with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
