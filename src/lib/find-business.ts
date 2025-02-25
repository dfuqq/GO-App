import { prisma } from '../../prisma/prisma-client';

export const findBusiness = async (type: string) => {
	try {
		const data = await prisma.business.findMany({
			where: {
				category: {
					name: type,
				},
			},
		});

		return data;
	} catch (error) {
		console.error(error);
	}
};
