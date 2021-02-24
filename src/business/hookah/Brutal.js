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

const Brutal = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={() => window.history.back()}>
			</PanelHeaderBack>}
			separator={false}
		>
			Brutal Avenue
		</PanelHeader>
        
		<Gallery
			slideWidth = "100%"
			style = {{ height: 225 }}
			align = "center"
			bullets="light"
		>
			<img style={{ objectFit: 'contain' }} src="https://sun9-69.userapi.com/XbGRuLrOMOfZv9zfC4IwyKTcAMghZRG8qyf0ow/TmVvlJr4sFc.jpg" alt="Bar's Logo"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-39.userapi.com/8OC9mf-e8fTjynzDWicYFpK6ou9oFg3E-WhEAA/RIdtcx5hPfM.jpg" alt="Bar's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-50.userapi.com/Yj3k6b9wjGSAJT1MaZbTAwz09AKh8ph0RW4x5A/xHRBPlpAsaM.jpg" alt="Bar's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-52.userapi.com/d_THuZ7P8pAr07ML6QsWMYdMqWEKR9vg4cLjjQ/FnMRkrxrb1E.jpg" alt="Bar's Guests"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-26.userapi.com/kvTYvoGdrp4qH762KrQ0RYyLwQqoUmsJ_xrjhQ/vZY48e0LTOA.jpg" alt="Bar's Atmosphere"/>
		</Gallery>

		<Separator wide style={{paddingTop: '10px'}}/>

		<Group separator='hide' style={{ padding: '0 3vw 20px 3vw'}} header={<Header>Андерграунд-лофт</Header>}>
			<Div>
			"Brutal" в названии заведения точно не просто слово: это ты понимаешь, как только попадаешь сюда.
            <br />
			Дизайн кальянной отсылает нас к андерграунд культуре, но есть в нём и ещё одна интересная деталь — он передаёт внутренний взгляд создателей на кальянную культуру современности.
			<br />
			Потому "Brutal Avenue" и пытается разрушить повседневность и стандарты, показывая себя с лучших сторон. Он цепляет своей атмосферой, доступными ценами и высоким качеством обслуживания. За приятную цену Вы сможете провести полноценный вечер с кальянами различного табака, настольными и консольными играми, безалкогольными напитками и вкусными закусками.
			<br /> <br />
			В "Brutal Avenue" делают всё для Вашего комфорта. Проверьте сами.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{paddingBottom: 0}}>
			<Cell size='l' before={<Icon28PlaceOutline height={24} width={24} />} description="14:00 - 02:00 (Пт, Сб - до 04:00)">пр. Набережный, 52<br />Республики, 85</Cell>
			<Cell size='l' before={<Icon28MoneyCircleOutline height={24} width={24} />}>600-1200₽</Cell>
            <Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>29-99-93 (пр. Набережный, 52)<br />99-99-18 (Республики, 85)</Cell>
			<Cell size='l' href="https://instagram.com/brutal_avenue_hookah_club" target="_blank" before={<Icon28LogoInstagram height={24} width={24} />}>@brutal_avenue_hookah_club</Cell>
		</Div>

		<Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
			<YMaps>
				<Map defaultState={{ center: [61.258616, 73.356503], zoom: 17 }} width='90vw' height='60vh'>
					<Placemark defaultGeometry={[61.258616, 73.356503]} defaultOptions={{preset: 'islands#circleIcon', iconColor: '#000'}} />
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

export default Brutal;