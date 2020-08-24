import React from 'react';
import './App.css';
// import {HashRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import Console from './components/Console/Console';
import LoginContainer from './components/Login/LoginContainer';
import store from './redux/store';
import {connect} from 'react-redux';

const ConsoleWrapper = ({isLogined}) => {
	return(
		<div>
			{!isLogined ? <LoginContainer /> : <Console />}
		</div>
	)
}

const mapStateToProps = (state) => ({
		isLogined: state.login.isLogined
});

const ConsoleWrapperContainer = connect(mapStateToProps, {})(ConsoleWrapper);

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<ConsoleWrapperContainer />
			</div>
		 </Provider>
	);
}

export default App;
