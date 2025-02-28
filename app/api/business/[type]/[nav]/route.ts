import { NextResponse } from 'next/server';
import { prisma } from '../../../../../prisma/prisma-client';
import { Business, Image, Placemark } from '@prisma/client';

export type BusinessDTO = Business & {
	images: Image[];
	placemarks: Placemark[];
};

// FIXME: await params
export async function GET(
	req: Request,
	{ params }: { params: { nav: string } }
) {
	try {
		const business: BusinessDTO | null = await prisma.business.findUnique({
			where: { slug: params.nav },

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
		return NextResponse.json(
			{ error: 'Failed to fetch cafe' },
			{ status: 500 }
		);
	}
}
