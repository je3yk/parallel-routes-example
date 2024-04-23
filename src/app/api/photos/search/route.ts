import { NextRequest, NextResponse } from "next/server";
import { unsplashClient } from "../unsplashClient";

export async function GET(request: NextRequest) {
    const params = new URL(request.url).searchParams;
    const query = params.get('q');
    if (!query) {
        return NextResponse.json({data: [], total: 0})
    }

    const data = await unsplashClient.search.getPhotos({query, page: 1, perPage: 12})

    return NextResponse.json({data: data.response?.results ?? [], total: data.response?.total ?? 0})
}