import { NextRequest, NextResponse } from "next/server";
import { unsplashClient } from "../unsplashClient";

export async function GET(request: NextRequest) {
    const params = new URL(request.url).searchParams;
    const query = params.get('q');
    if (!query) {
        return NextResponse.json({data: [], total: 0})
    }
    console.log('search-query', query)
    const data = await unsplashClient.search.getPhotos({query, page: 1, perPage: 12})
    console.log('search-data-unsplash', data)
    return NextResponse.json({data: data.response?.results ?? [], total: data.response?.total ?? 0})
}