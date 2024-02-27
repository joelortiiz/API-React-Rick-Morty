import React from "react";
import { useParams } from "react-router-dom";
import useOneEpisode from "../hooks/oneepisodehook";
import EpisodeActors from "./EpisodeActors";

const EpisodeDetail = () => {
  const params = useParams();
  const param = params.episodeId;
  const [episode] = useOneEpisode(param);

  return (
    <article className="d-flex flex-column">
      <div className="d-flex flex-column align-items-center">
        <h2>Capitulos: {episode.id}</h2>
        <p className="text-info">{episode.name}</p>
       
      </div>
      <EpisodeActors characters={episode.characters} />
    </article>
  );
};

export default EpisodeDetail;
