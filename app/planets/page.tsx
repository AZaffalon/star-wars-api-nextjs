import { PlanetObject } from "@/lib/PlanetObject"
import { getAllPlanets } from "@/lib/getFunctions"
import { Suspense } from "react"
import Loading from "./loading"
import PlanetsList from "@/app/components/PlanetsList"

export default async function Planets()  {
    const allPlanets = await getAllPlanets()

    return (
        <>
            <h1 className="text-3xl font-bold underline text-center"> Toutes les planètes </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4">
                {
                    allPlanets.results.map((planet: PlanetObject) => {
                        return (
                            <Suspense fallback={<Loading/>} key={planet.name}>
                                <PlanetsList planet={planet}/>
                            </Suspense>
                        )
                    })
                }
            </div>

        </>
    )
}
