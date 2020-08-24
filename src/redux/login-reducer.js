import 'isomorphic-fetch';
import Sendsay from 'sendsay-api';

const LOGINED = 'login/LOGINED';
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
		case ERROR: {
			return {
				...state,
				...action.payload
			}
		}
		default:
		return state;
	}
}

const setLogin = (login, sublogin, password) => ({
	type: LOGINED,
	payload: {isLogined: true, login, sublogin, password}
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
		dispatch(setLogin(login, sublogin, password));
	}).catch(err => {
		// console.log(err.explain);
		dispatch(setError(err.explain));
	});
}

export default loginReducer;