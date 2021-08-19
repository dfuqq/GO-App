import React from 'react';

import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Cell,
	Avatar,
	Footer,
} from '@vkontakte/vkui';

const Bars = ({ id, go }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			separator={false}>
			Бары
		</PanelHeader>

		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-51.userapi.com/-Kmb_WZCU1Kk1jHSBwTyM29ctNZ0e3rhnl_JGw/akw2pX06FJw.jpg'
					size={56}
				/>
			}
			onClick={go}
			data-to='audit'
			description='Клуб на Мира 31/1'>
			Auditorium
		</Cell>
		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-49.userapi.com/6xo6WRxThel1qfItqfEu6c2cIleE463-TZan0A/-FDMQKDPPws.jpg'
					size={56}
				/>
			}
			onClick={go}
			data-to='frank'
			description='Бар на Мелик-Карамова 4/4'>
			Frank
		</Cell>
		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-21.userapi.com/xRE-QWPwTIAYhQzua3vXvWTabbSg3dCdZp92hg/KXMDSSx6DNg.jpg'
					size={56}
				/>
			}
			onClick={go}
			data-to='hops'
			description='Паб на Мира 31/1'>
			Hops Pub
		</Cell>
		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-65.userapi.com/x8H0lEqbCjHRV8tI7HyHYD9pdLMAF4YHyGgkTQ/pYNOT6cdM6c.jpg'
					size={56}
				/>
			}
			onClick={go}
			data-to='jaws'
			description='Паб на Юности 8'>
			Jawsspot
		</Cell>
		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-13.userapi.com/1baYZMSy2v_rWw3L-txxR6fjBJ6dGNn110PLvw/NWXCxaGtz3w.jpg'
					size={56}
				/>
			}
			onClick={go}
			data-to='rnb'
			description='Бар на Мелик-Карамова 4/4'>
			Rock N Burger
		</Cell>
		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-59.userapi.com/YJCR_u0sZSi_AEzMvl_K4WUrrUz-mt9p0DAsOQ/G6ODls_C3KY.jpg'
					size={56}
				/>
			}
			onClick={go}
			data-to='dpub'
			description='Паб на Университетской 9'>
			The Dock Pub
		</Cell>
		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-70.userapi.com/zCXyc32tczkB12zfilAfnUmMM_manbhlQHmlrg/Bsgu8al1lK4.jpg'
					size={56}
				/>
			}
			onClick={go}
			data-to='pints'
			description='Паб на Ленина 39'>
			Две Пинты
		</Cell>
		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-10.userapi.com/5xqutv_9ySVYKy4C2GEelLQ6QwtryOyKElW-dQ/W6FFDB0HZQE.jpg'
					size={56}
				/>
			}
			onClick={go}
			data-to='mars'
			description='Клуб на Нефтеюганском ш. 27/1с4'>
			Марс
		</Cell>
		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-67.userapi.com/OgH4ppSJzOMVl1CtJfexnFu5u4FxXS0ty1bTqA/5A6ooYN8t-g.jpg'
					size={56}
				/>
			}
			onClick={go}
			data-to='bird'
			description='Караоке-Бар на Мира 31/1'>
			Спой, Птичка!
		</Cell>
		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-24.userapi.com/EC8ZBXY2fHTL3UfGtR1UspeNWTPPn7u9_sgtYQ/LqSyTccgFuI.jpg'
					size={56}
				/>
			}
			onClick={go}
			data-to='off'
			description='Сеть ресторанов'>
			ШашлыкoFF
		</Cell>

		<Footer>
			Создатели приложения не несут
			<br />
			ответственность за достоверность данных.
			<br />
			Вся информация взята
			<br />
			из открытых источников сети Интернет
			<br />
			от аккаунтов официальных представителей заведений.
			<br />
			Уточняйте подробности работы по телефону.
		</Footer>
	</Panel>
);

export default Bars;
