import React from "react";
import { useContext } from "react";
import noteContext from "../context/noteContext";
import { Addnote } from "./Addnote";
import NoteItem from "./NoteItem";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes} = context;
  return (
    <>
      <Addnote />
      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return <NoteItem key={note._id} note={note} />;
        })}
      </div>
    </>
  );
};

export default Notes;
