import { createSlice } from "@reduxjs/toolkit";

export const initialState = {

        id: 0,
        title: ''

};

const list = createSlice({
    name: "list",
    initialState,
    reducers: {
        setlistSlice: (state, action) => {
            state = action.payload
            return state
        }
    },
});

export const {
    setlistSlice
} = list.actions;
export default list.reducer;