import { createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, { payload }) => {
            state.push(payload.data);
            return state
        },
        getTodos: (state, { payload }) => {
            state = payload.data
            return state
        },
        editTodoSlice: (state, action) => {
            state = state.map(i => i._id == action.payload.todo._id ? action.payload.todo : i)
            return state
        },
        deleteTodoSlice: (state, action) => {
            state = state.filter(i => i._id !== action.payload)
            return state
        }
    },
});

export const {
    addTodo,
    deleteTodoSlice,
    editTodoSlice,
    getTodos
} = todos.actions;
export default todos.reducer;