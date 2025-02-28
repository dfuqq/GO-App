import { prisma } from '@/prisma/prisma-client';
import { getCategoriesArray } from './';

export const findPlacesByArea = async (areaSlug: string) => {
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
		throw error;
	}
};

export const findPlacesByCategory = async (
	areaSlug: string,
	categories: string
) => {
	const categoriesArray = getCategoriesArray(categories);

	try {
		if (areaSlug === 'ALL') {
			const data = await prisma.place.findMany({
				where: {
					category: {
						name: {
							in: categoriesArray,
						},
					},
				},
			});
			return data;
		}

		const data = await prisma.place.findMany({
			where: {
				AND: [
					{
						areaSlug: areaSlug,
					},
					{
						category: {
							name: {
								in: categoriesArray,
							},
						},
					},
				],
			},
		});
		return data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
