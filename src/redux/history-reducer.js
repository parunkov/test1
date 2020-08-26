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
					title: action.title,
					value: action.value,
					isError: action.isError
				}]
			}
		}
		default:
		return state;
	}
}

export const addHistoryItem = (title, value, isError) => ({
	type: ADD_ITEM,	
	title,
	value,
	isError
});

export default historyReducer;