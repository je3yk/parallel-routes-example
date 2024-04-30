import { getPhoto } from '@/lib/fetchClient'
import { HeartFilledIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import { notFound } from "next/navigation"


export default async function PhotoPage({params}: {params: {id: string}}) {
    if (!params.id) return notFound()

    const photoData = await getPhoto(params.id)

    if (!photoData) {
        return notFound()
    }

    return (
        <div className="flex flex-col items-start justify-start w-[50%] h-full p-2 gap-2 mx-auto text-black dark:text-white">
            <div className="relative w-full h-[75%]">
                <Image src={photoData.urls.regular} placeholder="blur" alt="photo" blurDataURL={photoData.blurHash ?? "LEHV6nWB2yk8pyo0adR*.7kCMdnj"} fill objectFit='cover' />
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-1">
                {photoData.description && (
                    <div className="w-full flex items-center justify-center text-gray-600 dark:text-gray-400">
                        <p className="text-xl italic py-1 px-2">&quot;{photoData.description}&quot;</p>
                    </div>
                )}
                <div className="w-full flex justify-between items-start">
                    <div className="flex items-center justify-start gap-2">
                        <Image src={photoData.user.profileImage.medium} alt={photoData.user.username} width={40} height={40} className="rounded-[50%]" />
                        <div className="flex flex-col justify-start">
                            <h1 className="text-md font-bold">{photoData.user.name}</h1>
                            <p className="text-sm">{photoData.user.username}</p>
                        </div>
                    </div>
                    <div className="flex justify-end items-center gap-2">
                        <HeartFilledIcon color='red'/>
                        <p className="text-sm">{photoData.likes} likes</p>
                    </div>
                </div>
            </div>
        </div>
    )
}