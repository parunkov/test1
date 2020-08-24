import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import loginReducer from './login-reducer';
import {reducer as formReducer} from 'redux-form';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
	login: loginReducer,
	form: formReducer
});

// const store = createStore(reducers);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

window.store = store;

export default store;