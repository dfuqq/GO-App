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

const Ckid = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				ЦКИД "Камертон"
			</PanelHeader>

			<Gallery
				slideWidth='100%'
				style={{ height: 225 }}
				align='center'
				bullets='light'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-35.userapi.com/bAX87wIIe4S2a7DB4hJ6QUcmOOKlAJMONBpU8A/L-DDOzQhDMM.jpg'
					alt='Ckid'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-39.userapi.com/ifNtA8q5BG0YVK-SmSAojLvvH9t9uKiFWdNfcA/91cXIgLxZIE.jpg'
					alt='Ckid'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-56.userapi.com/AN7_gUAsNytU-pySUQPdqgsP1DY04GcMJOjfPQ/PepbxGqMUvY.jpg'
					alt='Ckid'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-54.userapi.com/aggC2qfp1w1gZHWnVtXZsHiLE_q4y1-X_Oc2ag/FE6gRW_Ls9o.jpg'
					alt='Ckid'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Один из концертных залов Сургута.
				<br />
				<br />
				Основан в 1990 году. В центре постоянно проводятся концерты и
				мероприятия с участием собственных коллективов. Кроме того, "Камертон"
				проводит и заказные мероприятия, а также выступает на городских
				мероприятиях.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell
					size='l'
					before={<Icon28PlaceOutline width={24} height={24} />}
					description=''>
					Островского, 16/1
				</Cell>
				<Cell
					size='l'
					before={<Icon24Link />}
					href='https://kassa-ugra.ru/venue/20871'>
					Афиша
				</Cell>
				<Cell
					size='l'
					before={<Icon24Link />}
					href='https://surgut-tr.gazprom.ru/tsentr-kultury-i-dosuga-kamer'
					target='_blank'>
					surgut-tr.gazprom.ru
				</Cell>
				<Cell
					size='l'
					before={<Icon24LogoVk />}
					href='https://vk.com/kamerton.hall'
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
						defaultState={{ center: [61.247272, 73.405787], zoom: 17 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.247272, 73.405787]}
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

export default Ckid;
