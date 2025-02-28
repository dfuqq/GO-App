import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma-client';
import { Image } from '@prisma/client';
import { Places } from '@/prisma/data/types';

export type PlaceDTO = Places & {
	images: Image[];
};

// FIXME: await params
export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ area: string; nav: string }> }
) {
	try {
		const { nav } = await params;
		const place: PlaceDTO = await prisma.place.findUnique({
			where: {
				slug: nav,
			},
			include: {
				images: true,
			},
		});
		return NextResponse.json(place);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: 'Failed to fetch place' },
			{ status: 500 }
		);
	}
}
