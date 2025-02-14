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

export interface Images {
	src: string;
	alt: string;
	businessSlug?: string;
	placesSlug?: string;
}
