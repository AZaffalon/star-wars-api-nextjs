import { FilmObject } from "@/lib/FilmObject"

async function getData(id: string) {
    const res = await fetch(`https://swapi.dev/api/films/${id}`)
    if (!res.ok) {
        throw new Error('Error fetching data')
    }
    return res.json()
}

export default async function Film({params}: {
    params: { id: string }
}) {

    const data: FilmObject = await getData(params.id)

    return (
        <>
            <h1 className="text-3xl text-center mb-4">
                Star Wars Episode {data.episode_id} : {data.title}
            </h1>
            <p className="font-bold text-2xl star-wars-perspective">{data.opening_crawl}</p>
        </>
    )
}