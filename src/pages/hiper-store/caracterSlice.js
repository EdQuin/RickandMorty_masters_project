import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    caracters: []
}

const caracterSlice = createSlice({
    name: "caracters",
    initialState,
    reducers: {
        addCaracters: (state, { payload }) => {
            state.caracters = payload;
        }
    },
})

export const {addCaracters} = caracterSlice.actions;
export const getAllCaracters = (state) => state.caracters.caracters;
export default caracterSlice.reducer;