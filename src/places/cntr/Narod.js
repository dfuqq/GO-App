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

const Narod = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				Памятник "Дружбы Народов"
			</PanelHeader>

			<Gallery
				slideWidth='100%'
				style={{ height: 225 }}
				align='center'
				bullets='light'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-9.userapi.com/h-fqRKbpTHFNQhLdkymVVldtovnH66qtm712lg/viCARPLajyQ.jpg'
					alt='Narod'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-11.userapi.com/m3_-1FBSMASBp82oRGBxIVJAo7la-ZZACFSGLQ/w8DBYgeDywc.jpg'
					alt='Narod'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-37.userapi.com/yxfTubhHRZcPrqbnQ4tbHrhQAEcuSXyrmE3t7A/f_LGk7RUt5U.jpg'
					alt='Narod'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Памятник многолетней дружбе русского и армянского народа.
				<br />
				<br />
				Установлен в 2015 году. Представляет из себя два камня (Россию и
				Армению), соединённых крестом — символом единой веры.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>
					Островского, 14/1
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
						defaultState={{ center: [61.257943, 73.398933], zoom: 17 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.257943, 73.398933]}
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

export default Narod;
