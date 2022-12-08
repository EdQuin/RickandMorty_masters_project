import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { Navi, Main, NavLi, NavUl, NavImg } from "./styles";
import portal from "./assets/portal_gif.gif"

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
        <Main>
            <Navi>
                <NavUl>
                    <NavImg src={portal} alt="portal logo"></NavImg>
                    <NavLi>
                        <Link to="/">Home</Link>
                    </NavLi>
                    <NavLi>
                        <Link to="/show">Show</Link>
                    </NavLi>
                    <NavLi>
                        <Link to="/about">About</Link>
                    </NavLi>
                </NavUl>
            </Navi>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/show" element={<About />} />
            </Routes>
        </Main>
    );

}
