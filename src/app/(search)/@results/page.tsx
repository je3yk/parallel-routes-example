import Image from 'next/image'
import Link from 'next/link'
import { type ApiResponse } from 'unsplash-js/dist/helpers/response'
import { Basic } from 'unsplash-js/dist/methods/photos/types'
import { type Photos } from 'unsplash-js/dist/methods/search/types/response'
import { HistoryClient } from './historyClient'

type PhotosSearchResponse = { data: NonNullable<ApiResponse<Photos>['response']>['results'] | never[], total: number }
export default async function SearchResults({searchParams}: {searchParams: { q?: string}}) {
    const res = await fetch(`http://localhost:3000/api/photos/search?q=${searchParams.q ?? 'black-white'}`)
    const {data, total} = await res.json() as PhotosSearchResponse

    
    if (!data) {
        return <div>No results</div>
    }
    
    if (!searchParams.q) {
        return <div className="grid grid-cols-4 gap-2 p-2 w-full">
            {data.slice(0,4).map((photo: Basic) => (
                <Image key={photo.id} placeholder="blur" blurDataURL={photo.blur_hash ?? 'LEHV6nWB2yk8pyo0adR*.7kCMdnj'} alt="test-photo" src={photo.urls.small} width={500} height={500} className="object-cover aspect-square"/>
            ))}
            <div className="col-span-4 flex items-center justify-center p-6 text-black dark:text-white h-[150px]">
                <h1 className="text-4xl font-bold">{'{ welcome text here }'}</h1>
            </div>
            {data.slice(-4).map((photo: Basic) => (
                <Image key={photo.id} placeholder="blur" blurDataURL={photo.blur_hash ?? 'LEHV6nWB2yk8pyo0adR*.7kCMdnj'} alt="test-photo" src={photo.urls.small} width={500} height={500} className="object-cover aspect-square"/>
            ))}
        </div>
    }

    return (
        <div className="grid grid-cols-4 gap-2 p-2 w-full">
            <HistoryClient query={searchParams.q} total={total}/>
            {data.map((photo: Basic) => (
                <Link href={`/photo/${photo.id}`} key={photo.id}>
                    <Image placeholder="blur" blurDataURL={photo.blur_hash ?? 'LEHV6nWB2yk8pyo0adR*.7kCMdnj'} alt="test-photo" src={photo.urls.small} width={500} height={500} className="object-cover aspect-square"/>
                </Link>
            ))}
        </div>
    )
}