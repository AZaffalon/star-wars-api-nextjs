import { Suspense } from 'react'
import { FilmObject } from '@/lib/FilmObject'
import { getAllFilms } from '../../lib/getFunctions'
import Loading from './loading'
import Link from 'next/link'

export default async function Films()  {
    const allFilms =  await getAllFilms()

    return (
        <>
            <h1 className="text-3xl font-bold underline text-center"> Tout les films </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center mt-4">
                <Suspense fallback={<Loading/>}>
                    {
                        allFilms.results.map((film: FilmObject, index: number) => {
                            return (
                                <Link 
                                    href={`/films/${index + 1}`} className='w-full max-w-sm p-6 flex items-center justify-between bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 hover:-translate-y-1 transition-transform duration-300 hover:bg-amber-400 ease-in-out hover:text-black' key={film.episode_id}>
                                    <h4>{film.title}</h4>
                                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </Link>
                            )
                        })
                    }
                </Suspense>
            </div>
        </>
    )
}
