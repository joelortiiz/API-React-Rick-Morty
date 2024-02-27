import React, { useState, useEffect } from "react";
import getEpisodeActorImages from "../assets/services/getEpisodeActorImages";
import "./EpisodeActors.css";

const EpisodeActors = ({ characters}) => {
   console.log(characters)
  console.log("llega")


  const [actorimages, setActorImages] = useState([]);
     
  let images;
  let newcharacters;

  const loadImages = async(characters) => {
    console.log("llega a loadImages")
    let newcharacters;
    newcharacters =
      characters.length > 12 ? characters.slice(0, 12) : [...characters];

    images = await getEpisodeActorImages(newcharacters);
    console.log(images)
    setActorImages(images);
    console.log(actorimages)
  };

  useEffect(() => {
    if (Array.isArray(characters)) {
      loadImages(characters);
    }
  }, [characters]);
  
  return (
    <div className="d-flex flex-wrap justify-content-center gap-2">
 
      {actorimages.map((image) => (
        <img
          className="border rounded image"
          key={image}
          src={image}
          alt={image}
        />
      ))}
    </div>
  );
};

export default EpisodeActors;
