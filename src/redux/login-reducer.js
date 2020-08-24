import 'isomorphic-fetch';
import Sendsay from 'sendsay-api';

const LOGINED = 'login/LOGINED';

const initialState = {
	isLogined: false,
	login: null,
	sublogin: null,
	password: null
}

const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGINED: {
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

export const checkLogin = (login, sublogin, password) => (dispatch) => {
	var sendsay = new Sendsay({
		auth: {login, sublogin, password}
	});

	sendsay.request({ action: 'sys.settings.get', list: ['about.id']}).then(function(res) {
		console.log(res);
		dispatch(setLogin(login, sublogin, password));
	})
}

export default loginReducer;