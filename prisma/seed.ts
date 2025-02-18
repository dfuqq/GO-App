import { prisma } from './prisma-client';
import { cafesData, cafesImagesData } from './data/cafes-data';
import { barsData, barsImagesData } from './data/bars-data';
import { hookahsData, hookahsImagesData } from './data/hookahs-data';
import {
	restarauntsData,
	restarauntsImagesData,
} from './data/restaraunts-data';
import { Business, Images } from './data/types';

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

	const pushBusinessAndImages = async (
		businessesData: Business[],
		businessesImagesData: Images[]
	) => {
		try {
			await Promise.all(
				businessesData.map(async (businessData) => {
					await prisma.business.create({
						data: { ...businessData },
					});
				})
			);

			await Promise.all(
				businessesImagesData.map(async (imageData) => {
					await prisma.image.create({
						data: { ...imageData },
					});
				})
			);
		} catch (error) {
			console.error(error);
		}
	};

	pushBusinessAndImages(cafesData, cafesImagesData);
	pushBusinessAndImages(barsData, barsImagesData);
	pushBusinessAndImages(hookahsData, hookahsImagesData);
	pushBusinessAndImages(restarauntsData, restarauntsImagesData);
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
