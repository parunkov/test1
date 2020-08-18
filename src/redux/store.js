import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import loginReducer from './login-reducer';
import {reducer as formReducer} from 'redux-form';

const reducers = combineReducers({
	login: loginReducer,
	form: formReducer
});

const store = createStore(reducers);

window.store = store;

export default store;