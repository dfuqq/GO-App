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
		<PanelHeader
			before={
				<PanelHeaderBack
					onClick={() => router.back()}></PanelHeaderBack>
			}>
			{title}
		</PanelHeader>
	);
};
