import React, { useState } from "react";
import "./styles.css";

//var likeCounter= 0;
//var userName= prompt("give me your name")
export default function App() {
  const [userInput, setUserInput] = useState("");

  function inputHandeler(event) {
    //console.log(event.target);
    //console.log(event.target.value)
    setUserInput(event.target.value);
  }

  return (
    <div className="App">
      <h1 className="heading">inside Out</h1>
      <input onChange={inputHandeler}></input>
      <div>welcome {userInput} </div>
    </div>
  );
}
