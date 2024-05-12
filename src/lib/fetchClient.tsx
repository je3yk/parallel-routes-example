import { ApiResponse } from "unsplash-js/dist/helpers/response"
import { Photos } from "unsplash-js/dist/methods/search/types/response"

function getBaseUrl() {
    if (typeof window !== 'undefined') {
        return ''
    }

    // if (process.env.VERCEL_URL) {
    //     return `http://${process.env.VERCEL_URL}`
    // }

    if (process.env.NEXT_PUBLIC_VERCEL_URL) {
        return `http://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    }

    return `http://localhost:${process.env.PORT ?? 3000}`
}

const BASE_URL = getBaseUrl() === '' ? null : `${getBaseUrl()}/api`

type PhotosSearchResponse = { data: NonNullable<ApiResponse<Photos>['response']>['results'] | never[], total: number }

type PhotoData = {
    id: string
    description: string | null
    blurHash: string
    urls: Record<'full' | 'regular', string>
    likes: number,
    user: {
        name: string
        username: string
        profileImage: Record<'medium', string>
    }
}

const searchPhotos = async (query: string) => {
    try {
        if (!BASE_URL) {
            return null
        }
        const res = await fetch(`${BASE_URL}/photos/search?q=${query}`)
        console.log('searchPhotos-res', res)
        return res.json() as Promise<PhotosSearchResponse>
    } catch (err) {
        console.log('searchPhotos-err', err)
        return null
    }
}

const getPhoto = async (id: string) => {
    try {
        if (!BASE_URL) {
            return null
        }
        const res = await fetch(`${BASE_URL}/photos/${id}`)
        console.log('getPhoto-res', res)
        return res.json() as Promise<PhotoData>
    } catch (err) {
        console.log('getPhoto-err', err)
        return null
    }
}

export {
    getPhoto, searchPhotos
}

