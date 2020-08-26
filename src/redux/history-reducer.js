const ADD_ITEM = 'history/ADD_ITEM';
const DELETE_ITEM = 'history/DELETE_ITEM';

const initialState = {
	history: []
}

const historyReducer = (state = initialState, action) => {
	switch (action.type) {
		case DELETE_ITEM: {
			return {
				...state,
				history: state.history.filter(item => item.title !== action.title)
			}
		}
		case ADD_ITEM: {
			const newHistory = [...state.history].filter(item => item.title !== action.title).slice(-14);
			return {
				...state,
				history: [ ...newHistory,
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
export const deleleHistoryItem = (title) => ({
	type: DELETE_ITEM,
	title
});

export default historyReducer;