import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
import bridge from '@vkontakte/vk-bridge';
import App from './App';

// Самойлова Илона Михайловна лучшая девушка на свете.
// vk.com/tolkonespeww
// instagram.com/tolkonespew
// <3

// Для запуска в клиент:
// vk-tunnel --insecure=1 --http-protocol=https --ws-protocol=wss --host=localhost --port=10888

// TODO прокинуть mode и setMode на area и setArea

let startPage = 'introodin';

const STORAGE_KEYS = { STATUS: 'status' };

async function getStartScreen() {
	const storageData = await bridge.send('VKWebAppStorageGet', {
		keys: Object.values(STORAGE_KEYS),
	});
	const data = {};
	storageData.keys.forEach(({ key, value }) => {
		try {
			data[key] = value ? JSON.parse(value) : {};
			switch (key) {
				case STORAGE_KEYS.STATUS:
					if (data[key].hasSeenIntro) {
						startPage = 'home';
						ReactDOM.render(
							<App startPage={startPage} />,
							document.getElementById('root')
						);
					} else {
						ReactDOM.render(
							<App startPage={startPage} />,
							document.getElementById('root')
						);
					}
					break;
				default:
					ReactDOM.render(
						<App startPage={startPage} />,
						document.getElementById('root')
					);
					break;
			}
		} catch (error) {
			console.log(error);
		}
	});
}

getStartScreen();

// Init VK  Mini App
bridge.send('VKWebAppInit');

// Определение темы при инициализации
bridge.subscribe(({ detail: { type, data } }) => {
	if (type === 'VKWebAppUpdateConfig') {
		const schemeAttribute = document.createAttribute('scheme');
		schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
		document.body.attributes.setNamedItem(schemeAttribute);
	}
});

if (process.env.NODE_ENV === 'development') {
	import('./eruda').then(({ default: eruda }) => {}); //runtime download
}
