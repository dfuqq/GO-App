import { NextResponse } from 'next/server';
import { prisma } from '../../../../../prisma/prisma-client';
import { Business, Image } from '@prisma/client';

export type BusinessDTO = Business & { images: Image[] };

export async function GET(
	req: Request,
	{ params }: { params: { nav: string } }
) {
	try {
		console.log(params.nav);

		const cafe: BusinessDTO | null = await prisma.business.findUnique({
			where: { slug: params.nav },

			include: { images: true },
		});

		if (!cafe) {
			return NextResponse.json(
				{ error: 'Cafe not found' },
				{ status: 404 }
			);
		}

		return NextResponse.json(cafe);
	} catch (error) {
		return NextResponse.json(
			{ error: 'Failed to fetch cafe' },
			{ status: 500 }
		);
	}
}
