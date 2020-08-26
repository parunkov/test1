const ADD_ITEM = 'history/ADD_ITEM';

const initialState = {
	history: []
}

const historyReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ITEM: {
			const newHistory = [...state.history].filter(item => item.title !== action.title).slice(-14);
			// console.log(newHistory);
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

export default historyReducer;