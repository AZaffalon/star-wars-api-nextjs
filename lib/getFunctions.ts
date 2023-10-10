export async function getAllFilms() {
    const res = await fetch('https://swapi.dev/api/films')

    if (!res.ok) {
        throw new Error('Failed to fetch Films')
    }

    return res.json()
}

export async function getAllPlanets() {
    const res = await fetch('https://swapi.dev/api/planets')

    if (!res.ok) {
        throw new Error('Failed to fetch Planets')
    }

    return res.json()
}

module.exports = {
    getAllFilms,
    getAllPlanets
}