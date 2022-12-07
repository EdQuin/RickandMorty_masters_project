import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
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
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <h1> Fetch data from an api in react,</h1>
            <h1>made for the pourpuse of testing Api Call</h1>
        </div>
    );

}
