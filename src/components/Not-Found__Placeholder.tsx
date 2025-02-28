'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button, Panel, Placeholder } from '@vkontakte/vkui';
import { Icon24CloudSlashOutline } from '@vkontakte/icons';

export const NotFoundPlaceholder = () => {
	const router = useRouter();

	return (
		<Panel centered>
			<Placeholder
				icon={
					<Icon24CloudSlashOutline
						width={96}
						height={96}
					/>
				}
				action={
					<Button
						size='l'
						onClick={() => router.push('/')}>
						Вернуться на главную
					</Button>
				}
				title='404: Не найдено'>
				Такого адреса у нас нет...
				<br />
				Но у нас есть много интересного на главной странице – посмотрим?
			</Placeholder>
		</Panel>
	);
};
