'use client';
import { PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import { useRouter } from 'next/navigation';
import React from 'react';

interface Props {
	title: string;
}

export const PanHead = ({ title }: Props) => {
	const router = useRouter();
	return (
		// TODO: After logo to main
		<PanelHeader
			fixed={false}
			before={
				<PanelHeaderBack
					label=''
					onClick={() => router.back()}></PanelHeaderBack>
			}>
			{title}
		</PanelHeader>
	);
};
