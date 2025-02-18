'use client';

import { View } from '@vkontakte/vkui';
import { Hookah } from '../../../../src/components/';
import React from 'react';

export default function HookahPage() {
	return (
		<View
			nav='business'
			activePanel='hookah'>
			<Hookah nav='hookah' />
		</View>
	);
}
