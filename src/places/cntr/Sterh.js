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
import Icon24Link from '@vkontakte/icons/dist/24/link';
import Icon24LogoVk from '@vkontakte/icons/dist/24/logo_vk';

const Sterh = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				Галерея "Стерх"
			</PanelHeader>

			<Gallery
				slideWidth='100%'
				style={{ height: 225 }}
				align='center'
				bullets='light'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-45.userapi.com/ob34PQKAv_oHdLh5hb2dydrTonZL98T8RGDokg/PmHzhtNAJjk.jpg'
					alt='Sterh'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-53.userapi.com/XaWWLqV_uardQCYvmzQqxxTkt7ZEX1vr8vRWGw/_jV7poD5agg.jpg'
					alt='Sterh'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-49.userapi.com/tVW1FmQ6GYzdCFpKC4YfNhwm6uTZ6CkZzn0s8w/jkLyMmO_fbE.jpg'
					alt='Sterh'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Основная площадка современного искусства в Сургуте и ХМАО-Югре.
				<br />
				<br />
				Основана в 2001 году по инициативе художников А.Курникова, В.Арзамасова
				и искусствоведа Л.Гуровой.
				<br />В стенах галереи круглый год проводят выставки современного
				искусства, организуются арт-занятия и творческие встречи, а также
				проводятся экскурсии.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell
					size='l'
					before={<Icon28PlaceOutline width={24} height={24} />}
					description='11:00 - 18:00 (Пн, Вт - выходной)'>
					Магистральная, 34/1
				</Cell>
				<Cell
					size='l'
					before={<Icon24Link />}
					href='https://art-sterh.ru'
					target='_blank'>
					art-sterh.ru
				</Cell>
				<Cell
					size='l'
					before={<Icon24LogoVk />}
					href='https://vk.com/sterh_art'
					target='_blank'>
					Группа VK
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
						defaultState={{ center: [61.25824, 73.375017], zoom: 17 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.25824, 73.375017]}
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

export default Sterh;
