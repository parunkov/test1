import React, {useEffect} from 'react';
import './App.scss';
import {Provider} from 'react-redux';
import Console from './components/Console/Console';
import LoginContainer from './components/Login/LoginContainer';
import store from './redux/store';
import {connect} from 'react-redux';
import {setLogin} from './redux/login-reducer';
import {setSavedHistory} from './redux/history-reducer';

const ConsoleWrapper = ({isLogined, setLogin, setSavedHistory}) => {
	useEffect(() => {
		const savedLoginData = JSON.parse(localStorage.getItem('loginData'));
		if (savedLoginData.isLogined) {
			setLogin(savedLoginData.login, savedLoginData.sublogin, savedLoginData.password);
		}
		setSavedHistory(JSON.parse(localStorage.getItem('history')));
	}, []);

	return(
		<div>
			{!isLogined ? <LoginContainer /> : <Console />}
		</div>
	)
}

const mapStateToProps = (state) => ({
		isLogined: state.login.isLogined
});

const ConsoleWrapperContainer = connect(mapStateToProps, {setLogin, setSavedHistory})(ConsoleWrapper);

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
