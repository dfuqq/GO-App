import { Images } from './types';

type ImagesDTO = Images & {
	area: 'cntr' | 'nl' | 'nwl' | 'west';
	category:
		| 'parks'
		| 'museums'
		| 'monuments'
		| 'entertainments'
		| 'architecture';
};

export const placesBannersGalleryData: ImagesDTO[] = [
	{
		src: 'https://sun9-55.userapi.com/yTKHn4Y6ptM-Jz-Y9A0HD-C8gZFMHaZuwS-K7g/KdONUzkzZM4.jpg',
		alt: 'osnovcrd',
		placeSlug: 'osnov',
		area: 'cntr',
		category: 'monuments',
	},
	{
		src: 'https://sun9-44.userapi.com/I-UM88WCVwVhh5QpE8FGmogz6aKLdxmBc4bq0A/mgk6RgOq5c0.jpg',
		alt: 'ssur',
		placeSlug: 'ssur',
		area: 'cntr',
		category: 'museums',
	},
	{
		src: 'https://sun9-54.userapi.com/BnecEL2jHbz1VyNwTq5eKfqX_oUGImiu-rgMdQ/Z4cL14qo8xQ.jpg',
		alt: 'kedr',
		placeSlug: 'kedr',
		area: 'cntr',
		category: 'parks',
	},
	{
		src: 'https://sun9-40.userapi.com/CPi8dmJxIXPbYDobKqlhAscmGyTrZ-9E9dgE9g/KLVlFRaqlC4.jpg',
		alt: 'saima',
		placeSlug: 'saima',
		area: 'west',
		category: 'parks',
	},
	{
		src: 'https://sun9-75.userapi.com/g7zQFq8An0RZorOQSd67af_OJRQ6OzGK-2OhvQ/EX39HRhSuf0.jpg',
		alt: 'univ',
		placeSlug: 'univ',
		area: 'west',
		category: 'architecture',
	},
];
