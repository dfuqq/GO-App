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

const Gtrans = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				"Газпром Трансгаз"
			</PanelHeader>

			<Gallery
				slideWidth='100%'
				style={{ height: 225 }}
				align='center'
				bullets='light'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-46.userapi.com/VP8jJ_87GBN2F0Nzxdeq8bn3-J4Fl1AylrF1-A/Np47un0vWbU.jpg'
					alt='Gtrans'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-12.userapi.com/Lkv4CHQpcwrplJZwa894USuW2Wll16MPdhZQaw/5aHvsFMANf4.jpg'
					alt='Gtrans'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-46.userapi.com/vJFwhdyH96lshBLQC9vWx7KOKznbbeGLvcRWcA/91wX3v69RME.jpg'
					alt='Gtrans'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Главный офис градообразующего предприятия "Газпром Трансгаз".
				<br />
				<br />
				Находится на улице университетской, около СурГУ. В народе называется
				"Зажигалкой".
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>
					Университетская, 1
				</Cell>
				<Cell
					size='l'
					before={<Icon24Link />}
					href='https://surgut-tr.gazprom.ru'
					target='_blank'>
					surgut-tr.gazprom.ru
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
						defaultState={{ center: [61.24515, 73.405097], zoom: 17 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.24515, 73.405097]}
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

export default Gtrans;
