import ActorCard from './ActorCard';
import useGetActors from '../hooks/useGetActors';
const Actores = () => {

const actors = useGetActors();
  return (
    <>
    <div>Actores</div>
    <section>
      {actors.map((actor) => (
          <ActorCard key={actor.id} actor={actor} />
        ))}
        
    </section>
    </>
  )
}

export default Actores;