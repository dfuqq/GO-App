export const getCategoriesArray = (categories: string) => {
	return categories
		.split(',')
		.map(
			(category) =>
				category.charAt(0).toUpperCase() +
				category.slice(1).toLowerCase()
		);
};
