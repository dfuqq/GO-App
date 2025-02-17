'use client';

import React, { useState } from 'react';
import {
	AdaptivityProvider,
	AppRoot,
	ConfigProvider,
	Root,
	SplitCol,
	SplitLayout,
	View,
	ViewWidth,
} from '@vkontakte/vkui';

import * as Panels from '../src/panels';

export default function App() {
	const [activePanel, setActivePanel] = useState('home');
	const [activeView, setActiveView] = useState('home');

	const changePanel = (panel: string, view?: string) => {
		setActivePanel(panel);
		if (view) setActiveView(view);
	};

	return (
		<ConfigProvider
			platform='ios'
			transitionMotionEnabled>
			<AdaptivityProvider viewWidth={ViewWidth.MOBILE}>
				<AppRoot userSelectMode='disabled'>
					<SplitLayout center>
						<SplitCol
							animate
							autoSpaced>
							<Root activeView={activeView}>
								<View
									nav='home'
									activePanel={activePanel}>
									<Panels.Home
										nav='home'
										changePanel={changePanel}
									/>
								</View>
								<View
									nav='business'
									activePanel={activePanel}>
									<Panels.Business
										nav='business'
										changePanel={changePanel}
									/>
								</View>
							</Root>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}
