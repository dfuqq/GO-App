import { prisma } from '@/prisma/prisma-client';

export const findBusiness = async (type: string) => {
	try {
		const data = await prisma.business.findMany({
			where: {
				category: {
					name: type,
				},
			},
			include: {
				category: {
					select: {
						name: true,
					},
				},
			},
		});

		return data;
	} catch (error) {
		console.error(error);
	}
};
