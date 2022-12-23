import { combineReducers } from "redux";
import list from "./list";
import lists from "./lists";
import todo from "./todo";
import todos from "./todos";

const rootReducer = combineReducers({
    lists:lists,
    list:list,
    todo:todo,
    todos:todos,
});

export default rootReducer;