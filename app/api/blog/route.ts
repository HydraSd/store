import GetData from "@/app/firebase/get-data";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const blogs = await GetData("blogs");
        return NextResponse.json({blogs});
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
    }
}
