'use client';

import {
	AdaptivityProvider,
	AppRoot,
	ConfigProvider,
	ViewWidth,
} from '@vkontakte/vkui';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import { Container } from 'src/components/Container';

// FIXME: Loadings until data received

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='ru'>
			<head>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
				/>
				<title>GO! - Гид по Сургуту</title>
			</head>
			<body>
				<Container>
					<ConfigProvider
						platform='ios'
						transitionMotionEnabled>
						<AdaptivityProvider viewWidth={ViewWidth.MOBILE}>
							<AppRoot userSelectMode='disabled'>
								{children}
							</AppRoot>
						</AdaptivityProvider>
					</ConfigProvider>
				</Container>
			</body>
		</html>
	);
}
