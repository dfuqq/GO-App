'use client';

import { View } from '@vkontakte/vkui';
import { Restaraunts } from '../../../../src/components/';
import React from 'react';

export default function RestarauntPage() {
	return (
		<View
			nav='business'
			activePanel='restaraunts'>
			<Restaraunts nav='restaraunts' />
		</View>
	);
}
