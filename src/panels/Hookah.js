import React from 'react';

import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Cell,
	Avatar,
	Footer,
} from '@vkontakte/vkui';

const Hookah = ({ id, changePanel }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			separator={false}>
			Кальянные
		</PanelHeader>

		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-24.userapi.com/DipVCamBoW3mMKHq4aOw-JRz1o7EXRIMxxEqaw/i3gJTDcW6Ts.jpg'
					size={56}
				/>
			}
			onClick={changePanel}
			data-to='aloft'
			description='Лаунж-бар на Ленина 26'>
			Art Loft
		</Cell>
		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-24.userapi.com/_ktY0WfyeGU2jPBl35bn_7j5mQqIi4UtxqN1PA/Pw1E_GIIbKA.jpg'
					size={56}
				/>
			}
			onClick={changePanel}
			data-to='bsb'
			description='Лаунж-бар на Университетской 29'>
			Baker Street 221B
		</Cell>
		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-22.userapi.com/c-5HUHWFnr4RFjlbtEAh4ZdEjpxiVOlYcw7Y8A/sg67KruP_u0.jpg'
					size={56}
				/>
			}
			onClick={changePanel}
			data-to='brutal'
			description='Сеть кальянных'>
			Brutal Avenue
		</Cell>
		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-9.userapi.com/BTn5r1FlTColigjzEbCP4iSzrJVpOjx_5W5m4g/5XyZrK9JiOk.jpg'
					size={56}
				/>
			}
			onClick={changePanel}
			data-to='hplace'
			description='Лаунж-бар на 30 Лет Победы 50'>
			HookahPlace
		</Cell>
		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-25.userapi.com/__dHib63Yiq6yr4iF8_cV1uQ19BFkLVcCvp9Yw/0iloCqNBZbM.jpg'
					size={56}
				/>
			}
			onClick={changePanel}
			data-to='jin'
			description='Лаунж-бар на Энергетиков 7'>
			Jin
		</Cell>
		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-56.userapi.com/1QiJWYgY-A95PzKoKOvspaO5OthskjzhxlpC9Q/g84sUBGhIyo.jpg'
					size={56}
				/>
			}
			onClick={changePanel}
			data-to='light'
			description='Кальянная на 30 Лет Победы 37'>
			Light Дым
		</Cell>
		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-1.userapi.com/uPuAm_M-c9ko2ZJr3c_AN4rJ3liJabAjiC8Kow/T3BrfMOY1WA.jpg'
					size={56}
				/>
			}
			onClick={changePanel}
			data-to='office'
			description='Кальянная на Энгельса 11'>
			The OFFICE Nargilia
		</Cell>
		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-76.userapi.com/-_FW6QnLQImd0CWCaWC_1YB6q1GGBmV9UPdHIg/KOz5AA_SmdA.jpg'
					size={56}
				/>
			}
			onClick={changePanel}
			data-to='mrmld'
			description='Лаунж-бар на Иосифа Каролинского 4'>
			Мармелад
		</Cell>
		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-14.userapi.com/lx3XL8VEbH38oRtZoFDbeZyRuoE50UDUKeZ3BA/fS1oGPsdBLo.jpg'
					size={56}
				/>
			}
			onClick={changePanel}
			data-to='mint'
			description='Лаунж-бар на Мира 47/2'>
			Мята
		</Cell>
		<Cell
			expandable
			before={
				<Avatar
					src='https://sun9-48.userapi.com/GCsVQ0QjfESsMDNWhjca0YBT_aaBCTqVBMEVUQ/2Py4Zx5kxMk.jpg'
					size={56}
				/>
			}
			onClick={changePanel}
			data-to='pbar'
			description='Вейп-бар на Игоря Киртбая 18'>
			ПароБар
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

export default Hookah;
