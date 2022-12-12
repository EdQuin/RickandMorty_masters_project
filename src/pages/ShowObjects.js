import React from "react";
import { Caracters, Caractercard } from "../styles";

export default function ShowObjects (data){

    const info = data;
    const cards = info.data.props.results;
    console.log("showObjects",cards)

   return (
    <Caracters>
        {
            cards?.map((caracter)=>{
                return (
                    <Caractercard key={caracter.id}>
                        <img src={caracter.image}></img>
                <li>
                    {caracter.name}
                </li>
                <li>
                    {caracter.origin.name}
                </li>
                </Caractercard>
                );
            })
        }

    </Caracters>
   )
}