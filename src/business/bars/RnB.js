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

const Rnb = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={() => window.history.back()}>
			</PanelHeaderBack>}
			separator={false}
		>
			Rock N Burger
		</PanelHeader>

		<Gallery
			slideWidth = "100%"
			style = {{ height: 225 }}
			align = "center"
			bullets="light"
		>
			<img style={{ objectFit: 'contain' }} src="https://sun9-66.userapi.com/GET0Fv4Bw0cqYyYHXlOEuXd2OpfgYDWx8lgggA/hMKWmc_Qg9g.jpg" alt="Bar's Logo"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-72.userapi.com/9v0iYoUM3gjFv3_OsaTEmIuJ-BjobJkG8PZe5w/G1nIU51Y3To.jpg" alt="Bar's Food"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-22.userapi.com/7t0I7OwVtKSMBAmVfSTob7GHIbpOb47INrP1rg/HDfF4gdbu-Q.jpg" alt="Bar's Food"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-64.userapi.com/LH_SfyMZebO30kn7yvxs1COFVaFscmjuhCc5mw/ZhV8O_WpMjc.jpg" alt="Bar's Food"/>
		</Gallery>

		<Separator wide style={{paddingTop: '10px'}}/>

		<Group separator='hide' style={{ padding: '0 3vw 20px 3vw'}} header={<Header>Те самые бургеры</Header>}>
			<Div>
			"Rock N Burger" обладает чуть ли не единственными в городе, действительно классными бургерами. Это отличное заведение, чтобы холодным вечером зайти в бар, заказать бургер с пивом, и просто наслаждаться.
			<br />
			Помимо бургеров, Вы можете отведать пиццу и напитки собственного приготовления, салаты, а также изумительную картошку-фри, которая точно западёт Вам в душу и заставит заказать ещё одну порцию. По секрету: берите картошку с паприкой :)
			<br /> <br />
			Заинтересовались?
			<br />
			Вся информация о данном баре указана ниже.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{paddingBottom: 0}}>
			<Cell size='l' before={<Icon28PlaceOutline height={24} width={24} />} description="12:00 - 23:00 (Пт - до 02:00)">Мелик-Карамова, 4/4</Cell>
			<Cell size='l' before={<Icon28MoneyCircleOutline height={24} width={24} />}>600-900₽</Cell>
            <Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>55-07-33</Cell>
			<Cell size='l' href="https://instagram.com/rockburger_bar" target="_blank" before={<Icon28LogoInstagram height={24} width={24} />}>@rockburger_bar</Cell>
		</Div>

		<Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
			<YMaps>
				<Map defaultState={{ center: [61.234229, 73.438707], zoom: 17 }} width='90vw' height='60vh'>
					<Placemark defaultGeometry={[61.234229, 73.438707]} defaultOptions={{preset: 'islands#circleIcon', iconColor: '#000'}} />
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

export default Rnb;
