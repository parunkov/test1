import 'isomorphic-fetch';
import Sendsay from 'sendsay-api';

const RESPONSE = 'fields/RESPONSE';

const initialState = {
	request: null,
	response: null
}

const fieldsReducer = (state = initialState, action) => {
	switch (action.type) {
		case RESPONSE: {
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

export const sendRequest = (login, sublogin, password, request) => (dispatch) => {
	var sendsay = new Sendsay({
		auth: {login, sublogin, password}
	});

	sendsay.request(request).then(function(res) {
		console.log(res);
		dispatch(setResponse(res));
	}).catch(err => {
		console.log(err.explain);
	});
}

export default fieldsReducer;