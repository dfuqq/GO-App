'use client';
import { View } from '@vkontakte/vkui';
import { Projects } from '../../../../src/components';
import React from 'react';

export default function ProjectsPage() {
	return (
		<View
			nav='about'
			activePanel='projects'>
			<Projects nav='projects' />
		</View>
	);
}
