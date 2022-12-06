import React from "react";
import './App.css';
import useFetch from "react-fetch-hook";

function App3 () {

    const { data } = useFetch("https://api.disneyapi.dev/character?name=Donald%20Duck");
    console.log(data);

}
export default App3;
/**
Api para fazer o chamado de um random user com dados completos

const { data } = useFetch("https://randomuser.me/api/");
    console.log(data);


 */