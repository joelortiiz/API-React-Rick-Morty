import { useEffect, useState } from "react";
import getEpisodes from "../assets/services/getEpisodes";

const useEpisode = () => {
  const [episodes, setEpisodes] = useState([]);

  const loadEpisodes = async () => {
    const allepisodes = await getEpisodes();
    setEpisodes(allepisodes.results);
  };

  useEffect(() => {
    loadEpisodes();
  }, []);

  return episodes;
};

export default useEpisode;
