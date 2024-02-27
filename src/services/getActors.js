const getActors = async() => {
    const actors = await fetch("https://rickandmortyapi.com/api/character")
    return await actors.json();
  }
  
  export default getActors