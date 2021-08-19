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

const Nab = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				Набережная Речпорта
			</PanelHeader>

			<Gallery
				slideWidth='100%'
				style={{ height: 225 }}
				align='center'
				bullets='light'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-69.userapi.com/JYM4u9E7Eph8eMcFrEHA0FNiaxUitQ0McvRYKw/MeDUqjAKstk.jpg'
					alt='Nab'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-31.userapi.com/VDLfRdBKWW_eGbxAq005rwv1aCVx2Bv6gdkLSQ/nvZj-ATH__c.jpg'
					alt='Nab'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-8.userapi.com/jOyD5H2oTJTEuFcDqZD1FD4XVqnXolUn_JbUwg/9x4VZCLzbnE.jpg'
					alt='Nab'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-46.userapi.com/7LDAr-kKMWXESR09K6OIoJ_A7tFkT9McXBQ6bw/1R6sdtFd34g.jpg'
					alt='Nab'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Любимое место для прогулок Сургутян.
				<br />
				<br />
				Длина набережной около полутора километров. На её территории находятся
				скамейки, а также несколько монументов. Кроме того, летом отсюда ведутся
				речные прогулки.
				<br />В 2020 году на набережной появился самый длинный арт-объект Югры
				"Набережная Жизни", который растянулся на полкилометра в длину
				набережной.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>
					Рыбников, 19
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
						defaultState={{ center: [61.231489, 73.476656], zoom: 16.4 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.231489, 73.476656]}
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

export default Nab;
