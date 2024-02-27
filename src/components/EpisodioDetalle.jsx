import React from 'react';
import { useParams } from 'react-router-dom';
import EpisodeActors from './EpisodeActors';
import oneepisodehook from '../hooks/useGetOneepisode';



export const EpisodioDetalle = () => {

    const params = useParams();
    const param = params.id
    const [episodio] = oneepisodehook(param);


  return (
    <>
    <div>Capitulos: {episodio.id}</div>
    <p>
        {episodio.name}
    </p>
    <div>
        <EpisodeActors characters={episodio.characters} />
    </div>
    </>
  )
}
export default EpisodioDetalle
