import { prisma } from '../../prisma/prisma-client';

export const findCafes = async () => {
	try {
		const data = await prisma.business.findMany({
			where: {
				category: {
					type: 'CAFE',
				},
			},
		});

		return data;
	} catch (error) {
		console.error(error);
	}
};
