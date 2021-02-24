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

const Loft = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={() => window.history.back()}>
			</PanelHeaderBack>}
			separator={false}
		>
			Место
		</PanelHeader>
		
		<Gallery
			slideWidth = "100%"
			style = {{ height: 225 }}
			align = "center"
			bullets="light"
		>			
			<img style={{ objectFit: 'contain' }} src="https://sun9-29.userapi.com/6sgwawOgm4UPCgjxKeCd36rg_5YQzeAMpI3UbA/4VAvMuRQx_M.jpg" alt="Cafe's Barpool" />
			<img style={{ objectFit: 'contain' }} src="https://sun9-45.userapi.com/c837130/v837130393/20575/Ct1Ce-o-7OE.jpg" alt="Evening with Movies" />
			<img style={{ objectFit: 'contain' }} src="https://sun9-66.userapi.com/c845121/v845121728/c03e8/XBxuWaZRuSo.jpg" alt="Cafe's Banner"/>
		</Gallery>

		<Separator wide style={{paddingTop: '10px'}}/>

		<Group separator='hide' style={{ padding: '0 3vw 10px 3vw'}} header={<Header>Встретимся в "Месте"</Header>}>
			<Div>
			Лофт-проект "Место" бросает вызов повседневности. 
			<br />
			Он дерзок и оригинален во всём, что привыкли видеть обычные люди: от дизайна до формата заведения.
			<br />
			Начиная с бастующего звания "Антикафе", "Место" уже ухватывает за собой посетителя. "Анти" в данном случае вовсе не пример плохого заведения: Вы поймёте всю концепцию, немного пробыв там. Вашими спутниками станут прекрасный кофе, игровые приставки, настольные игры и даже кальяны! Вы просто присаживаетесь в одной из уникальных зон заведения и получаете удовольствие от пребывания там. А может даже попадёте на вечерний просмотр фильмов или мини-концерт — подобные события часто случаются в "Месте".
			<br /> <br />
            Убедитесь сами: адрес и телефон указаны ниже.
			</Div>
		</Group>

		<Separator wide />
		
		<Div style={{paddingBottom: 0}}>
			<Cell size='l' before={<Icon28PlaceOutline height={24} width={24} />} description="12:00 - 00:00">Ленина, 18</Cell>
			<Cell size='l' before={<Icon28MoneyCircleOutline height={24} width={24} />}>100-500₽</Cell>
            <Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>60-79-72</Cell>
			<Cell size='l' href="https://instagram.com/loftprojectmesto" target="_blank" before={<Icon28LogoInstagram height={24} width={24} />}>@loftprojectmesto</Cell>
		</Div>

		<Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
			<YMaps>
				<Map defaultState={{ center: [61.247127, 73.406022], zoom: 17 }} width='90vw' height='60vh'>
					<Placemark defaultGeometry={[61.247127, 73.406022]} defaultOptions={{preset: 'islands#circleIcon', iconColor: '#000'}} />
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

export default Loft;
