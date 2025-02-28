'use client';

import { View } from '@vkontakte/vkui';
import { Places } from '../../../src/components/Places';
import React, { Suspense } from 'react';

export default function PlacesPage() {
	return (
		<Suspense>
			<View
				nav='places'
				activePanel='places'>
				<Places nav='places' />
			</View>
		</Suspense>
	);
}
