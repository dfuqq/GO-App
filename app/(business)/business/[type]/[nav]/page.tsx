'use client';

import React, { useState } from 'react';

import {
	LocationItem,
	LocationItemGeoError,
} from '../../../../../src/components/';
import { ScreenSpinner } from '@vkontakte/vkui';
import { useBusiness } from '../../../../../src/hooks';
import { notFound } from 'next/navigation';

export default function BusinessItemPage() {
	const [ignoreError, setIgnoreError] = useState(false);
	const { data, loading, nav, geo, geoLoading, geoError } = useBusiness();

	if (!loading && !data) return notFound();

	if (loading || (geoLoading && !geoError)) return <ScreenSpinner />;
	// TODO: 404 Page

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
