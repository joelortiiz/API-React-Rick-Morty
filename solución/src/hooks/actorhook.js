import { useEffect, useState } from "react";
import getActors from "../assets/services/getActors";

const useActor = () => {
  const [actors, setActors] = useState([]);

  const loadUsers = async () => {
    const newActors = await getActors();
    setActors(newActors.results);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return actors;
};

export default useActor;
