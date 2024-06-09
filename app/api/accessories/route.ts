import { NextResponse } from "next/server";
import GetByType from "@/app/firebase/getBy-part";

export async function GET(request: Request) {
    try {
        const accessories = (await GetByType("Interior and Exterior Accessories", 'products')).results;
        const data = await accessories.json()
        return Response.json(data);
    } catch (error) {
        console.error("Error fetching accessories:", error);
        return NextResponse.json({ error: "Failed to fetch accessories" }, { status: 500 });
    }
}
