'use client';
import { View } from '@vkontakte/vkui';
import { Credits } from '../../../../src/components';
import React from 'react';

export default function ProjectsPage() {
	return (
		<View
			nav='about'
			activePanel='credits'>
			<Credits nav='credits' />
		</View>
	);
}
