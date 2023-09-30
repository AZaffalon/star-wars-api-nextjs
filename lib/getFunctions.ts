export default async function getAllFilms() {
    const res = await fetch('https://swapi.dev/api/films')

    if (!res.ok) {
        throw new Error('Failed to fetch Films')
    }

    return res.json()
}
