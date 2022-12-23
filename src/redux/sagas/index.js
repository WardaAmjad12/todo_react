import { all, call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import apis from "../apis";
import {
    addList,
    deleteListSlice,
    editListSlice,
    getLists,
} from "../slice/lists";
import { addTodo, deleteTodoSlice, editTodoSlice, getTodos } from "../slice/todos";
import { CREATE_LIST, CREATE_TODO, DELETE_LIST_BY_ID, DELETE_TODO_BY_ID, GET_LISTS, GET_TODOS, UPDATE_List_BY_ID, UPDATE_TODO_BY_ID } from "../types";

export function* createListSaga(action) {
    const list = yield apis.createList(action.list)
    yield put(addList(list));
}
export function* getListsSaga() {
    const lists = yield apis.getList()
    yield put(getLists(lists));
}
export function* updateListSaga(action) {
    yield apis.updateList(action.list._id,action.list)
    yield put(editListSlice(action))
}
export function* deleteListByIdSaga(action) {
    yield apis.deleteList(action.id)
    yield put(deleteListSlice(action.id))
}
export function* createTodoSaga(action) {
    const todo = yield apis.createTodo(action.listId,action.todo)
    yield put(addTodo(todo));
}
export function* getTodosSaga(action) {
    const todos = yield apis.getTodos(action.listId)
    yield put(getTodos(todos));
}
export function* updateTodoSaga(action) {
    yield apis.updateTodo(action.todo._id,action.todo)
    yield put(editTodoSlice(action))
}
export function* deleteTodoByIdSaga(action) {
    yield apis.deleteTodo(action.id)
    yield put(deleteTodoSlice(action.id))
}

export function* rootSaga() {
    yield all([
        takeEvery(UPDATE_List_BY_ID, updateListSaga),
        takeEvery(CREATE_LIST, createListSaga),
        takeEvery(GET_LISTS, getListsSaga),
        takeEvery(DELETE_LIST_BY_ID, deleteListByIdSaga),
        takeEvery(UPDATE_TODO_BY_ID, updateTodoSaga),
        takeEvery(CREATE_TODO, createTodoSaga),
        takeEvery(GET_TODOS, getTodosSaga),
        takeEvery(DELETE_TODO_BY_ID, deleteTodoByIdSaga)
    ]);
}