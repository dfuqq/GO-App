// app/api/cafes/route.ts
import { NextResponse } from 'next/server';
import { findBusiness } from '../../../../src/lib/find-business';

export async function GET() {
	try {
		const data = await findBusiness('BAR');
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json(
			{ error: 'Failed to fetch bars' },
			{ status: 500 }
		);
	}
}
