'use client';

import { View } from '@vkontakte/vkui';
import { Places } from '../../../src/components/Places';
import React from 'react';

export default function PlacesPage() {
	return (
		<View
			nav='places'
			activePanel='places'>
			<Places nav='places' />
		</View>
	);
}
