import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import {Home} from "./components/Home";
import About from "./components/About";
import NoteState from "./context/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [alert, setAlert] = useState(null);
  function showAlert(message, type){
    setAlert({
      msg: message,
      type: type,
    });
    console.log("it is running")
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <NoteState>
        <Navbar />
        <Alert alertText = {alert}/>
        <Routes>
          <Route path="/home" element={<Home showAlert = {showAlert}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login showAlert = {showAlert} />} />
          <Route path="/signup" element={<Signup showAlert = {showAlert} />} />
        </Routes>
      </NoteState>
    </>
  );
}

export default App;
