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
	social: string;
	socialHref: string;
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
