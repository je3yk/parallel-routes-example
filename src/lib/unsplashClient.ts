import {createApi} from 'unsplash-js';

const ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

// console.log('process.env', process.env);

if (!ACCESS_KEY) {
    // throw new Error('UNSPLASH_ACCESS_KEY is required');
    console.error('UNSPLASH_ACCESS_KEY is required');
    process.exit(1);
}

const unsplashClient = createApi({
   accessKey: process.env.UNSPLASH_ACCESS_KEY ?? '',
})


export const searchPhotos = async (query?: string | null) => {
    if (!query) return {data: [], total: 0};

    const data = await unsplashClient.search.getPhotos({query, page: 1, perPage: 12});

    return {data: data.response?.results ?? [], total: data.response?.total ?? 0};
};

export const getPhoto = async (id: string) => {
    const data = await unsplashClient.photos.get({ photoId: id })

    if (!data.response) return null;

    const photoData = data.response && {
        id: data.response.id,
        description: data.response.description,
        urls: data.response.urls,
        likes: data.response.likes,
        blurHash: data.response.blur_hash,
        user: {
            name: data.response.user.name,
            username: data.response.user.username,
            profileImage: data.response.user.profile_image
        }
    }

    return photoData;
};

