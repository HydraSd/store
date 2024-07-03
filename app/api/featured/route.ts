import { NextResponse } from "next/server";
import FeaturedProducts from "@/app/firebase/featured-products";


export async function GET(req: Request) {
    try {
        const featuredProducts = (await FeaturedProducts()).data;
        return Response.json({featuredProducts})
    }catch(e) {
        console.error("Error fetching blogs:", e);
        return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
    }
}