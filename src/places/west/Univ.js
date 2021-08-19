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

const Univ = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				Университетская
			</PanelHeader>

			<Gallery
				slideWidth='100%'
				style={{ height: 225 }}
				align='center'
				bullets='light'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-53.userapi.com/KTYVpFaEtnhb7jIHKfX1etYgYK6lf1hGfBpENw/6KDly-cIdQk.jpg'
					alt='Univ'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-50.userapi.com/iGYCB6KOhZqd2Bu6OWHnlAh7i_CYLYu5jmyf8Q/LBfEwyJHQQo.jpg'
					alt='Univ'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-61.userapi.com/zrAxDLBHkuW2ci4WjlmjDNDoTYunomuzKtHJ7w/u6y5gWOk7wY.jpg'
					alt='Univ'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-62.userapi.com/cFpwN_NIpodOvLLzi2sx3J9wlconVnPsfG-VlQ/ODze9iKoj0Q.jpg'
					alt='Univ'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Одна из самых ярких и загруженных улиц города.
				<br />
				<br />
				Обилие многоквартирных новостроек делает город более современным, а
				находящиеся рядом парки и скверы создают комфортную для проживания
				среду.
				<br />
				Большинство горожан любит прогуливаться тут по вечерам.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>
					Университетская
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
						defaultState={{ center: [61.248175, 73.432181], zoom: 16 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.248175, 73.432181]}
							defaultOptions={{
								preset: 'islands#blueVegetationCircleIcon',
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

export default Univ;
