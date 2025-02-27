'use client';

import { View } from '@vkontakte/vkui';
import { Business } from '../../../src/components/Business';
import React from 'react';

export default function BusinessPage() {
	return (
		<View
			nav='business'
			activePanel='business'>
			<Business nav='business' />
		</View>
	);
}
