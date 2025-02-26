'use client';

import { ScreenSpinner, View } from '@vkontakte/vkui';
import { Business } from '../../../src/components/Business';
import React, { Suspense } from 'react';

export default function BusinessPage() {
	return (
		<Suspense fallback={<ScreenSpinner />}>
			<View
				nav='business'
				activePanel='business'>
				<Business nav='business' />
			</View>
		</Suspense>
	);
}
