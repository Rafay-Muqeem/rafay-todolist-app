import {createStore} from 'redux';
import {TodoReducer} from './todoReducer';
import {initialState} from './todoReducer';

export const configureStore = () => {
    const store = createStore(TodoReducer, initialState);

    return store;
} 