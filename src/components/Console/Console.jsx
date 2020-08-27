import React from 'react';
import HeaderContainer from '../Header/HeaderContainer';
import FieldsContainer from '../Fields/FieldsContainer';
import HistoryContainer from '../History/HistoryContainer';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import './Console.scss';

const Console = () => {
	const handle = useFullScreenHandle();
	return (
		<div className="Console">
			{!handle.active && <button onClick={handle.enter}>
				Enter fullscreen
			</button>}
			<FullScreen handle={handle}>
				{handle.active && <button onClick={handle.exit}>
					Exit fullscreen
				</button>}
				<div className="Console__header">
					<HeaderContainer />
				</div>
				<div className="Console__history">
					<HistoryContainer />
				</div>
				<div className="Console__fields">
					<FieldsContainer />
				</div>
			</FullScreen>
		</div>
	)
}

export default Console;