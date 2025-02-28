import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../prisma/prisma-client';
import { Business, Image, Placemark } from '@prisma/client';

export type BusinessDTO = Business & {
	images: Image[];
	placemarks: Placemark[];
};

// FIXME: await params
export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ type: string; nav: string }> }
) {
	try {
		const { nav } = await params;
		const business: BusinessDTO | null = await prisma.business.findUnique({
			where: { slug: nav },

			include: { images: true, placemarks: true },
		});

		if (!business) {
			return NextResponse.json(
				{ error: 'Business not found' },
				{ status: 404 }
			);
		}

		return NextResponse.json(business);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: 'Failed to fetch cafe' },
			{ status: 500 }
		);
	}
}
