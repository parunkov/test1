const ADD_ITEM = 'history/ADD_ITEM';

const initialState = {
	history: []
}

const historyReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ITEM: {
			return {
				...state,
				history: [ ...state.history,
				{
					title: action.title
				}]
			}
		}
		// case SET_VALUES: {
		// 	return {
		// 		...state,
		// 		...action.payload
		// 	}
		// }
		default:
		return state;
	}
}

export const addHistoryItem = (title) => ({
	type: ADD_ITEM,	
	title
});

export default historyReducer;