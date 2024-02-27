import React, { useEffect, useState } from 'react';
import getEpisodeActorImages from '../services/getEpisodeActorImages';

export const EpisodeActors = ({characters}) => {
    console.log("llega1")


    const [actorsImage, setActorsImages] = useState([]);

    let images;
    //let newcharacters;

    const loadImages = async (characters) => {
        console.log("llega2 a loadimages")
        let newcharacters
        newcharacters = characters.length > 12 ? characters.slice(0, 12) : [...characters]

        images = await getEpisodeActorImages(newcharacters)
        setActorsImages(images)
        console.log(actorsImage)
       
    }
    
    useEffect(() => {
      if(Array.isArray(characters)) {
        loadImages(characters)

      }
    }, [characters])

  return (
    <div>
        {
            actorsImage.map((image) => (
                <img
                    src={image}
                    key={image}
                    alt={image}
                />
            ))}
        <p>aa</p>
    </div>
);

}

export default EpisodeActors