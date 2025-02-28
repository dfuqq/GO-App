'use client';

import React from 'react';

import { LocationItem } from '../../../../../src/components';
import { ScreenSpinner } from '@vkontakte/vkui';
import { usePlacesNav } from 'src/hooks';

export default function PlaceItemPage() {
	const { data, loading, geo } = usePlacesNav();

	if (loading) return <ScreenSpinner />;
	// TODO: 404 Page
	if (!data) return <h1>404 Not found</h1>;

	return (
		<LocationItem
			geo={geo}
			nav={data.slug}
			item={data}
		/>
	);
}
