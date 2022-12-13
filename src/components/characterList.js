import React from "react";
import { useSelector } from "react-redux";
import { Caracters, Caractercard } from "../styles";

export default function ShowObjects() {
    const characters = useSelector((state) => state.characters);
    if (!characters || !characters.results?.length) return null;

    return (
        <Caracters>
            {
                characters.results?.map((caracter) => {
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