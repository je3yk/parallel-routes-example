import { createApi } from 'unsplash-js';

const ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

// console.log('process.env', process.env);

if (!ACCESS_KEY) {
    // throw new Error('UNSPLASH_ACCESS_KEY is required');
    console.error('UNSPLASH_ACCESS_KEY is required');
    process.exit(1);
}

export const unsplashClient = createApi({
   accessKey: process.env.UNSPLASH_ACCESS_KEY ?? '',
})

