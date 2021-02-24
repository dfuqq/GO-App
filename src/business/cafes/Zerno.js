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

const Zerno = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={() => window.history.back()}>
			</PanelHeaderBack>}
			separator={false}
		>
			Зерно
		</PanelHeader>
		
		<Gallery
			slideWidth = "100%"
			style = {{ height: 225 }}
			align = "center"
			bullets="light"
		>
			<img style={{ objectFit: 'contain' }} src="https://sun9-68.userapi.com/LoSxi3A920WVoocNVaRQ0moK3CF1zy-SmNTajQ/itP4O27RY0I.jpg" alt="Cafe's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-24.userapi.com/M0uDBBCDGd8A_bSZ-h5dXfl6V2Fs4ElF9mSgsw/sbcEKz2FJho.jpg" alt="Cafe's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-12.userapi.com/94LTn7bhuQLq06JSbgF4V8Lc0zRnPiZJrkaXDg/oLcpI0euk9E.jpg" alt="Cafe's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-51.userapi.com/d16PSh3GFvUcbAeZsyUKZArIBP9ZLThBBIThlQ/An8rPMmXs-g.jpg" alt="Cafe's Food"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-25.userapi.com/mnm9NGh0BlNZKMWKeWbJSCykALU-W0NE9w3Jsg/s-msR9B2How.jpg" alt="Cafe's Food"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-63.userapi.com/1n626_AYvsQxvo1WKd1BoRiJz8IylYUhCjUYzg/CaO6X5eTBSg.jpg" alt="Cafe's Food"/>
		</Gallery>

		<Separator wide style={{paddingTop: '10px'}}/>

		<Group separator='hide' style={{ padding: '0 3vw 20px 3vw'}} header={<Header>Тишина в хаосе</Header>}>
			<Div>
			"Зерно" известно не всем, но это заведение определённо стоит внимания.
			<br />
			Кофейня расположена в ТЦ "Каскад" — торговом центре, что расположен на одной из самых загруженных улиц города — Университетской. И это маленькое и уютное заведение словно убежище от целого мира — приходя туда, Вы полностью отключаетесь от остального мира.
			<br />
			Так приятно сидеть, попивая отличный свежесваренный кофе, завтракая вкусной кашей в закуску с тортами собственного приготовления, и наблюдать за снующими по своим делам людьми. А ещё можно завести беззаботный разговор с приветливым бариста, который с удовольствием поддержит его.
			<br /> <br />
			Мы рекомендуем Вам забежать в "Зерно" — адрес кофейни указан ниже.
			</Div>
		</Group>

		<Separator wide />
		
		<Div style={{paddingBottom: 0}}>
			<Cell size='l' before={<Icon28PlaceOutline height={24} width={24} />} description="10:00 - 20:00">Пролетарский пр., 11</Cell>
			<Cell size='l' before={<Icon28MoneyCircleOutline height={24} width={24} />}>250-600₽</Cell>
            <Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>+7 (922) 771-96-19</Cell>
			<Cell size='l' href="https://instagram.com/zerno_surgut" target="_blank" before={<Icon28LogoInstagram height={24} width={24} />}>@zerno_surgut</Cell>
		</Div>

		<Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
			<YMaps>
				<Map defaultState={{ center: [61.249804, 73.440842], zoom: 17 }} width='90vw' height='60vh'>
					<Placemark defaultGeometry={[61.249804, 73.440842]} defaultOptions={{preset: 'islands#circleIcon', iconColor: '#000'}} />
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

export default Zerno;