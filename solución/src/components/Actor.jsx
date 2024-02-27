import React from "react";
import useActor from "../hooks/actorhook";

import ActorCard from "./ActorCard";

const Actor = () => {
  const actors = useActor();

  return (
    <>
      <header>
        <h1 className="text-center lead fs-1 text-secondary"> Actores</h1>
      </header>
      <section className="container d-flex flex-wrap gap-5 mt-5 justify-content-center">
        {actors.map((actor) => (
          <ActorCard key={actor.id} actor={actor} />
        ))}
      </section>
    </>
  );
};

export default Actor;
