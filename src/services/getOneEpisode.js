
export const getOneEpisode = async(episodeId) => {
  console.log(episodeId)
  const result = await fetch(`https://rickandmortyapi.com/api/episode/${episodeId}`)
  const episode = await result.json();
  return (
    episode
  )
}
export default getOneEpisode