import 'isomorphic-fetch';
import Sendsay from 'sendsay-api';

const RESPONSE = 'fields/RESPONSE';
const ERROR = 'fields/ERROR';

const initialState = {
	request: null,
	response: null,
	error: false
}

const fieldsReducer = (state = initialState, action) => {
	switch (action.type) {
		case RESPONSE:
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

const setResponse = (response) => ({
	type: RESPONSE,
	payload: {response}
});
const setError = () => ({
	type: ERROR,
	payload: {error: true}
});

export const sendRequest = (login, sublogin, password, request) => (dispatch) => {
	var sendsay = new Sendsay({
		auth: {login, sublogin, password}
	});

	sendsay.request(request).then(function(res) {
		dispatch(setResponse(res));
	}).catch(err => {
		dispatch(setResponse(err));
		dispatch(setError());
	});
}

export default fieldsReducer;