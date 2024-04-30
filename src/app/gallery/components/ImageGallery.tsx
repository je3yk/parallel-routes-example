'use client'
import ReactImageGallery, { ReactImageGalleryItem, ReactImageGalleryProps } from "react-image-gallery";
import { GalleryItem } from "./GalleryItem";

export const ImageGallery = ({items, ...props}: ReactImageGalleryProps) => {
    const mappedImages = items.map((image) => {
        return ({
            ...image,
            renderItem: (item: ReactImageGalleryItem) => {
                return <GalleryItem src={item.original} alt={item.originalAlt} />
            }
        })
    })

    return <ReactImageGallery 
        showPlayButton={false}
        showFullscreenButton={false}
        showBullets
        showThumbnails={false}
        items={mappedImages}
        {...props}
    />
}