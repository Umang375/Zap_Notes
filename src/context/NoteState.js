
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInital = [];

  const [notes, setNotes] = useState(notesInital);

  //GET NOTES
  const getNotes = async()=>{
    const response  = await fetch(`${host}/api/notes/fetchallnotes`,{
      method: "GET",
      headers:{
        "Content-Type": "application/json",
        // "auth-token": localStorage.getItem("token")
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1YzM4ZWM1NWNkNWMyNDIwZjMzMzIyIn0sImlhdCI6MTY2NzkxMjYyMn0.uM9TdwW1L-eY2rT6wifETuLDKlHoFqbPPz7zHcfXAa4"
      }
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  }

  // Add a note
  const addNote = async (title, description, tag)=>{
    const response = await fetch(`${host}/api/notes/addnote`,
    {
      method: 'POST',
      headers:{
        "Content-Type": "application/json",
        // "auth-token": localStorage.getItem("token")
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1YzM4ZWM1NWNkNWMyNDIwZjMzMzIyIn0sImlhdCI6MTY2NzkxMjYyMn0.uM9TdwW1L-eY2rT6wifETuLDKlHoFqbPPz7zHcfXAa4"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json();
    console.log(json);

    console.log("Adding a note");
    let note = {
      "_id": "63668e47b425880f6d64d284",
      "user": "635c38ec55cd5c2420f33322",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2022-11-05T16:24:39.838Z",
      "__v": 0
    };
    setNotes(notes.concat(note));
  }


  // Delete a note
  const deleteNote = async (id)=>{
    const response = await fetch(`${host}/api/notes/deletenote/${id}`,
    {
      method: 'DELETE',
      headers:{
        "Content-Type": "application/json",
        // "auth-token": localStorage.getItem("token")
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1YzM4ZWM1NWNkNWMyNDIwZjMzMzIyIn0sImlhdCI6MTY2NzkxMjYyMn0.uM9TdwW1L-eY2rT6wifETuLDKlHoFqbPPz7zHcfXAa4"
      }
    });
    const json = await response.json();
    console.log(json);
    console.log("Deleting a note "+id);
    const newNotes = notes.filter((note)=>{
      return note._id !== id;
    })
    setNotes(newNotes);
  } 

  
  // Edit a note
  const editNote = async (id, title, description, tag)=>{
     const response = await fetch(`${host}/api/notes/updatenote/${id}`,
    {
      method: 'PUT',
      headers:{
        "Content-Type": "application/json",
        // "auth-token": localStorage.getItem("token")
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1YzM4ZWM1NWNkNWMyNDIwZjMzMzIyIn0sImlhdCI6MTY2NzkxMjYyMn0.uM9TdwW1L-eY2rT6wifETuLDKlHoFqbPPz7zHcfXAa4"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json();
    console.log(json);
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if(element._id === id){
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break; //can be removed just serving as effieciency
      }
    }
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote,editNote, getNotes}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;