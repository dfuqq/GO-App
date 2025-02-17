'use client';

import { View } from '@vkontakte/vkui';
import { Home } from '../../../src/panels';
import React from 'react';

export default function HomePage() {
	return (
		<View
			nav='home'
			activePanel='home'>
			<Home nav='home' />
		</View>
	);
}
