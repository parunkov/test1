import React from 'react';
import HeaderContainer from '../Header/HeaderContainer';
import FieldsContainer from '../Fields/FieldsContainer';
import HistoryContainer from '../History/HistoryContainer';

const Console = () => {
	return (
		<div className="">
			<HeaderContainer />
			<HistoryContainer />
			<FieldsContainer />
		</div>
	)
}

export default Console;