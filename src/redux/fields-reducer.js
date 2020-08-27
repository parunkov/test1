import 'isomorphic-fetch';
import Sendsay from 'sendsay-api';
import {addHistoryItem} from './history-reducer';

const RESPONSE = 'fields/RESPONSE';
const ERROR = 'fields/ERROR';
const SET_VALUE = 'fields/SET_VALUE';

const initialState = {
	request: null,
	response: null,
	error: false,
	requestFieldValue: ''
}

const fieldsReducer = (state = initialState, action) => {
	switch (action.type) {
		case RESPONSE:
		case ERROR:
		case SET_VALUE: {
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
export const setRequestFieldValue = (requestFieldValue) => ({
	type: SET_VALUE,
	payload: {requestFieldValue}
});

export const sendRequest = (login, sublogin, password, request, requestFieldValue) => (dispatch) => {
	const sendsay = new Sendsay({
		auth: {login, sublogin, password}
	});

	sendsay.request(request).then(function(res) {
		dispatch(setResponse(res));
		dispatch(addHistoryItem(request.action, requestFieldValue, false));
	}).catch(err => {
		dispatch(setResponse(err));
		dispatch(setError());
		dispatch(addHistoryItem(request.action, requestFieldValue, true));
	});
}

export default fieldsReducer;