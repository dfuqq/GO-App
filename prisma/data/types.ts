export interface Business {
	slug: string;
	name: string;
	subtitle: string;
	description: string;
	descriptionHeader: string;
	address: string;
	hours: string;
	priceFrom: string;
	priceTo: string;
	phone: string;
	logo: string;
	insta: string;
	instaHref: string;
	categoryId: number;
}

export interface Places {
	slug: string;
	name: string;
	subtitle: string;
	description: string;
	descriptionHeader: string;
	address: string;
	areaSlug: string;
	area: string;
	hours?: string;
	price?: string;
	site?: string;
	siteHref?: string;
	insta?: string;
	instaHref?: string;
	vkHref?: string;
	utility?: string;
	categoryId: number;
}

export interface Images {
	src: string;
	alt: string;
	businessSlug?: string;
	placeSlug?: string;
}

export interface Card {
	src: string;
	title: string;
	type: string;
}

export interface BannerProps {
	title: string;
	subtitle: string;
	buttonText: string;
	buttonLink: string;
	backgroundImage: string;
}

export type ImagesBannersDTO = Images & {
	area?: 'cntr' | 'nl' | 'nwl' | 'west';
	category?:
		| 'parks'
		| 'museums'
		| 'monuments'
		| 'entertainments'
		| 'architecture';
	type?: string;
};
