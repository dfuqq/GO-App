import { NextRequest, NextResponse } from 'next/server';
import { findBusiness } from '../../../src/lib/find-business';

export async function GET(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url);
		const type: string = searchParams.get('type');

		const data = await findBusiness(type);
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json(
			{ error: 'Failed to fetch cafes' },
			{ status: 500 }
		);
	}
}
