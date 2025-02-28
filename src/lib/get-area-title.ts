import { areasList } from 'src/consts';

export const getAreaTitle = (value: string) => {
	const area = areasList.find((area) => area.value === value);
	return area ? area.title : null;
};
