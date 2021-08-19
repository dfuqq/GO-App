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

const Tsgu = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				Театр СурГУ
			</PanelHeader>

			<Gallery slideWidth='100%' style={{ height: 225 }} align='center'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-13.userapi.com/zO6-rRTi7QOu9sjy8VdBhGIGuRWdpFlC_JavGw/q5JPOqcvamU.jpg'
					alt='Tsgu'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Один из ведущих театров города.
				<br />
				<br />
				Берёт свои корни из СурГУ, впоследствии стал самостоятельным.
				Единственный коллектив — театр пластики и пантомимы "Гротеск", актёры —
				студенты и выпускники университета, а также обычные люди.
				<br />
				Образован в 1997 году, и за всё время работы удостоен более полусотен
				престижных наград. Считается одним из лучших любительских театров
				России, является активным участником зарубежных фестивалей.
				<br />
				<br />
				Помимо этого, на сцене театра часто выступают приезжие гости.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>
					Ленина, 1
				</Cell>
				<Cell
					size='l'
					before={<Icon24Link />}
					href='https://kassa-ugra.ru/venue/64'
					target='_blank'>
					Афиша
				</Cell>
				<Cell
					size='l'
					before={<Icon24Link />}
					href='https://surgu.ru/zhizn-surgu/teatr-plastiki-i-pantomimy-grotesk/obschaya-informatsiya'
					target='_blank'>
					surgu.ru
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

export default Tsgu;
