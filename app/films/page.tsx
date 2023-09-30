import getAllFilms from '../../lib/getFunctions'

type FilmObject = {
    episode_id: number,
    title: string,
    opening_crawl: string,
    director: string,
    producer: string,
    characters: Array<string>,
    planets: Array<string>,
    vehicles: Array<string>,
    species: Array<string>,
    starships: Array<string>,
}

export default async function Films()  {
    const allFilms =  await getAllFilms()

    return (
        <>
            <h1> Tout les films </h1>
            {
                allFilms.results.map((film: FilmObject) => {
                    return (
                        <h4 key={film.episode_id}>{film.title}</h4>
                    )
                })
            }
        </>
    )
}
