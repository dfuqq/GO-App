'use client';

import { View } from '@vkontakte/vkui';
import { Home } from '../../src/components';
import React from 'react';

// TODO: redirects to / from /home|empty history pop
export default function HomePage() {
	return (
		<View
			nav='home'
			activePanel='home'>
			<Home nav='home' />
		</View>
	);
}
