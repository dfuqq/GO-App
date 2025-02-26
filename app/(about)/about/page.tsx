'use client';
import { ScreenSpinner, View } from '@vkontakte/vkui';
import { About } from '../../../src/components';
import React, { Suspense } from 'react';

export default function AboutPage() {
	return (
		<Suspense fallback={<ScreenSpinner />}>
			<View
				nav='about'
				activePanel='about'>
				<About nav='about' />
			</View>
		</Suspense>
	);
}
