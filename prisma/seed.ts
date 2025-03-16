import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

import {
	cafesData,
	cafesImagesData,
	cafesPlacemarksData,
} from './data/cafes-data';
import { barsData, barsImagesData, barsPlacemarksData } from './data/bars-data';
import { hookahsData, hookahsImagesData } from './data/hookahs-data';
import {
	restarauntsData,
	restarauntsImagesData,
	restarauntsPlacemarksData,
} from './data/restaraunts-data';

import { Business, Images, Placemarks, Places } from './data/types';
import { placesNwlData, placesNwlImagesData } from './data/places__nwl-data';
import { placesNlData, placesNlImagesData } from './data/places__nl-data';
import { placesWestData, placesWestImagesData } from './data/places__west-data';
import { placesCntrData, placesCntrImagesData } from './data/places__cntr-data';

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
		businessesImagesData: Images[],
		businessPlacemarksData?: Placemarks[]
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

			businessPlacemarksData &&
				(await Promise.all(
					businessPlacemarksData?.map(async (placemarkData) => {
						await prisma.placemark.create({
							data: { ...placemarkData },
						});
					})
				));
		} catch (error) {
			console.error(error);
		}
	};
	pushBusinessAndImages(cafesData, cafesImagesData, cafesPlacemarksData);
	pushBusinessAndImages(barsData, barsImagesData, barsPlacemarksData);
	pushBusinessAndImages(hookahsData, hookahsImagesData);
	pushBusinessAndImages(
		restarauntsData,
		restarauntsImagesData,
		restarauntsPlacemarksData
	);

	const pushPlacesAndImages = async (
		placesData: Places[],
		placesImagesData: Images[]
	) => {
		try {
			await Promise.all(
				placesData.map(async (nwlData) => {
					await prisma.place.create({
						data: { ...nwlData },
					});
				})
			);

			await Promise.all(
				placesImagesData.map(async (imageData) => {
					await prisma.image.create({
						data: { ...imageData },
					});
				})
			);
		} catch (error) {
			console.error(error);
		}
	};
	pushPlacesAndImages(placesNwlData, placesNwlImagesData);
	pushPlacesAndImages(placesNlData, placesNlImagesData);
	pushPlacesAndImages(placesWestData, placesWestImagesData);
	pushPlacesAndImages(placesCntrData, placesCntrImagesData);
}

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "business_categories" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "place_categories" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "businesses" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "places" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "images" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "placemarks" RESTART IDENTITY CASCADE`;
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
