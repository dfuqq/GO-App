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

const Filarm = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				Сургутская филармония
			</PanelHeader>

			<Gallery
				slideWidth='100%'
				style={{ height: 225 }}
				align='center'
				bullets='light'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-45.userapi.com/uBZZ80Ff5EvwQWkJEuLBXFtjbepg-buVSjxluw/YxZ4FO2fQxo.jpg'
					alt='Filarm'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-22.userapi.com/W_2uZ5vgFCd09bt4vGjcQWs92S2dhbpwYaP8jw/neRBwqr8XmI.jpg'
					alt='Filarm'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Главный концертный зал Сургута.
				<br />
				<br />
				Основана 4 ноября 2003 года на месте бывшего ДК "Энергетик". Филармония
				часто проводит в своих стенах городские мероприятия, а также концерты
				отечественных и зарубежных исполнителей. Помимо этого, в филармони
				проводятся ежегодные российские фестивали и выставки.
				<br />
				Сургутская филармония является домашней площадкой для многих творческих
				коллективов города.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell
					size='l'
					before={<Icon28PlaceOutline width={24} height={24} />}
					description='10:00 - 21:00'>
					Энгельса, 18
				</Cell>
				<Cell
					size='l'
					before={<Icon24Link />}
					href='https://sfil.ru'
					target='_blank'>
					sfil.ru
				</Cell>
				<Cell
					size='l'
					before={<Icon24LogoVk />}
					href='https://vk.com/surgutfil'
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
						defaultState={{ center: [61.241278, 73.391116], zoom: 17 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.241278, 73.391116]}
							defaultOptions={{
								preset: 'islands#blueTheaterCircleIcon',
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

export default Filarm;
