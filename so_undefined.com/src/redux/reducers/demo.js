import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const demoReducer = createSlice({
    name: "demo",
    initialState,
    reducers: {
        activatedDemo: (state, action) => {
            state.demo = [...action.payload];
        },
    },
});