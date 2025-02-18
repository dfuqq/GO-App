import { prisma } from './prisma-client';
import { cafesData, cafesImagesData } from './data/cafes-data';
import { barsData, barsImagesData } from './data/bars-data';

async function up() {
	await prisma.businessCategory.createMany({
		data: [
			{
				name: 'Bar',
				type: 'BAR',
			},
			{
				name: 'Cafe',
				type: 'CAFE',
			},
			{
				name: 'Hookah',
				type: 'HOOKAH',
			},
			{
				name: 'Restaraunt',
				type: 'RESTAURANT',
			},
			{
				name: 'Other',
				type: 'OTHER',
			},
		],
	});

	await prisma.placeCategory.createMany({
		data: [
			{
				name: 'Architecture',
				type: 'ARCHITECTURE',
			},
			{
				name: 'Enterntaiment',
				type: 'ENTERTAINMENT',
			},
			{
				name: 'Monument',
				type: 'MONUMENT',
			},
			{
				name: 'Museum',
				type: 'MUSEUM',
			},
			{
				name: 'Park',
				type: 'PARK',
			},
			{
				name: 'Other',
				type: 'OTHER',
			},
		],
	});

	const pushCafesAndImages = async () => {
		try {
			await Promise.all(
				cafesData.map(async (cafeData) => {
					await prisma.business.create({
						data: { ...cafeData },
					});
				})
			);

			await Promise.all(
				cafesImagesData.map(async (imageData) => {
					await prisma.image.create({
						data: { ...imageData },
					});
				})
			);
		} catch (error) {
			console.error(error);
		}
	};
	pushCafesAndImages();

	const pushBarsAndImages = async () => {
		try {
			await Promise.all(
				barsData.map(async (barData) => {
					await prisma.business.create({
						data: { ...barData },
					});
				})
			);

			await Promise.all(
				barsImagesData.map(async (imageData) => {
					await prisma.image.create({
						data: { ...imageData },
					});
				})
			);
		} catch (error) {
			console.error(error);
		}
	};
	pushBarsAndImages();
}

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "business_categories" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "place_categories" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "businesses" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "places" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "images" RESTART IDENTITY CASCADE`;
}

async function main() {
	try {
		await down();
		await up();
	} catch (error) {
		console.error(error);
	}
}

main()
	.then(async () => {
		await prisma.$disconnect;
	})
	.catch(async (error) => {
		console.error(error);
		await prisma.$disconnect();
		process.exit(1);
	});
