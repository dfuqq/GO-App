'use client';
import { PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import { useRouter } from 'next/navigation';
import React from 'react';

interface Props {
	title: string;
	route?: string;
}

export const PanHead = ({ title, route }: Props) => {
	const router = useRouter();
	return (
		// TODO: After logo to main
		<PanelHeader
			fixed={false}
			before={
				<PanelHeaderBack
					label=''
					aria-label='Back'
					onClick={() =>
						route ? router.push(route) : router.back()
					}></PanelHeaderBack>
			}>
			{title}
		</PanelHeader>
	);
};
