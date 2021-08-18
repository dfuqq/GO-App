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

ReactDOM.render(<App />, document.getElementById('root'));
if (process.env.NODE_ENV === 'development') {
	import('./eruda').then(({ default: eruda }) => {}); //runtime download
}
