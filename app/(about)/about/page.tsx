'use client';
import { View } from '@vkontakte/vkui';
import { About } from '../../../src/components';
import React from 'react';

export default function AboutPage() {
	return (
		<View
			nav='about'
			activePanel='about'>
			<About nav='about' />
		</View>
	);
}
