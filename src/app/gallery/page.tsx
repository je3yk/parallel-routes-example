import {searchPhotos} from "@/lib/unsplashClient";
import {ReactImageGalleryItem} from "react-image-gallery";
import {ImageGallery} from "./components/ImageGallery";

export default async function GalleryPage() {
    const photosRes = await searchPhotos('random')
    if (!photosRes) {
        return <div>No results</div>
    }

    const images: ReactImageGalleryItem[] = [
        { original: 'https://secure.rezserver.com/img/hotel_img_na.jpg&w=48&q=75'},
        ...photosRes.data?.slice(0,5).map((photo) => {
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