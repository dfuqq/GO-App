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

const Dovlatov = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={() => window.history.back()}>
			</PanelHeaderBack>}
			separator={false}
		>
			Довлатов
		</PanelHeader>

		<Gallery
			slideWidth = "100%"
			style = {{ height: 225 }}
			align = "center"
			bullets="light"
		>
			<img style={{ objectFit: 'contain' }} src="https://sun9-13.userapi.com/-RZMoPbyx3wywwJFv9BGUIOmwrvJUdrmfO4ADQ/05yj_IUQBJs.jpg" alt="Restaraunt's Outside"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-70.userapi.com/bZ5yC8t3tJpozGulCrgGdcUSbndmqRIclvcu2g/cn43XgCiVhc.jpg" alt="Restaraunts's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-29.userapi.com/Mobfe_On8VzqJBJzyvTdM0H6H_6EyS87VOGuoQ/QTxsjiALqhY.jpg" alt="Restaraunt's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-43.userapi.com/LTAOSc1ruooFhozHVGWoL7NNFF3bTzNHOOiTMA/JAxRuwROWKs.jpg" alt="Restaraunt's Food"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-63.userapi.com/1hWvBP1qfuGgpuDUYSNK4lUz5Cpky8oll2Tq-g/n63DTu3KE3A.jpg" alt="Restaraunt's Food"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-73.userapi.com/ZcAagDmEhGCyIwhdDuKNAxcfJoUhh9ImHPHexw/7q-A9nCRfqI.jpg" alt="Restaraunt's Food"/>
		</Gallery>

		<Separator wide style={{paddingTop: '10px'}}/>

		<Group separator='hide' style={{ padding: '0 3vw 20px 3vw'}} header={<Header>Как дома</Header>}>
			<Div>
			"Довлатов" — одно из самых заведений нашего списка.
            <br />
			Расположенный в спальном районе, попадая туда ты переносишься в другой мир: словно кто-то запустил машину времени и отправил всех назад в СССР.
			<br />
			Великолепная атмосфера квартиры, а также вкусные и недорогие блюда сделали кафе одним из самых любимых заведений города. А выступления приглашённых артистов и другие творческие мероприятия помогут весело и незаметно провести время.
			<br /> <br />
			Вперёд ностальгировать — адрес кафе указан ниже.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{paddingBottom: 0}}>
			<Cell size='l' multiline before={<Icon28PlaceOutline height={24} width={24} />} description="10:00 - 23:00 (Пт - до 00:00, Сб: 12:00 - 00:00, Вс - до 23:00)">Сибирская, 15</Cell>
			<Cell size='l' before={<Icon28MoneyCircleOutline height={24} width={24} />}>700-1200₽</Cell>
            <Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>+7 (912) 419-09-22</Cell>
			<Cell size='l' href="https://instagram.com/dovlatov_cafe" target="_blank" before={<Icon28LogoInstagram height={24} width={24} />}>@dovlatov_cafe</Cell>
		</Div>

		<Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
			<YMaps>
				<Map defaultState={{ center: [61.249482, 73.408726], zoom: 17 }} width='90vw' height='60vh'>
					<Placemark defaultGeometry={[61.249482, 73.408726]} defaultOptions={{preset: 'islands#circleIcon', iconColor: '#000'}} />
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

export default Dovlatov;