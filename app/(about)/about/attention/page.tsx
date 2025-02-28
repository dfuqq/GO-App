'use client';
import { View } from '@vkontakte/vkui';
import { Attention } from '../../../../src/components';
import React from 'react';

export default function AttentionPage() {
	return (
		<View
			nav='about'
			activePanel='attention'>
			<Attention nav='attention' />
		</View>
	);
}
