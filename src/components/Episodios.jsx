import { Outlet } from "react-router-dom";
import useGetEpisodes from "../hooks/useGetEpisode";
import EpisodeCard from "./EpisodeCard";

const Episodios = () => {

  const episodios = useGetEpisodes();



  return (
    <>
      <header>
        <h1 className="text-center lead fs-1 text-secondary"> Actores</h1>
      </header>
      <section className="container d-flex flex-wrap gap-5 mt-5 justify-content-center">
      {episodios.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
      </section>
      <section>
        <Outlet />
      </section>
    </>
  )
}
export default Episodios;