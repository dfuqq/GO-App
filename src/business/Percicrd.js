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

const Percicrd = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={() => window.history.back()}>
			</PanelHeaderBack>}
			separator={false}
		>
			Перчини
		</PanelHeader>

		<Gallery
			slideWidth = "100%"
			style = {{ height: 225 }}
			align = "center"
			bullets="light"
		>
			<img style={{ objectFit: 'contain' }} src="https://sun9-3.userapi.com/jzDRloa_hLkydoKf3F6Myj8bD-oxIxFbhJfoSg/NkGY7NcWhFM.jpg" alt="Restaraunts's Entry"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-41.userapi.com/Uhs_zBJB0CKu8_nFxEakZxM3MaF-tPEYH1tLOQ/GQfagpEJYX8.jpg" alt="Some Dishes"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-36.userapi.com/B_vZhAJa2kPPhIkOW_RGl2b1Kk0q2egyHPqt6Q/Wya8R-P1C8g.jpg" alt="Restaraunt's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-17.userapi.com/6uR6-F7d-vc12NL8zHkFxdONsIo8kCInmxRdqw/G-Xeo2MGyTk.jpg" alt="Restaraunt's Staff"/>
		</Gallery>

		<Separator wide style={{paddingTop: '10px'}}/>

		<Group separator='hide' style={{ padding: '0 3vw 20px 3vw'}} header={<Header>Итальянский дух</Header>}>
			<Div>
			Заходя в "Перчини", Вы словно попадаете в маленькую Италию.
			<br />
			Невероятно уютный дизайн, который так похож на семейные кафе родины пиццы, мгновенно производит впечатление.
			<br />
			Здесь действительно как в семье: приветливый персонал искренне рад каждому гостю, не заставляя долго ждать своего заказа, а блюда как будто сделаны по секретному семейному рецепту, который никто не рассказывает. И раз уж это ресторан именно итальянской кухни, то обязательно стоит попробовать пасту и пиццу — мы уверены, что Вы останетесь довольны выбором. На десерт можно взять настоящее итальянское мороженое, которое особенно придётся по душе маленьким детям.
            <br /> <br />
			Лучше бронировать столики, чтобы урвать место — желающих много, и среди них немало постоянных гостей.<br />Полезная информация ниже.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{paddingBottom: 0}}>
			<Cell size='l' before={<Icon28PlaceOutline height={24} width={24} />} description="10:00 - 00:00" >Ленина, 17</Cell>
			<Cell size='l' before={<Icon28MoneyCircleOutline height={24} width={24} />}>700-1500₽</Cell>
            <Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>390-039</Cell>
			<Cell size='l' href="https://instagram.com/perchinisurgut" target="_blank" before={<Icon28LogoInstagram height={24} width={24} />}>@perchinisurgut</Cell>
		</Div>

		<Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
			<YMaps>
				<Map defaultState={{ center: [61.250747, 73.401390], zoom: 17 }} width='90vw' height='60vh'>
					<Placemark defaultGeometry={[61.250747, 73.401390]} defaultOptions={{preset: 'islands#circleIcon', iconColor: '#000'}} />
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

export default Percicrd;