import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { Navi, Main, NavLi, NavUl, NavImg } from "./styles";
import portal from "./assets/portal_gif.gif"
import {   useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCaracters } from "./pages/hiper-store/caracterSlice";

const url= `https://rickandmortyapi.com/api/character`;


export default function App() {

    const dispatch = useDispatch();
    const [info, setInfo] = useState("testing");

    useEffect(() => {
        loadData();

    }, [])
    
    const loadData = async () => {
        await fetch(url)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Server not working");
            })
            //.then((res) => console.log(res.results))
            .then((res) => {setInfo(res)})
            .catch((err) => console.log(err));
           dispatch(addCaracters(info));
            console.log("inside loaddata",info)
    }
     
console.log("outside loaddata",info.results)
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
                <Route path="/" element={<Home props={info}/>} />
                <Route path="/about" element={<About />} />
                <Route path="/show" element={<About />} />
            </Routes>
        </Main>
    );

}

/*


//STORE => Globalized state

//ACTION Isto vai utilizar um valor da store e fzer algo com ele

const increment = ()=> {
    return{
        type: 'INCREMENT'
    }
}
const decrement = ()=> {
    return{
        type: 'DECREMENT'
    }
}

//REDUCER  Em função da action determina o que irá acontecer na App

const counter = (state=0,  action) => {
    switch(action.type){
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
    }
};

let store = createStore(counter)

//Display in the console
store.subscribe(()=> console.log(store.getState()));

//DISPATCH
store.dispatch(increment())

*/