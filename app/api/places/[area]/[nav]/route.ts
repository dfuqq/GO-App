import { NextResponse } from 'next/server';
import { prisma } from '../../../../../prisma/prisma-client';
import { Image } from '@prisma/client';
import { Places } from '../../../../../prisma/data/types';

export type PlaceDTO = Places & {
	images: Image[];
};

// FIXME: await params
export async function GET(
	req: Request,
	{ params }: { params: { nav: string } }
) {
	try {
		const place: PlaceDTO = await prisma.place.findUnique({
			where: {
				slug: params.nav,
			},
			include: {
				images: true,
			},
		});
		return NextResponse.json(place);
	} catch (error) {
		return NextResponse.json(
			{ error: 'Failed to fetch place' },
			{ status: 500 }
		);
	}
}
