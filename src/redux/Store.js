import {createStore} from 'redux';
import {TodoReducer} from './todoReducer';
import {initialState} from './todoReducer';

export const store = createStore(TodoReducer, initialState);
