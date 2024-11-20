import {NextRequest, NextResponse} from "next/server";
import {searchPhotos} from "../../../../lib/unsplashClient";

export async function GET(request: NextRequest) {
    const params = new URL(request.url).searchParams;
    const query = params.get('q');
    const searchResults = await searchPhotos(query);
    return NextResponse.json(searchResults);
}