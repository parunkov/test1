import 'isomorphic-fetch';
import Sendsay from 'sendsay-api';

const LOGINED = 'login/LOGINED';
const LOGOUT = 'login/LOGOUT';
const ERROR = 'login/ERROR';

const initialState = {
	isLogined: false,
	login: null,
	sublogin: null,
	password: null,
	error: null
}

const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGINED:
		case ERROR:
		case LOGOUT: {
			return {
				...state,
				...action.payload
			}
		}
		default:
		return state;
	}
}

export const setLogin = (login, sublogin, password) => ({
	type: LOGINED,
	payload: {isLogined: true, login, sublogin, password, error: null}
});
export const logout = () =>({
	type: LOGOUT,
	payload: {isLogined: false, login: null, sublogin: null, password: null, error: null}
});
const setError = (error) => ({
	type: ERROR,
	payload: {error}
})

export const checkLogin = (login, sublogin, password) => (dispatch) => {
	var sendsay = new Sendsay({
		auth: {login, sublogin, password}
	});

	sendsay.request({ action: 'sys.settings.get', list: ['about.id']}).then(function(res) {
		// console.log(res);
		localStorage.setItem('loginData', JSON.stringify({isLogined: true, login, sublogin, password}));
		dispatch(setLogin(login, sublogin, password));
	}).catch(err => {
		// console.log(err.explain);
		dispatch(setError(err.explain));
	});
}

export default loginReducer;