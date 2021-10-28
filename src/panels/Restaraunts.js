import React from 'react';

import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Cell,
	Avatar,
	Footer,
} from '@vkontakte/vkui';

const Restaraunts = ({ id, changePanel }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			separator={false}>
			Рестораны
		</PanelHeader>

		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-66.userapi.com/ar7Q0RgYZVtLKMqKAe6kB7dDy3Vv5Llyb2SGyg/VAu_3cgyrCw.jpg'
					size={56}
				/>
			}
			onClick={changePanel}
			data-to='seven'
			description='Ресторан на Генерала Иванова 1'>
			Cafe Seven
		</Cell>
		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-15.userapi.com/oXqFG9X-_Qtf3wgwOeveEFOMbRnNZd_5h9l6Dg/gQv4vknS0LY.jpg'
					size={56}
				/>
			}
			onClick={changePanel}
			data-to='hurma'
			description='Грузинский ресторан на Мира 31/1'>
			Hurma
		</Cell>
		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-60.userapi.com/EDzD8tjkaL2ae9QAzLPmV5LWClASDmaAM-j2-g/fx61ftA9SkQ.jpg'
					size={56}
				/>
			}
			onClick={changePanel}
			data-to='joint'
			description='Ирландский ресторан на Ленина 39'>
			Joint
		</Cell>
		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-70.userapi.com/ea5w4gibHw-L2CO4YMMQ13HAYPmLb0-vRQv_kg/JI1_4bZuT3U.jpg'
					size={56}
				/>
			}
			onClick={changePanel}
			data-to='storia'
			description='Ресторан на Энтузиастов 44А'>
			La Storia
		</Cell>
		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-32.userapi.com/8n8drZhGibwuiYwi7ToEAzZS5e7HToQTRFUhYA/Tc7yLhslnF4.jpg'
					size={56}
				/>
			}
			onClick={changePanel}
			data-to='mishka'
			description='Ресторан на Мира 2Б'>
			Mishka Bar
		</Cell>
		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-44.userapi.com/xdDobtfintMpBnYWGm57dTjR6q4Ssl91kaHtuw/Xp1P_aABMjk.jpg'
					size={56}
				/>
			}
			onClick={changePanel}
			data-to='peoples'
			description='Ресторан на Островского 14/1'>
			People's
		</Cell>
		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-52.userapi.com/2LIIqfX74xid_M8ALa4AyOc6XT_SFjHbLtfxeA/r8I7Dyjfa68.jpg'
					size={56}
				/>
			}
			onClick={changePanel}
			data-to='kitcha'
			description='True Cost ресторан на Энгельса, 15'>
			The Kitcha
		</Cell>
		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-51.userapi.com/SYLmgfMQie1mPT0Jc1-FXHCr3O4-tGnEpEZPdw/mGHqoTk24Sg.jpg'
					size={56}
				/>
			}
			onClick={changePanel}
			data-to='wdn'
			description='Ресторан-бар на Энергетиков 4'>
			Wooden Restobar
		</Cell>
		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-47.userapi.com/-q33_rAJyraSXCEi4rUn_5QpHF5zBASnFg7tqg/2rz-jl8qMlg.jpg'
					size={56}
				/>
			}
			onClick={changePanel}
			data-to='ajb'
			description='Морской ресторан на пр. Комсомольский 13'>
			Адмирал Джон Бенбоу
		</Cell>
		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-50.userapi.com/gne9rMFIhzLLliMulStRKo-iWzw3fEJtYcp6dw/UROj-kmPiw4.jpg'
					size={56}
				/>
			}
			onClick={changePanel}
			data-to='veranda'
			description='Ресторан на Ленина 43'>
			Веранда
		</Cell>
		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-46.userapi.com/1ohUXFFUZFuDu1oBa5_3QOVSRyLYNJ-zZLf1fw/QDm_9T3nkrc.jpg'
					size={56}
				/>
			}
			onClick={changePanel}
			data-to='ds'
			description='Сеть ресторанов'>
			Диван-Сарай
		</Cell>
		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-53.userapi.com/oFIB4-tsfqipTy4F05k7FQE7DIeu62uoPaEMqg/9kRy4FKb2ww.jpg'
					size={56}
				/>
			}
			onClick={changePanel}
			data-to='klkv'
			description='Ресторан на Крылова 23/1'>
			Клюква
		</Cell>
		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-50.userapi.com/PUPp9VI8n-l8Ouj-jB_Ur0tjQWxFlaZdxes3tw/VB0HxWdyDvQ.jpg'
					size={56}
				/>
			}
			onClick={changePanel}
			data-to='visota'
			description='Ресторан на Гагарина 12'>
			На Высоте
		</Cell>
		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-60.userapi.com/SV5_fFlVTO_hMZS6t6p6Ev46qUwHdZx8f-ci3w/RzJX3o6_9Gw.jpg'
					size={56}
				/>
			}
			onClick={changePanel}
			data-to='perci'
			description='Итальянский ресторан на Ленина 17'>
			Перчини
		</Cell>
		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-33.userapi.com/wDlX2axe9PUWrt5bmSOksB6fllregb9pSr4jsw/2LzCqPDSIRQ.jpg'
					size={56}
				/>
			}
			onClick={changePanel}
			data-to='pivo'
			description='Ресторан-пивоварня на Генерала Иванова 1'>
			Пивная №1
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

export default Restaraunts;
