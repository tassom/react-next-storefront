import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error fetching products:", error);
        return NextResponse.json(
            { error },
            { status: 500 }
        );
    }
}