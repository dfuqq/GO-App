// app/api/cafes/route.ts
import { NextResponse } from 'next/server';
import { findCafes } from '../../../../src/lib/find-cafes';

export async function GET() {
	try {
		const data = await findCafes();
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json(
			{ error: 'Failed to fetch cafes' },
			{ status: 500 }
		);
	}
}
