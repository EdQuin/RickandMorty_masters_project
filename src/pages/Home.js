import React from "react";
import { Title } from "../styles";
import { PrimeText, HomeImg } from "../styles";
import Fundo from "../assets/fundo.jpg"
import ShowObjects from "./ShowObjects";


export default function Home (props){
    const data = props;
console.log("home",data)
    return (
        <div>
        <div style={{ display: "flex"}}>
            <div style={{ display: "inline" }}>
                <HomeImg src={Fundo} alt="Rick and Morty">
                </HomeImg>
            </div>
            <div style={{ display: "inline" }}>
                <Title>
                    Rick and Morty
                </Title>
                <PrimeText>
                    Here will be presented simple info. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Pellentesque sollicitudin orci in
                    diam posuere vestibulum.
                </PrimeText>
                <PrimeText>
                    Made for the pourpuse of testing Api Call. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Pellentesque sollicitudin orci in
                    diam posuere vestibulum.
                </PrimeText></div>
                
        </div>
        <ShowObjects data={data}></ShowObjects>
        </div>
        
    )
    
}