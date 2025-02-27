import { BusinessDTO } from 'app/api/business/[type]/[nav]/route';
import { PlaceDTO } from 'app/api/places/[area]/[nav]/route';

export const getIsBusiness = (
	item: BusinessDTO | PlaceDTO
): item is BusinessDTO => {
	return 'phone' in item && 'priceFrom' in item;
};
