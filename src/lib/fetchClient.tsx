import { ApiResponse } from "unsplash-js/dist/helpers/response"
import { Photos } from "unsplash-js/dist/methods/search/types/response"

const BASE_URL = 'http://localhost:3000/api'

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
    const res = await fetch(`${BASE_URL}/photos/search?q=${query}`)
    return res.json() as Promise<PhotosSearchResponse>
}

const getPhoto = async (id: string) => {
    const res = await fetch(`${BASE_URL}/photos/${id}`)
    return res.json() as Promise<PhotoData>
}

export {
    searchPhotos,
    getPhoto
}
