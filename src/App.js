import React from "react";
import "./App.css";

export default function App () {
  
    fetch('https://rickandmortyapi.com/api/character')
    .then((res) =>{
      if (res.ok) {
        return res.json();
      }
      throw new Error("Server not working");
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  
    return (
      <div className="App">
        <h1> Fetch data from an api in react,</h1>
        <h1>made for the pourpuse of testing Api Call</h1>
      </div>
    );
  
}
