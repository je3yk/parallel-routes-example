import {ApiResponse} from "unsplash-js/dist/helpers/response";
import {Photos} from "unsplash-js/dist/methods/search/types/response";

function getBaseUrl() {
    if (process.env.NEXT_PUBLIC_VERCEL_URL) {
        return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    }

    return `http://localhost:${process.env.PORT ?? 3000}`
}

const BASE_URL = `${getBaseUrl()}/api`

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
        console.log('baseUrl', BASE_URL, query);
        const res = await fetch(`${BASE_URL}/photos/search?q=${encodeURIComponent(query)}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })

        const response = await res.json() as Promise<PhotosSearchResponse>
        return response;
    } catch (e) {
        console.error('searchPhotos-error', e)
        return null;
    }
}

const getPhoto = async (id: string) => {
    try {
        const res = await fetch(`${BASE_URL}/photos/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
        const response = await res.json() as Promise<PhotoData>
        return response;
    } catch (e) {
        console.error('getPhoto-error', e)
        return null;
    }
}

export {getPhoto, searchPhotos};

