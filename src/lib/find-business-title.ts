export const findBusinessTitle = (type: string) => {
	switch (type) {
		case 'cafes':
			return 'Кафе';
		case 'bars':
			return 'Бары';
		case 'hookahs':
			return 'Кальянные';
		case 'restaraunts':
			return 'Рестораны';
		default:
			return 'Заведения';
	}
};
