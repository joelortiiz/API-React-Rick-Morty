import { useEffect, useState } from "react";
import getOneEpisode from "../assets/services/getOneEpisode";

const useOneEpisode=(param) => { 
  const [episode, setEpisode] = useState({});

  const loadEpisode = async () => {
    const oneEpisode = await getOneEpisode(param);
    setEpisode(oneEpisode);
  };

  useEffect(() => {
    loadEpisode();
  }, [param]);

    return [episode]
 }

 export default useOneEpisode;