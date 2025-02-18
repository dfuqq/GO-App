import { NextResponse } from 'next/server';
import { prisma } from '../../../../../prisma/prisma-client';
import { Business, Image } from '@prisma/client';

export type BusinessDTO = Business & { images: Image[] };

// FIXME: await params
export async function GET(
	req: Request,
	{ params }: { params: { nav: string } }
) {
	try {
		const bar: BusinessDTO | null = await prisma.business.findUnique({
			where: { slug: params.nav },

			include: { images: true },
		});

		if (!bar) {
			return NextResponse.json(
				{ error: 'Bar not found' },
				{ status: 404 }
			);
		}

		return NextResponse.json(bar);
	} catch (error) {
		return NextResponse.json(
			{ error: 'Failed to fetch Bar' },
			{ status: 500 }
		);
	}
}
