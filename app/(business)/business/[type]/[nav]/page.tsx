'use client';

import React, { useState } from 'react';

import {
	LocationItem,
	LocationItemGeoError,
} from '../../../../../src/components/';
import { ScreenSpinner } from '@vkontakte/vkui';
import { useBusiness } from '../../../../../src/hooks';

export default function BusinessItemPage() {
	const [ignoreError, setIgnoreError] = useState(false);
	const { data, loading, nav, geo, geoLoading, geoError } = useBusiness();

	if (loading || (geoLoading && !geoError)) return <ScreenSpinner />;
	// TODO: 404 Page
	if (!data) return <h1>404 Not found</h1>;

	if (geoError && !ignoreError)
		return <LocationItemGeoError setIgnoreError={setIgnoreError} />;

	if ((geoError && ignoreError) || (!geoError && data))
		return (
			<LocationItem
				nav={nav}
				geo={geo}
				item={data}
			/>
		);
}
