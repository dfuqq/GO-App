import { prisma } from '../../prisma/prisma-client';

export const findPlaces = async (areaSlug: string) => {
	try {
		if (areaSlug === 'ALL') {
			const data = await prisma.place.findMany();
			return data;
		}

		const data = await prisma.place.findMany({
			where: {
				areaSlug: areaSlug,
			},
		});

		return data;
	} catch (error) {
		console.error(error);
	}
};
