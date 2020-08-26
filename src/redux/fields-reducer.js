import 'isomorphic-fetch';
import Sendsay from 'sendsay-api';
import {addHistoryItem} from './history-reducer';

const RESPONSE = 'fields/RESPONSE';
const ERROR = 'fields/ERROR';
const SET_VALUES = 'fields/SET_VALUES';

const initialState = {
	request: null,
	response: null,
	error: false,
	fieldFormattedValue: '',
	fieldValue: ''
}

const fieldsReducer = (state = initialState, action) => {
	switch (action.type) {
		case RESPONSE:
		case ERROR:
		case SET_VALUES: {
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
export const setValues = (fieldFormattedValue, fieldValue) => ({
	type: SET_VALUES,
	payload: {fieldFormattedValue, fieldValue}
});

export const sendRequest = (login, sublogin, password, request, fieldValue) => (dispatch) => {
	const sendsay = new Sendsay({
		auth: {login, sublogin, password}
	});

	sendsay.request(request).then(function(res) {
		dispatch(setResponse(res));
		dispatch(addHistoryItem(request.action, fieldValue, false));
	}).catch(err => {
		dispatch(setResponse(err));
		dispatch(setError());
		dispatch(addHistoryItem(request.action, fieldValue, true));
	});
}

export default fieldsReducer;