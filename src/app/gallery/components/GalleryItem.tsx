'use client'

import Image from "next/image"
import { useState } from "react"

export const GalleryItem = ({src, alt}: {src: string, alt?: string}) => {
    const [imgError, setImgError] = useState<boolean>(false)

    return (
        <div className="w-[500px] h-[500px] relative">
            <Image src={imgError ? 'http://via.placeholder.com/500' : src} alt={alt ?? 'gallery-item'} fill onError={() => setImgError(true)} className="object-cover" sizes="500px" /> 
        </div>
    )
}