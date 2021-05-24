import * as ActionTypes from './ActionTypes';

export const initialState = [];

export const TodoReducer = ((state = initialState, action) => {
    switch(action.type){

        case ActionTypes.ADD_TODO: {
            return(
                [action.payload, ...state]
            );
        }
        
        case ActionTypes.DEL_TODO: {
            return(
                state.filter(todo => todo.id !== action.payload)
            );
        }
        
        case ActionTypes.DEL_ALL: {
            return []
        }

        default: {
            return state;
        }
    };
})