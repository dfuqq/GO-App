import React from 'react';

import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Card,
	CardGrid,
	Group,
	Gallery,
	Header,
	Separator,
} from '@vkontakte/vkui';

const Business = ({ id, changePanel }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}>
			Заведения
		</PanelHeader>

		<Header
			mode='secondary'
			style={{
				userSelect: 'none',
				msUserSelect: 'none',
				MozUserSelect: 'none',
				KhtmlUserSelect: 'none',
				WebkitUserSelect: 'none',
				WebkitTouchCallout: 'none',
			}}>
			Наши Фавориты
		</Header>
		<Gallery slideWidth='92%' style={{ height: 200 }} align='center'>
			<img
				src='https://sun9-70.userapi.com/s4wSW493Dz22_UyKJdI9xliZSPP7eFlCEgEwUw/YwVTTUyOHjU.jpg'
				style={{
					objectFit: 'contain',
					borderRadius: '20px',
					margin: '0 3px',
					width: '90vw',
					backgroundColor: '#000',
				}}
				alt='nyccrd'
				onClick={changePanel}
				data-to='nyccrd'
			/>
			<img
				src='https://sun9-37.userapi.com/MWnJ1dLsBWOsSTq27KaYqauetFbHDMNsTovfrg/I_PRRNy4UOY.jpg'
				style={{
					objectFit: 'contain',
					borderRadius: '20px',
					margin: '0 3px',
					width: '90vw',
					backgroundColor: '#000',
				}}
				alt='percicrd'
				onClick={changePanel}
				data-to='percicrd'
			/>
			<img
				src='https://sun9-5.userapi.com/PxYCwDnkQ0B68iCrmu1ESVaWmv4lq52RuX0Wjg/tFYeMpCJljo.jpg'
				style={{
					objectFit: 'contain',
					borderRadius: '20px',
					margin: '0 3px',
					width: '90vw',
					backgroundColor: '#000',
				}}
				alt='auditcrd'
				onClick={changePanel}
				data-to='auditcrd'
			/>
		</Gallery>

		<Separator wide style={{ paddingBottom: '10px', marginTop: '10px' }} />

		<Group style={{ paddingBottom: '12px' }}>
			<CardGrid>
				<Card
					size='l'
					style={{
						height: 82,
						backgroundColor: '#000',
						backgroundImage:
							'url(https://sun9-31.userapi.com/QwiMCvuXNIfsqRIW_ZNpfBXHeIwHUHRDVeKVrQ/CX3mBNcTkk0.jpg)',
						backgroundSize: 210,
						backgroundPosition: 'right',
						backgroundRepeat: 'no-repeat',
					}}
					onClick={changePanel}
					data-to='cafes'>
					<h3 style={{ color: '#fff', paddingLeft: '12px' }}>Кафе</h3>
				</Card>
				<Card
					size='l'
					style={{
						height: 82,
						backgroundColor: '#000',
						backgroundImage:
							'url(https://sun9-27.userapi.com/SDfPljINYE6XYLYPelwVHUUSdqXfsoIzW9RHQQ/TpjWURYqIBs.jpg)',
						backgroundSize: 180,
						backgroundPosition: 'right',
						backgroundRepeat: 'no-repeat',
					}}
					onClick={changePanel}
					data-to='bars'>
					<h3 style={{ color: '#fff', paddingLeft: '12px' }}>Бары</h3>
				</Card>
				<Card
					size='l'
					style={{
						height: 82,
						color: '#fff',
						backgroundColor: '#000',
						backgroundImage:
							'url(https://sun9-19.userapi.com/kcxoaK0ovz_DiphT1v92DYvZkfZrZebgx56rjg/AXjs6e576DM.jpg)',
						backgroundSize: 180,
						backgroundPosition: 'right',
						backgroundRepeat: 'no-repeat',
					}}
					onClick={changePanel}
					data-to='restaraunts'>
					<h3 style={{ color: '#fff', paddingLeft: '12px' }}>Рестораны</h3>
				</Card>
				<Card
					size='l'
					style={{
						height: 82,
						color: '#fff',
						backgroundColor: '#000',
						backgroundImage:
							'url(https://sun9-14.userapi.com/c5f5ukJ9v-XBXgTGbqK8D0sumXvlNBS1dNvxxg/YU53ROqkRuI.jpg)',
						backgroundSize: 180,
						backgroundPosition: 'right',
						backgroundRepeat: 'no-repeat',
					}}
					onClick={changePanel}
					data-to='hookah'>
					<h3 style={{ color: '#fff', paddingLeft: '12px' }}>Кальянные</h3>
				</Card>
			</CardGrid>
		</Group>
	</Panel>
);

export default Business;
