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

const Uchit = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				Памятник "Учительнице"
			</PanelHeader>

			<Gallery
				slideWidth='100%'
				style={{ height: 225 }}
				align='center'
				bullets='light'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-10.userapi.com/gDvaXz6I9kpBWiXacCFUhIYcsW7nr6YuvxbtPg/EpZjiyuQZMA.jpg'
					alt='Uchit'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-57.userapi.com/wZ8zDXfvMisCUQrK2PlDXgJPI3zx7MVYP3WB2A/EJWBLdAb2tY.jpg'
					alt='Uchit'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Монумент всем работникам образования.
				<br />
				<br />
				Скульптура установлена в 2016 году по инициативе студентов
				педагогического университета. Скульптором стал Григорий Потоцкий, а
				профинансировал проект местный предприниматель Владимир Самборский.
				<br />
				Ходит легенда, что если потереть пятёрку у основания памятника, то
				студент сможет сдать экзамены на "Отлично".
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>
					ул. Артёма, 9
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
						defaultState={{ center: [61.256509, 73.357769], zoom: 17 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.256509, 73.357769]}
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

export default Uchit;
