'use client';
import { Icon24HomeOutline } from '@vkontakte/icons';
import { Div, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
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
			}
			after={
				<Div
					style={{ cursor: 'pointer' }}
					onClick={() => router.push('/')}>
					<Icon24HomeOutline />
				</Div>
			}>
			{title}
		</PanelHeader>
	);
};
