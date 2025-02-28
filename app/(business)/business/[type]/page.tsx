'use client';

import { View } from '@vkontakte/vkui';
import React from 'react';

import { BusinessType } from '../../../../src/components';
import { useParams } from 'next/navigation';
import { findBusinessTitle } from 'src/lib/find-business-title';

export default function BusinessTypePage() {
	const params = useParams();
	const type = String(params.type);
	// NOTE: W/a for type conversion, check later for human solution
	const searchType = type.charAt(0).toUpperCase() + type.slice(1, -1);

	return (
		<View
			nav='business'
			activePanel='businessType'>
			<BusinessType
				nav='businessType'
				type={type}
				title={findBusinessTitle(type)}
				searchType={searchType}
			/>
		</View>
	);
}
