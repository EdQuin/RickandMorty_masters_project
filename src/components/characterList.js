import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Characters, Charactercard, } from "../styles/styles";

export default function CharacterList() {
    const characters = useSelector((state) => state.characters);
    if (!characters || !characters.results?.length) return null;

    return (

        <Characters>
            {
                characters.results?.map((character) => {
                    return (

                        <Charactercard key={character.id} >
                            <Link to={`/pages/Details/${character.id}`}>
                                <img src={character.image} style={{ width: "200px" }}></img>
                            </Link>
                            <li>
                                {character.name}
                            </li>
                        </Charactercard>

                    );
                })
            }

        </Characters>

    )
}