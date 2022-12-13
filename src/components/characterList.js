import React from "react";
import { useSelector } from "react-redux";
import { Characters, Charactercard } from "../styles/styles";

export default function ShowObjects() {
    const characters = useSelector((state) => state.characters);
    if (!characters || !characters.results?.length) return null;

    return (
        <Characters>
            {
                characters.results?.map((caracter) => {
                    return (
                        <Charactercard key={caracter.id}>
                            <img src={caracter.image} style={{width:"200px"}}></img>
                            <li>
                                {caracter.name}
                            </li>
                            <li>
                                {caracter.origin.name}
                            </li>
                        </Charactercard>
                    );
                })
            }

        </Characters>
    )
}