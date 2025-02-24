import { NextRequest, NextResponse } from 'next/server';
import { findPlaces } from '../../../src/lib/find-places';

export async function GET(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url);
		const area = searchParams.get('area');

		const data = await findPlaces(area);
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json(
			{ error: 'Failed to fetch NWL places' },
			{ status: 500 }
		);
	}
}
