import React from 'react';

import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Group,
	Div,
	Avatar,
	SimpleCell,
} from '@vkontakte/vkui';

const Credits = ({ id }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}>
			Титры
		</PanelHeader>

		<Group style={{ textAlign: 'center' }}>
			<Div style={{ paddingBottom: 0 }}>
				<h2 style={{ marginTop: 0 }}>Приложение создал</h2>
				<Div
					style={{
						display: 'flex',
						justifyContent: 'center',
						paddingTop: 0,
						paddingBottom: 0,
					}}>
					<a
						href='https://vk.com/dfuqq'
						target='_blank'
						rel='noopener noreferrer'>
						<Avatar
							mode='default'
							size={104}
							src='https://sun9-41.userapi.com/dwSmw1oDRzx7r7JSQnS0GAa9blfuHRse6h15eQ/yYiZqGh6F2A.jpg'
						/>
					</a>
				</Div>
				<h3 style={{ fontWeight: 400 }}>Данила Ермаков</h3>
			</Div>

			<h2 style={{ marginBottom: 0 }}>Специальный отряд</h2>
			<Div style={{ padding: '19px 1vw 0 1vw', textAlign: 'left' }}>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-59.userapi.com/TXOKIQrzQpRzCGrciAEIsc5UwevdLgmLpL5W5Q/CgZy9lBRzeA.jpg'
						/>
					}
					href='https://vk.com/svetlanaperesvetova'
					target='_blank'>
					Светлана Пересветова
				</SimpleCell>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-4.userapi.com/MWOGNDUMvD0XTmeZ7KeJDHcS4T4UIDCZrY-yHg/_ql-KfJIUS0.jpg'
						/>
					}
					href='https://vk.com/f.antokhin'
					target='_blank'>
					Фрол Антохин
				</SimpleCell>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-42.userapi.com/6pJmpTwdOTmeF1Mrm3bdhKeielGmaZ2-1rRZpQ/wxIXZxZvAAQ.jpg'
						/>
					}
					href='https://vk.com/venegiran'
					target='_blank'>
					Емельян Виноградов
				</SimpleCell>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-65.userapi.com/Wa_VkWrMIbT6d6aDsW8P22CagF7KEg7wJzJSiw/gLXNuRBlLp8.jpg'
						/>
					}
					href='https://vk.com/shizoidnbiu'
					target='_blank'>
					Махмуд Алибеков
				</SimpleCell>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-2.userapi.com/01fdVuogWDrl5V9I5eolVLvAmvrfx62zIez4HQ/IRBHqw8koRg.jpg'
						/>
					}
					href='https://vk.com/ddosenka'
					target='_blank'>
					Александр Абдуллаев
				</SimpleCell>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-59.userapi.com/00hyWLInwesuaJLyoWcVrON8zaZDgpfHigSHag/QcM-pVemMEQ.jpg'
						/>
					}
					href='https://vk.com/aalleeee'
					target='_blank'>
					Эвелина Минуллина
				</SimpleCell>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-15.userapi.com/w5stZFRsR0pCRGQpu8FcmHfj7yZuFf8a9rNJ6w/bFsCcXWz2_0.jpg'
						/>
					}
					href='https://vk.com/a.milkaaa'
					target='_blank'>
					Анастасия Душевская
				</SimpleCell>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-75.userapi.com/7agKICIvt-AiiGK211RCHLKftGIUkyGF5oQGgQ/hMEhIIKnCzo.jpg'
						/>
					}
					href='https://vk.com/id347570774'
					target='_blank'>
					Ильяс Салахов
				</SimpleCell>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-11.userapi.com/emP0KPRRbb8RguF0ip-h6UpeWhw4KwXmQl0L6A/WsXtWdNp9Cc.jpg'
						/>
					}
					href='https://vk.com/moscum'
					target='_blank'>
					Иван Москвичев
				</SimpleCell>
			</Div>

			<h2 style={{ marginBottom: 0 }}>
				Огромное спасибо
				<br />
				за прекрасные фото
			</h2>
			<Div style={{ padding: '19px 1vw 0 1vw', textAlign: 'left' }}>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-74.userapi.com/29hTAYQw0-S_8Qqh0nwi-VnzhnaSQhPaC_o5tw/R_zFUKc8RVg.jpg'
						/>
					}
					href='https://vk.com/georgich'
					target='_blank'>
					Юрий Семенков
				</SimpleCell>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-44.userapi.com/AVArvkoKqCoR8wP_a1J0EdxDYhbN4PpgBZLITA/QM7P1elbsb8.jpg'
						/>
					}
					href='https://vk.com/antoninkin'
					target='_blank'>
					Антон Инкин
				</SimpleCell>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-70.userapi.com/ZA96NMYBq9o07YkPvYPGmLZcP6a6t73u8z2J-w/G1G2MJLgDYE.jpg'
						/>
					}
					href='https://vk.com/evgpro86'
					target='_blank'>
					Евгений Кирсанов
				</SimpleCell>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-11.userapi.com/KJSNCBeQdwoyZByvRveZ3uRvNpsz65wj2-ZveQ/ogqTjVRH-xI.jpg'
						/>
					}
					href='https://vk.com/mm_ivanovna'
					target='_blank'>
					Мария Маноли
				</SimpleCell>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-42.userapi.com/6pJmpTwdOTmeF1Mrm3bdhKeielGmaZ2-1rRZpQ/wxIXZxZvAAQ.jpg'
						/>
					}
					href='https://vk.com/venegiran'
					target='_blank'>
					Емельян Виноградов
				</SimpleCell>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-67.userapi.com/wWoPbPWpk-cUpA57x8xz8rYt9LBFsEHaTShSBA/TGx8hE215rg.jpg'
						/>
					}
					href='https://vk.com/purga86'
					target='_blank'>
					Дмитрий Леснов
				</SimpleCell>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-39.userapi.com/p4kEAuAevv_UwLVlwdiMalabxELJelz2QcvqAg/Uhc8JGvr4qM.jpg'
						/>
					}
					href='https://vk.com/id11536427'
					target='_blank'>
					Рамиль Нуриев
				</SimpleCell>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-34.userapi.com/2cg2KPj3Y57uU6ZuNAflLrwBRyn0CXj9CtLM0A/WykqZ_Rj26A.jpg'
						/>
					}
					href='https://vk.com/sever47'
					target='_blank'>
					Александр Шумай
				</SimpleCell>
			</Div>

			<h2 style={{ marginBottom: 0 }}>За техническую помощь</h2>
			<Div style={{ padding: '19px 1vw 12px 1vw', textAlign: 'left' }}>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-29.userapi.com/2UgfibXngocxOW_svLPDhfYUpcu-X6xr-qK8mg/dP75ZIL7CTM.jpg'
						/>
					}
					href='https://vk.com/iboge'
					target='_blank'>
					Илья Пищулин
				</SimpleCell>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-28.userapi.com/qeQQ9hXk6a76cvacNqeHmiXClWj54wzdmScAFQ/61JI5UHoaTU.jpg'
						/>
					}
					href='https://vk.com/bless_mt19937'
					target='_blank'>
					Даниил Маряхин
				</SimpleCell>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-17.userapi.com/FbrOWN4zpYqHX89HJDSefEa_7koRq3Szn0FbWA/wvpkQpJvGVU.jpg'
						/>
					}
					href='https://vk.com/id384877626'
					target='_blank'>
					Ульяна Перевозчикова
				</SimpleCell>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-11.userapi.com/emP0KPRRbb8RguF0ip-h6UpeWhw4KwXmQl0L6A/WsXtWdNp9Cc.jpg'
						/>
					}
					href='https://vk.com/moscum'
					target='_blank'>
					Иван Москвичев
				</SimpleCell>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-49.userapi.com/GbDuF3VzlneZBVL2i7a8b2ttBqVqXRwteQ_42Q/KMy7dTh579Y.jpg'
						/>
					}
					href='https://vk.com/lxrd_txmsxn'
					target='_blank'>
					Тамара Аракелян
				</SimpleCell>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-48.userapi.com/3hsW_XQl2W1skmXWbNBFfFYbJ9wIYR0mm12x_g/zIDMuG00Smw.jpg'
						/>
					}
					href='https://vk.com/eeeqrcc'
					target='_blank'>
					Анастасия Пузыренко
				</SimpleCell>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-48.userapi.com/ByIy8Z0gDxiHRqzuWiTKhvfcRDZgAU8BtorADQ/5Fj649lOZBU.jpg'
						/>
					}
					href='https://vk.com/kolechkinavarya'
					target='_blank'>
					Варя Колечкина
				</SimpleCell>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-2.userapi.com/01fdVuogWDrl5V9I5eolVLvAmvrfx62zIez4HQ/IRBHqw8koRg.jpg'
						/>
					}
					href='https://vk.com/ddosenka'
					target='_blank'>
					Александр Абдуллаев
				</SimpleCell>
			</Div>

			<h2 style={{ marginBottom: 0 }}>
				За вкусный кофе
				<br />и вдохновение
			</h2>
			<Div style={{ padding: '19px 1vw 0 1vw', textAlign: 'left' }}>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-19.userapi.com/QlrHYrnSYimVruI0aytyvpx7M5Uj2Vpj6Yls7w/AKiGv9x6vh8.jpg'
						/>
					}
					href='https://instagram.com/ny_coffee_surgut'
					target='_blank'>
					New York Coffee
				</SimpleCell>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-40.userapi.com/aldYn9LpozcOXHjvIhhxVTB1DUYQI_XhW1-xng/CNtRhLW5gxo.jpg'
						/>
					}
					href='https://instagram.com/bespomoshny_pingvin__'
					target='_blank'>
					Ангелина Лянгус
				</SimpleCell>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-68.userapi.com/df1Z11P5FuNBTxKNkI7WR3f5Dr1W6LAjvDiALQ/p886KUQywqg.jpg'
						/>
					}
					href='https://instagram.com/ginge_gossamer'
					target='_blank'>
					Анна Блохина
				</SimpleCell>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-39.userapi.com/VLypZThG1CMgQHBfHPQqFRtTElZZf9TWc0MdZA/rei5fPSqPd8.jpg'
						/>
					}
					href='https://instagram.com/abra.gum'
					target='_blank'>
					Михаил Абрамовский
				</SimpleCell>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-27.userapi.com/YGH45KGRxwAbHjKieP4ioxiD5UNGsmq3Ez_QLg/8-waAXOXv1Q.jpg'
						/>
					}
					href='https://instagram.com/itsjuliakenig'
					target='_blank'>
					Юлия Димитрова
				</SimpleCell>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-48.userapi.com/jOoeurTq1nu6GbJmWG6U75xhNaCVrRU4yKQ0VQ/gqLX3TCiVZE.jpg'
						/>
					}
					href='https://instagram.com/vovanchik_._'
					target='_blank'>
					Владимир Пикас
				</SimpleCell>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-54.userapi.com/QYsqLW0cv61rSU0qVd1RQsqe4xdYBVlDKDRIsA/zYBdHkPN5S8.jpg'
						/>
					}
					href='https://instagram.com/_vellikayaa_'
					target='_blank'>
					Анастасия Ельцова
				</SimpleCell>
			</Div>

			<h2 style={{ marginBottom: 0 }}>За веру и поддержку</h2>
			<Div style={{ padding: '19px 1vw 19px 1vw', textAlign: 'left' }}>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-5.userapi.com/ARpj6gDX_q4MAUDJ2RRpuGS1VEhPSNzyGiqGlQ/jXvjIYf89Ww.jpg'
						/>
					}
					href='https://vk.com/plvxanax'
					target='_blank'>
					Валерия Петрук
				</SimpleCell>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-59.userapi.com/iXyuUWvcs5nfYuGjafqpq7YnKWmeVcnW7-Wslg/MOVeXlGCUiU.jpg'
						/>
					}
					href='https://vk.com/al.sushhhka'
					target='_blank'>
					Алсу Загидуллина
				</SimpleCell>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-48.userapi.com/ByIy8Z0gDxiHRqzuWiTKhvfcRDZgAU8BtorADQ/5Fj649lOZBU.jpg'
						/>
					}
					href='https://vk.com/kolechkinavarya'
					target='_blank'>
					Варя Колечкина
				</SimpleCell>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-50.userapi.com/Jd63wnVPEPetZDA3DmXU7ew0D6ba8Qd0g0uEfA/NspC13ZZzh0.jpg'
						/>
					}
					href='https://vk.com/di_ursu'
					target='_blank'>
					Диана Урсу
				</SimpleCell>
				<SimpleCell
					before={
						<Avatar
							mode='default'
							size={48}
							src='https://sun9-7.userapi.com/j0GZedrrbrQVD1D__Uffoz9hiwSJNyKmagVOTA/6QxfzIcQ6hA.jpg'
						/>
					}
					href='https://vk.com/missalr'
					target='_blank'>
					Яна Буинцева
				</SimpleCell>
			</Div>
		</Group>
	</Panel>
);

export default Credits;
