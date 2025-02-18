'use client';

import { View } from '@vkontakte/vkui';
import { Bars } from '../../../../src/components/Bars';
import React from 'react';

export default function BarsPage() {
	return (
		<View
			nav='business'
			activePanel='bars'>
			<Bars nav='bars' />
		</View>
	);
}
