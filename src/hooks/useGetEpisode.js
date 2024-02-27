import { useEffect, useState } from "react"
import getEpisodes from "../services/getEpisodes";


 const useGetEpisodes =()=> {
    const [episodes, setEpisodes] = useState([]);
    const loadEpisodes = async()=> {
        const episodes = await getEpisodes();
        setEpisodes(episodes.results);
    };

    useEffect(() => {
        loadEpisodes();
    }, []);
    return episodes;
};
export default useGetEpisodes;