import React, { Fragment } from 'react';
import { YMaps, Map, Placemark, Circle } from 'react-yandex-maps';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Separator from '@vkontakte/vkui/dist/components/Separator/Separator';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Gallery from '@vkontakte/vkui/dist/components/Gallery/Gallery';

import Icon28MoneyCircleOutline from '@vkontakte/icons/dist/28/money_circle_outline';
import Icon28LogoInstagram from '@vkontakte/icons/dist/28/logo_instagram';
import Icon28PlaceOutline from '@vkontakte/icons/dist/28/place_outline';
import Icon28PhoneOutline from '@vkontakte/icons/dist/28/phone_outline';

const Jin = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={() => window.history.back()}>
			</PanelHeaderBack>}
			separator={false}
		>
			Jin
		</PanelHeader>
        
		<Gallery
			slideWidth = "100%"
			style = {{ height: 210 }}
			align = "center"
			bullets="light"
		>
			<img style={{ objectFit: 'contain' }} src="https://sun9-66.userapi.com/Z8H37tGYqMzeTs6S1Sr-weqnNxwvGma3Uy81-Q/-mh0OkpfkfM.jpg" alt="Bar's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-16.userapi.com/M_r6endg7zL6C5ZK92wdBShJ5kjRXvblhrz-4g/jxFrL1HZnyQ.jpg" alt="Bar's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-38.userapi.com/uI9laLTo5Xp6M_lEgvJR-3y0WYpK7-YhOXruNg/wMlnjSgTJ2U.jpg" alt="Bar's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-25.userapi.com/e8pLDO7jY1G8LUOADcTla8HX5VtkwhHGOZ0dkg/h_UhvO0_D2s.jpg" alt="Bar's Staff"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-48.userapi.com/FhOVL3AJISskA_fQ_rbDQZyE1wPZA0ZMEIPDCg/lqI-TO7eHps.jpg" alt="Bar's Food"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-51.userapi.com/EY64Qwx3_ujaDnKrtlv2YPjWiiTViCRVyySoNg/nvHK1L8uv14.jpg" alt="Bar's Drinks"/>
		</Gallery>

		<Separator wide style={{paddingTop: '10px'}}/>

		<Group separator='hide' style={{ padding: '0 3vw 20px 3vw'}} header={<Header>Долгожданное место</Header>}>
			<Div>
			В городской суете так хочется спокойствия и тишины, что порой не знаешь, куда себя деть.
            <br />
			"Jin" — тот самый приют, то самое уютное и тихое место, в котором можно отдохнуть, не обращая внимания на всё вокруг.
			<br />
			Просто забирайте друзей с собой, приходите и усаживайтесь поудобнее в одной из зон с игровыми приставками. Не забудьте заказать себе поесть из мировой кухни, взять напитки из бара (от чая до спиртного) и, конечно, забить качественный кальян — подобрать микс Вам помогут опытные мастера.
			<br /> <br />
			Уйти от реальности можно по адресу ниже.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{paddingBottom: 0}}> 
			<Cell size='l' before={<Icon28PlaceOutline height={24} width={24} />} description="15:00 - 02:00 (Пт, Сб - до 05:00)">Энергетиков, 7</Cell>
			<Cell size='l' before={<Icon28MoneyCircleOutline height={24} width={24} />}>1000-1500₽</Cell>
            <Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>97-26-27</Cell>
			<Cell size='l' href="https://instagram.com/jin_bar_" target="_blank" before={<Icon28LogoInstagram height={24} width={24} />}>@jin_bar_</Cell>
		</Div>

		<Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
			<YMaps>
				<Map defaultState={{ center: [61.238362, 73.403822], zoom: 17 }} width='90vw' height='60vh'>
					<Placemark defaultGeometry={[61.238362, 73.403822]} defaultOptions={{preset: 'islands#circleIcon', iconColor: '#000'}} />
					{props.geo[0] !== undefined &&
						<Fragment>
							<Circle defaultGeometry={[[props.geo[1], props.geo[0]], 200]} options={{draggable: false, fillColor: 'rgba(0, 0, 0, 0.5)', strokeColor: '#000', strokeOpacity: 0.8, strokeWidth: 2 }} /> 
						</Fragment>
					}
				</Map>
			</YMaps>
		</Group>

	</Panel>
);

export default Jin;