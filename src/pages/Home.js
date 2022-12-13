import React from "react";
import { Title } from "../styles/styles";
import { HomeText, HomeImg, HomeContainer } from "../styles/styles";
import Fundo from "../assets/fundo.jpg"
import ShowObjects from "../components/characterList";
import Footer from "../components/footer";


export default function Home() {
    return (
        <div>
            <HomeContainer>
                <div>
                    <HomeImg src={Fundo} alt="Rick and Morty"/>  
                </div>
                <div>
                    <Title>
                        Rick and Morty
                    </Title>
                    <HomeText>
                        Hi and welcome to this page. Here you will find a list 
                        of characters that belong to the universe of Rick and Morty TV Show. 
                    </HomeText>
                    <HomeText>
                        If you are curiouse to know more about one of them, simply select it, 
                        then it will be presented in more detail for you. Thank you for coming 
                        and comback any time soon.
                    </HomeText></div>

            </HomeContainer>
            <ShowObjects/>
            <Footer/>
        </div>

    )

}