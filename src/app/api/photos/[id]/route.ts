import {NextRequest, NextResponse} from "next/server";
import {getPhoto} from "../../../../lib/unsplashClient";

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
    console.log('params', params);
    const photoData = await getPhoto(params.id)

    if (!photoData) return NextResponse.json(null, { status: 404 })

    return NextResponse.json(photoData)
}