'use client';

import React, { useState } from 'react';

import {
	LocationItem,
	LocationItemGeoError,
} from '@/components/LocationItemComponents';
import { ScreenSpinner } from '@vkontakte/vkui';
import { usePlacesNav } from '@/src/hooks';
import { notFound } from 'next/navigation';

export default function PlaceItemPage() {
	const [ignoreError, setIgnoreError] = useState(false);
	const { data, loading, geo, geoLoading, geoError } = usePlacesNav();

	if (!loading && !data) return notFound();

	if (loading || (geoLoading && !geoError)) return <ScreenSpinner />;

	if (geoError && !ignoreError)
		return <LocationItemGeoError setIgnoreError={setIgnoreError} />;

	if ((geoError && ignoreError) || (!geoError && data))
		return (
			<LocationItem
				geo={geo}
				nav={data.slug}
				item={data}
			/>
		);
}
