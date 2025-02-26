import { prisma } from '../../prisma/prisma-client';

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
	}
};

export const findPlacesByCategory = async (
	areaSlug: string,
	categories: string
) => {
	const categoriesSearch = categories
		.split(',')
		.map(
			(category) =>
				category.charAt(0).toUpperCase() +
				category.slice(1).toLowerCase()
		);

	try {
		if (areaSlug === 'ALL') {
			const data = await prisma.place.findMany({
				where: {
					category: {
						name: {
							in: categoriesSearch,
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
								in: categoriesSearch,
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
