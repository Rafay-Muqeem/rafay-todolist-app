import * as ActionTypes from "./ActionTypes";

export const Add_todo = (todoObj) => ({
    type: ActionTypes.ADD_TODO,
    payload : {
        id : todoObj.id,
        name : todoObj.name,
        desc: todoObj.desc
    }
        
});

export const Del_todo = (id) => ({
    type: ActionTypes.DEL_TODO,
    payload : id
        
});

export const Del_all = () => ({
    type: ActionTypes.DEL_ALL
});