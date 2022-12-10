import React from "react";
import { Caracters } from "../styles";

export default function ShowObjects (data){

    const info = data;
    const cards = info.data.props.results;
    console.log("showObjects",cards)

   return (
    <Caracters>
        {
            cards?.map((caracter)=>{
                return (
                <li key={caracter.id}>
                    {caracter.name}
                </li>
                );
            })
        }

    </Caracters>
   )
}