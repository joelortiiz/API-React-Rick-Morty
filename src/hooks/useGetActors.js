import { useEffect, useState } from "react";
import getActors from "../services/getActors";

const useGetActors = () => {
    const [actors, setActors] = useState([]);
    const loadActors = async () => {
        const actors = await getActors();
        console.log("actors"),
         setActors(actors.results);
    };
    useEffect(() => {
        loadActors();
    }, [])

    return actors;
}

export default useGetActors;