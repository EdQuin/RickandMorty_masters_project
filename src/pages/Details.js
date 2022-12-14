import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../components/footer";
import { DetailContainer, DetailInfo } from "../styles/styles";

export default function Details() {
  const characterDetail = useSelector((state) => state.characters);
  console.log(characterDetail.results);
  const { id } = useParams();
  //console.log(id)

  return (
    <div>
      {characterDetail.results?.map((character) => {
        if (character.id == id) {
          window.scrollTo(0, 0);
          return (
            <DetailContainer key={character.id}>
              <img src={character.image}></img>
              <DetailInfo>
                <h1>{character.name}</h1>
                <li>Origin Planet : {character.origin.name}</li>
                <li>Status : {character.status}</li>
                <li>Species : {character.species}</li>
                <li>Gender : {character.gender}</li>
                <li>Location : {character.location.name}</li>
              </DetailInfo>
            </DetailContainer>
          );
        }
      })}
      <Footer />
    </div>
  );
}
