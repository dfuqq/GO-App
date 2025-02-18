import { BusinessCategoryType } from '@prisma/client';
import { prisma } from '../../prisma/prisma-client';

export const findBusiness = async (type: BusinessCategoryType) => {
	try {
		const data = await prisma.business.findMany({
			where: {
				category: {
					type,
				},
			},
		});

		return data;
	} catch (error) {
		console.error(error);
	}
};
