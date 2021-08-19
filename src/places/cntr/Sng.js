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

const Sng = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				ПАО "Сургутнефтегаз"
			</PanelHeader>

			<Gallery
				slideWidth='100%'
				style={{ height: 225 }}
				align='center'
				bullets='light'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-24.userapi.com/n1UaZISQ9J1m3xw1LtFI2qNuWhk_K27t9ZSW0A/NhvBHOysddw.jpg'
					alt='Sng'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-62.userapi.com/Sri3VDDUA409p2971s4F2iR7Y5WMNXU-W4_3lQ/0EtHVhgL6Qg.jpg'
					alt='Sng'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-10.userapi.com/FPgnBt77zSPGBZe0xux1ZeyTSr18ZUvH4lvS6A/DcHybApF5yg.jpg'
					alt='Sng'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Главный офис градообразующего предприятия "Сургутнефтегаз".
				<br />
				<br />
				Примечателен дизайн здания: обилие гранита и стекла, а также активное
				использование подсветки приковывают к себе взгляды.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>
					Григория Кукуевицкого, 1/1
				</Cell>
				<Cell
					size='l'
					before={<Icon24Link />}
					href='https://surgutneftegas.ru'
					target='_blank'>
					surgutneftegas.ru
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
						defaultState={{ center: [61.26274, 73.374071], zoom: 17 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.26274, 73.374071]}
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

export default Sng;
