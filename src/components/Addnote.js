import React from "react";
import { useContext, useState } from "react";

import noteContext from "../context/noteContext";

export const Addnote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: ""
  });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({
      title: "",
      description: "",
      tag: ""
    });
    props.showAlert("Note added successfully", "success");
  };

  const onChange = (e) => {
    setNote({...note, [e.target.name]: e.target.value})
  }

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
              value={note.title}
              minLength={5} 
            />
            <div id="emailHelp" className="form-text">
              We'll never share your notes with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
              value={note.description}
              minLength={5} required = {true}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tags
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={onChange}
              value={note.tag}
            />
          </div>
          <button disabled={note.title.length<3 || note.description.length<3} type="submit" className="btn btn-primary" onClick={handleClick}>
            ADD NOTE
          </button>
        </form>
      </div>
    </div>
  );
};
