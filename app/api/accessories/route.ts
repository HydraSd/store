import { NextResponse } from "next/server";
import GetByType from "@/app/firebase/getBy-part";

export async function GET(req: Request) {
    try {
        const accessories = (await GetByType("Interior and Exterior Accessories", 'products')).results;
        return Response.json({accessories});
    } catch (error) {
        console.error("Error fetching accessories:", error);
        return NextResponse.json({ error: "Failed to fetch accessories" }, { status: 500 });
    }
}
