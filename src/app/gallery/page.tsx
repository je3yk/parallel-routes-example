import { ReactImageGalleryItem } from "react-image-gallery";
import { ApiResponse } from "unsplash-js/dist/helpers/response";
import { Photos } from "unsplash-js/dist/methods/search/types/response";
import { GalleryItem } from "./components/GalleryItem";
import { ImageGallery } from "./components/ImageGallery";


type PhotosSearchResponse = { data: NonNullable<ApiResponse<Photos>['response']>['results'] | never[], total: number }

export default async function GalleryPage() {
    const photosRes = await fetch(`http://localhost:3000/api/photos/search?q=random`)
    const {data} = await photosRes.json() as PhotosSearchResponse

    if (!data) {
        return <div>No results</div>
    }

    const images: ReactImageGalleryItem[] = [
        { original: 'https://secure.rezserver.com/img/hotel_img_na.jpg&w=48&q=75'},
        ...data.slice(0,5).map((photo) => {
            return ({
                original: photo.urls.regular,
                originalWidth: 500,
                originalHeight: 500,
                originalAlt: 'http://via.placeholder.com/500'
            })
        })
    ]

    

    return <ImageGallery items={images} additionalClass="min-h-[300px] min-w-[300px] bg-gray-400 relative"/>
}