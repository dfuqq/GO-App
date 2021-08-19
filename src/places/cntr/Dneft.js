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
import Icon24LogoVk from '@vkontakte/icons/dist/24/logo_vk';

const Dneft = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				ДИ "Нефтяник"
			</PanelHeader>

			<Gallery
				slideWidth='100%'
				style={{ height: 225 }}
				align='center'
				bullets='light'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-28.userapi.com/7qUVMaaEs2Xth3ZBX_kBeLBZO0UenJ8LJDTicg/QQNrKGUockM.jpg'
					alt='Dneft'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-5.userapi.com/ffecw3W_8QRodvaQ7SJRUCD42bWNoHl8XY76Rw/Dpg8PGZpmxY.jpg'
					alt='Dneft'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-36.userapi.com/jaQcbZmoaJ97sH5MbduH1nH_n5OaGDmo_n1LwQ/rvPzWlRm5hc.jpg'
					alt='Dneft'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-19.userapi.com/8LkrFGvRae-e4cv5YanlwzX5ylJx_rAMegujxQ/464lDDWHZoM.jpg'
					alt='Dneft'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Крупнейший концертный зал города.
				<br />
				<br />
				В здании проводятся городские мероприятия, спектакли, тематические
				вечеринки и концерты российских и зарубежных артистов.
				<br />
				Помимо этого, дворец предлагает услуги по аренде залов, фотосессий и
				оригинальных поздравлений.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>
					Югорский тр-т, 5
				</Cell>
				<Cell
					size='l'
					before={<Icon24Link />}
					href='https://dineftyanik.ru'
					target='_blank'>
					dineftyanik.ru
				</Cell>
				<Cell
					size='l'
					before={<Icon24LogoVk />}
					href='https://vk.com/di_neftyanik'
					target='_blank'>
					Группа VK
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
						defaultState={{ center: [61.263458, 73.347088], zoom: 16 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.263458, 73.347088]}
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

export default Dneft;
