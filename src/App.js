import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { Main } from "./styles/styles";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCharacters } from "./store/characterSlice";
import NavBar from "./components/nav";
import Details from "./pages/Details";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  return (
    <Main>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pages/Details/:id" element={<Details />} />
      </Routes>
    </Main>
  );
}
