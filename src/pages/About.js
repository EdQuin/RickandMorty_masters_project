import React from "react";
import Footer from "../components/footer";
import { AboutTitle, AboutText } from "../styles/styles";
import about_gif from "../assets/about_gif.gif"

export default function About() {

    return (
        <div>
            <div style={{ display: "inline-flex" }}>
                <AboutTitle>Mini project - Web Development Tecnologies</AboutTitle>
                <img src={about_gif}></img>
            </div>
            <div style={{ display: "inline-flex" }}>
                <AboutText>
                    Mini - project developed to consume information
                    rom an external API. Here you can select an object
                    from the main page from one of its features, this
                    allows you to see it in more detail on another
                    page using Master - Detail.
                </AboutText>
                <AboutText>
                    Main goal: Creation of React.js application using
                    React Redux for state management, React Router to
                    connect the different pages, and Styled Components
                    to apply CSS to the project.
                </AboutText>
            </div>
            <Footer />
        </div>
    )

}