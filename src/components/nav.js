import React from "react";
import { Link } from "react-router-dom";
import { Navi, NavLi, NavUl, NavImg } from "../styles/styles";
import portal from "../assets/portal_gif.gif"

export default function NavBar(){
    return (
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
    )
}