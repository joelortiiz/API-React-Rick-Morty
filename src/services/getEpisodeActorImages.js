const getEpisodeActorImages = (actors) => {
  let images = [];
  actors.map(async(actorurl)=> {
    const result = await fetch(actorurl);
    const actor = await result.json();
    images.push(actor.image);
  })
  return images;
  
}

export default getEpisodeActorImages