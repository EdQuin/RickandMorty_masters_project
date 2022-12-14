import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Charactercard, Characters } from "../styles/styles";


export default function Details() {
    const characterDetail = useSelector((state) => state.characters);
    console.log(characterDetail.results)
    const { id } = useParams();
    //console.log(id)

    return (
        <div>
            {
                characterDetail.results?.map((character) => {
                    if  (character.id==id){
                    return (
                        <Charactercard style={{display: "block"}} key={character.id} >
                                <img src={character.image}></img>
                            <Characters>
                                <li>{character.name}</li>
                                <li>{character.origin.name}</li>
                                <li>{character.status}</li>
                                <li>{character.species}</li>
                                <li>{character.gender}</li>
                                <li>{character.location.name}</li>
                            </Characters>
                        </Charactercard>

                    );
                    }
                })
            }
        </div>
    )
}