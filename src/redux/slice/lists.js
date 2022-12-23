import { createSlice } from "@reduxjs/toolkit";

const lists = createSlice({
    name: "lists",
    initialState: [],
    reducers: {
        addList: (state, { payload }) => {
            state.push(payload.data);
            return state
        },
        getLists: (state, { payload }) => {
            state = payload.data
            return state
        },
        editListSlice: (state, action) => {
            state = state.map(i => i._id == action.payload.list._id ? action.payload.list : i)
            return state
        },
        deleteListSlice: (state, action) => {
            state = state.filter(i => i._id !== action.payload)
            return state
        }
    },
});

export const {
    addList,
    deleteListSlice,
    editListSlice,
    getLists
} = lists.actions;
export default lists.reducer;