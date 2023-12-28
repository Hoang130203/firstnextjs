import { NextResponse } from "next/server";
export async function GET() {
    // Xử lý yêu cầu ở đây

    // Trả về dữ liệu dưới dạng JSON
    return NextResponse.json({ message: 'Hello from the API' });

}