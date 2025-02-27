import { NextRequest, NextResponse } from 'next/server';
import { findPlacesByArea, findPlacesByCategory } from '../../../src/lib';

export async function GET(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url);
		const area: string = searchParams.get('area');
		const categories: string | null = searchParams.get('categories');

		if (categories !== null && categories.trim().length > 0) {
			const data = await findPlacesByCategory(area, categories);
			return NextResponse.json(data);
		}
		const data = await findPlacesByArea(area);
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json(
			{ error: 'Failed to fetch places' },
			{ status: 500 }
		);
	}
}
