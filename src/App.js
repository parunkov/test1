import React, {useEffect} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import Console from './components/Console/Console';
import LoginContainer from './components/Login/LoginContainer';
import store from './redux/store';
import {connect} from 'react-redux';
import {setLogin} from './redux/login-reducer';

const ConsoleWrapper = ({isLogined, setLogin}) => {
	useEffect(() => {
		const savedLoginData = JSON.parse(localStorage.getItem('loginData'));
		if (savedLoginData.isLogined) {
			setLogin(savedLoginData.login, savedLoginData.sublogin, savedLoginData.password);
		}
	});

	return(
		<div>
			{!isLogined ? <LoginContainer /> : <Console />}
		</div>
	)
}

const mapStateToProps = (state) => ({
		isLogined: state.login.isLogined
});

const ConsoleWrapperContainer = connect(mapStateToProps, {setLogin})(ConsoleWrapper);

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
