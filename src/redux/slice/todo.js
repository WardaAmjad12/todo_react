import { createSlice } from "@reduxjs/toolkit";

export const initialState = {

        id: 0,
        listId:'',
        title: '',
        date:undefined,
        isMarked:false

};

const todo = createSlice({
    name: "todo",
    initialState,
    reducers: {
        settodoSlice: (state, action) => {
            state = action.payload
            return state
        }
    },
});

export const {
    settodoSlice
} = todo.actions;
export default todo.reducer;