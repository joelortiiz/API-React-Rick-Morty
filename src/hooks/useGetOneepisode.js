import { useEffect, useState } from "react";
import getOneEpisode from "../services/getOneEpisode";  

const useGetOneepisode = (param) => {
    const [episodio, setEpisodio] = useState({});

  const loadEpisode = async () => {
    const oneEpisode = await getOneEpisode(param);
    setEpisodio(oneEpisode);
  }
  useEffect(() => {
    loadEpisode()
  }, [param])
  return [episodio]
}

export default useGetOneepisode