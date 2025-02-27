'use client';

import React from 'react';

import { LocationItem } from '../../../../../src/components/';
import { ScreenSpinner } from '@vkontakte/vkui';
import { useBusiness } from 'src/hooks';

export default function BusinessItemPage() {
	const { data, loading, nav } = useBusiness();

	if (loading) return <ScreenSpinner />;
	// TODO: 404 Page
	if (!data) return <h1>404 Not found</h1>;

	return (
		<LocationItem
			nav={nav}
			item={data}
		/>
	);
}
