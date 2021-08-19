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

const Bridge = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				Югорский Мост
			</PanelHeader>

			<Gallery
				slideWidth='100%'
				style={{ height: 225 }}
				align='center'
				bullets='light'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-37.userapi.com/Js4c5RXisV5G818w9NBlYCCm3_0ixZAC_0vUvg/HYxAQfEVRKY.jpg'
					alt='Bridge'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-10.userapi.com/gHdWTv9C5EX0WgNP6HvBDRFyIJk1AtYKqv8cEQ/Wlx9iTkWIEs.jpg'
					alt='Bridge'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-56.userapi.com/MwrjpAHA8PYyspJsu961RmrPsaYIEvqg4N039Q/ctIYFKxc1Cw.jpg'
					alt='Bridge'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Сургутский Мост через Обь. Связывает Сургут с другими регионами и
				является важнейшим транспортным узлом.
				<br />
				<br />
				Один из самых длинных мостов в Сибири — 2110 метров. Занесён в книгу
				Рекордов Гиннесса за длину подвесного пролёта, что составляет 408 метров
				и является самой большой величиной в мире.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>
					За п. Барсово, в сторону Нефтеюганска
				</Cell>
				<Cell
					size='l'
					before={<Icon24Link />}
					href='https://ugra-most.ru'
					target='_blank'>
					ugra-most.ru
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
						defaultState={{ center: [61.226061, 73.158936], zoom: 13 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.226061, 73.158936]}
							defaultOptions={{
								preset: 'islands#blueObservationCircleIcon',
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

export default Bridge;
