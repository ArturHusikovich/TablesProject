
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import usersReducer from './usersReducer';

let reducers = combineReducers ({   
    form: formReducer,
    users: usersReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store= store;
export default store;