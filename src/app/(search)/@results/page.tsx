import { searchPhotos } from '@/lib/fetchClient'
import Image from 'next/image'
import Link from 'next/link'
import { Basic } from 'unsplash-js/dist/methods/photos/types'
import { HistoryClient } from './historyClient'

export default async function SearchResults({searchParams}: {searchParams: { q?: string}}) {
    const {data, total} = await searchPhotos(searchParams.q ?? 'black-white')

    
    if (!data) {
        return <div>No results</div>
    }
    
    if (!searchParams.q) {
        return <div className="grid grid-cols-4 gap-2 p-2 w-full">
            {data.slice(0,4).map((photo: Basic) => (
                <Image key={photo.id} placeholder="blur" blurDataURL={photo.blur_hash ?? 'LEHV6nWB2yk8pyo0adR*.7kCMdnj'} alt="test-photo" src={photo.urls.small} width={500} height={500} className="object-cover aspect-square"/>
            ))}
            <div className="col-span-4 flex items-center justify-center p-6 text-black dark:text-white h-[110px]">
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