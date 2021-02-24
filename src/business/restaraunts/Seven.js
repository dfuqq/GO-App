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

const Seven = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={() => window.history.back()}>
			</PanelHeaderBack>}
			separator={false}
		>
			Seven
		</PanelHeader>

		<Gallery
			slideWidth = "100%"
			style = {{ height: 225 }}
			align = "center"
			bullets="light"
		>
			<img style={{ objectFit: 'contain' }} src="https://sun9-34.userapi.com/S5kLqngrdG_acKqG0KYnBGeeR7DresT6x_gqMA/4UopnvWqleA.jpg" alt="Restaraunt's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-45.userapi.com/9PcixHH5LPcLOUqSRmjG8zGRvz74wdUkI2uPMQ/q3YHVZbQar8.jpg" alt="Restaraunts's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-49.userapi.com/w7YdBuE5cRinm5d3e2MydmR2scb3JzmjO6NRyA/DdPxhAb3hiw.jpg" alt="Restaraunt's Exterior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-19.userapi.com/Lpj1WiwumWDcR95B4fhwaJRxDwEvCVVvGMkLLg/vi07uVzHfjw.jpg" alt="Restaraunt's Food"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-9.userapi.com/4pqpGke6DDyH-qal4pfKucaE-nVnrGaxuh8tBQ/of1gWr9sIzY.jpg" alt="Restaraunt's Food"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-26.userapi.com/PK2_soV_4kK3Z6jhw_7Qh8nNUWrV3_J2gcjp6Q/staaWZlkHJo.jpg" alt="Restaraunt's Food"/>
		</Gallery>

		<Separator wide style={{paddingTop: '10px'}}/>

		<Group separator='hide' style={{ padding: '0 3vw 20px 3vw'}} header={<Header>Ресторан как образ жизни</Header>}>
			<Div>
			Мы могли бы дать рекомендацию лишь за один вид — он прекрасен.
            <br />
			"Seven" в своём арсенале имеет всё, чтобы поразить Вас и уйти с улыбкой на лице. Вы поймёте это ещё на входе: интерьер ресторана не привязан к какой-либо культуре, позволяя окунуться в тёплую атмосферу заведения для наслаждения своим заказом.
            <br />
			Да, кухня тут тоже не имеет определённого направления. Хотите суши? Пожалуйста. Пиццу? Без проблем. Сочный стейк? А какой прожарки?
			<br />
			Попробовав лишь один маленький кусочек, Вы навсегда влюбитесь в это заведение: за его эстетику, обслуживание и вкус. А ещё за крышесносную панораму города.
			<br /> <br />
			Мы не можем Вас больше держать тут — скорее звоните и бронируйте столик!
			</Div>
		</Group>

		<Separator wide />

		<Div style={{paddingBottom: 0}}>
			<Cell size='l' before={<Icon28PlaceOutline height={24} width={24} />} description="12:00 - 00:00 (Пт, Сб - до 02:00)">Генерала Иванова, 1</Cell>
			<Cell size='l' before={<Icon28MoneyCircleOutline height={24} width={24} />}>2500-4000₽</Cell>
            <Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>95-08-88 (Бронь)<br />94-07-77 (Доставка)</Cell>
			<Cell size='l' href="https://instagram.com/cafeseven" target="_blank" before={<Icon28LogoInstagram height={24} width={24} />}>@cafeseven</Cell>
		</Div>

		<Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
			<YMaps>
				<Map defaultState={{ center: [61.256331, 73.431445], zoom: 17 }} width='90vw' height='60vh'>
					<Placemark defaultGeometry={[61.256331, 73.431445]} defaultOptions={{preset: 'islands#circleIcon', iconColor: '#000'}} />
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

export default Seven;
