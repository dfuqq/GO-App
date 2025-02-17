'use client';

import React, { useState } from 'react';
// import bridge from '@vkontakte/vk-bridge';




export const App = ({ startPage }) => {
	const [activePanel, setActivePanel] = useState(startPage);
	const [activeView, setActiveView] = useState('home');

	const [history, setHistory] = useState(['home']);

	const changePanel = (e) => {
		// Управление приложением, смена панелей
		window.history.pushState(
			{ panel: e.currentTarget.dataset.to },
			e.currentTarget.dataset.to
		);
		setActivePanel(e.currentTarget.dataset.to);
		history.push(e.currentTarget.dataset.to);
	};

	return (
		
	);
};
