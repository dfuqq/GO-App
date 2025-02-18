'use client';

import { View } from '@vkontakte/vkui';
import { Cafes } from '../../../../src/components/Cafes';
import React from 'react';

export default function CafesPage() {
	return (
		<View
			nav='home'
			activePanel='home'>
			<Cafes nav='home' />
		</View>
	);
}
