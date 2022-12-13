import React from "react";
import { Title, AboutText } from "../styles/styles";
import portal from "../assets/portal.jpg"

export default function About() {

    return (
        <div>
            <div style={{ textAlign: "center", display: "block" }}>
                <Title>Mini projeto - Tecnolgias de Desenvolvimento Web</Title>
                <img src={portal}></img>
            </div>
            <div style={{ textAlign: "center" }}>
                <AboutText>Mini - projeto desenvolvido para consumir informação a partir de uma API externa.</AboutText>
                <AboutText>Objetivo principal: Criação de aplicação React.js utilizando React Redux para a gestão dos estados.</AboutText>
            </div>
        </div>
    )

}