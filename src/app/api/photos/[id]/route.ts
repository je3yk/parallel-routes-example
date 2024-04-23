import { NextRequest, NextResponse } from "next/server";
import { unsplashClient } from "../unsplashClient";

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {

    const data = await unsplashClient.photos.get({ photoId: params.id })


    if (!data.response) return NextResponse.json(null, { status: 404 })

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

    return NextResponse.json(photoData)
}