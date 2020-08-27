import React from 'react';
import HeaderContainer from '../Header/HeaderContainer';
import FieldsContainer from '../Fields/FieldsContainer';
import HistoryContainer from '../History/HistoryContainer';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import './Console.scss';

const Console = () => {
	const handle = useFullScreenHandle();
	return (
		<div className="">
			<button onClick={handle.enter}>
				Enter fullscreen
			</button>
			<FullScreen handle={handle}>
				<HeaderContainer />
				<HistoryContainer />
				<FieldsContainer />
			</FullScreen>
		</div>
	)
}

export default Console;