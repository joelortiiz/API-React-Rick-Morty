const getOneActor = (actors) => {
  let images = [];
  actors.map(async (actorurl) => {
    const result = await fetch(actorurl);
    const actor = await result.json();
    images.push(actor.image);
    // console.log(actor.image);
  });

  // console.log(images);
  return images;
};

export default getOneActor;

/* const getOneActor = (actors) => {
  
let actors1=  [
    "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/38.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/58.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/82.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/83.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/92.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/155.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/175.jpeg"
]
  
  let images=[];
  actors1.forEach( (img) => {
    
    images.push(img);
  });

console.log(images)
  return images;
};

export default getOneActor; */
