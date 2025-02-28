import { Icon24LocationSlash } from '@vkontakte/icons';
import { Button, ButtonGroup, Panel, Placeholder } from '@vkontakte/vkui';
import React from 'react';

interface Props {
	setIgnoreError: (ignoreError: boolean) => void;
}

export const LocationItemGeoError = ({ setIgnoreError }: Props) => {
	return (
		<Panel centered>
			<Placeholder
				icon={
					<Icon24LocationSlash
						width={96}
						height={96}
					/>
				}
				action={
					<ButtonGroup>
						<Button
							size='l'
							mode='primary'
							onClick={() => {
								window.location.reload();
							}}>
							Обновить страницу
						</Button>
						<Button
							size='l'
							mode='outline'
							onClick={() => {
								setIgnoreError(true);
							}}>
							Продолжить
						</Button>
					</ButtonGroup>
				}
				title='Проблемы с геолокацией'>
				Не удалось получить доступ к геолокации.
				<br />
				Можно попробовать обновить страницу или продолжить без
				геолокации.
				<br />В этом случае Ваше местоположение не будет показано на
				карте.
			</Placeholder>
		</Panel>
	);
};
