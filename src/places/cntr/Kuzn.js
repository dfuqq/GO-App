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
import Icon24LogoInstagram from '@vkontakte/icons/dist/24/logo_instagram';

const Kuzn = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				Обская Кузница
			</PanelHeader>

			<Gallery
				slideWidth='100%'
				style={{ height: 225 }}
				align='center'
				bullets='light'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-58.userapi.com/eGlb3WRmQYwpXEKWFzwIpfPUbnJcOVE58WApWA/Qwptssp540Q.jpg'
					alt='Kuzn'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-2.userapi.com/bU2JbO2iYbTT70lP7qLdRRG-Z7EI32VUoDs65Q/5VhsmZq_Vhs.jpg'
					alt='Kuzn'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-25.userapi.com/KlJ4oS15yNdDcxmQIO1GL6kSl1UzAa_HCdbqIA/gHOflFRUWqQ.jpg'
					alt='Kuzn'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-46.userapi.com/0IiD2I6Dc00hDBfFIpWSmUQs3Oq02o8zCxd-QQ/lgtEJhurDVo.jpg'
					alt='Kuzn'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-38.userapi.com/jfx7pBAoIAPqGtCwjPdEYDqyLC3dKCCL9NNgPQ/lagb_9dPbfY.jpg'
					alt='Kuzn'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Семейное дело, объединившее мастеров по обработке различных материалов.
				<br />
				<br />
				Кузница основана в 2018 году, и за время существования уже получила
				множество знаков качества, а также вошла в "Гильдию кузнецов России".
				<br />
				Помимо оказания услуг по обработке и изготовке изделий, кузница проводит
				мастер-классы и экскурсии по ковке, а также обучения заточке и
				мероприятия с кузнецами.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell
					size='l'
					before={<Icon28PlaceOutline width={24} height={24} />}
					description='11:00 - 20:00'>
					пр. Набережный, 7
				</Cell>
				<Cell
					size='l'
					before={<Icon24Link />}
					href='https://obskayakuznica.com'>
					obskayakuznica.com
				</Cell>
				<Cell
					size='l'
					before={<Icon24LogoInstagram />}
					href='https://instagram.com/obskayakuznica'
					target='_blank'>
					@obskayakuznica
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
						defaultState={{ center: [61.25127, 73.359143], zoom: 17 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.25127, 73.359143]}
							defaultOptions={{
								preset: 'islands#blueMoneyCircleIcon',
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

export default Kuzn;
