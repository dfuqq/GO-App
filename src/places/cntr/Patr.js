import React, { Fragment } from 'react';
import { YMaps, Map, Placemark, Circle } from 'react-yandex-maps';

import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Cell,
	Group,
	Gallery,
	Separator,
} from '@vkontakte/vkui';

import Icon28PlaceOutline from '@vkontakte/icons/dist/28/place_outline';
import Icon28MoneyCircleOutline from '@vkontakte/icons/dist/28/money_circle_outline';
import Icon24Link from '@vkontakte/icons/dist/24/link';

const Patr = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				Центр Патриотического Наследия
			</PanelHeader>

			<Gallery
				slideWidth='100%'
				style={{ height: 225 }}
				align='center'
				bullets='light'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-35.userapi.com/vDY0nh6cOM0k9Zy6Zt1cPLEuEkxrjblhJMAD5Q/ZwxNfFOhN9k.jpg'
					alt='Patr'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-72.userapi.com/eDlsgZ-a4RCr72ImHP_xa2OA8I1ZWiEwn_4cAg/GAz1sxbaDE8.jpg'
					alt='Patr'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Единственный центр в округе, ведущий исследования по патриотической
				тематике.
				<br />
				<br />
				Открыл свои двери 22 июня 2007 года. На выставках, представленных в
				стенах центра, посетители смогут увидеть реликвии времён ВОВ, такие как
				дневники, фотографии, письма, награды.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell
					size='l'
					before={<Icon28PlaceOutline width={24} height={24} />}
					description='12:00 - 19:00 (Пн, Вт - выходной)'>
					Просвещения, 7/1
				</Cell>
				<Cell
					size='l'
					before={<Icon28MoneyCircleOutline width={24} height={24} />}>
					Для детей от 4 до 6 лет – 30 руб.
					<br />
					Для детей от 7 до 18 лет – 50 руб.
					<br />
					Взрослый – 100 руб.
				</Cell>
				<Cell
					size='l'
					before={<Icon24Link />}
					href='https://skmuseum.ru/cpn'
					target='_blank'>
					skmuseum.ru
				</Cell>
			</Group>

			<Group
				style={{
					display: 'flex',
					justifyContent: 'center',
					paddingBottom: '12px',
				}}>
				<YMaps>
					<Map
						defaultState={{ center: [61.235117, 73.402549], zoom: 17 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.235117, 73.402549]}
							defaultOptions={{
								preset: 'islands#blueLeisureCircleIcon',
								iconColor: '#000',
							}}
						/>
						{geo[0] !== undefined && (
							<Fragment>
								<Circle
									defaultGeometry={[[geo[1], geo[0]], 200]}
									options={{
										draggable: false,
										fillColor: 'rgba(0, 0, 0, 0.5)',
										strokeColor: '#000',
										strokeOpacity: 0.8,
										strokeWidth: 2,
									}}
								/>
							</Fragment>
						)}
					</Map>
				</YMaps>
			</Group>
		</Panel>
	);
};

export default Patr;
