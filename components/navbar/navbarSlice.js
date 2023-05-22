import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    condition: false,
}

export const couterSlice = createSlice({
    name: "toggle",
    initialState,
    reducers: {
        toggleConditon: (state) => {
            if (state.condition === true) {
                state.condition = false
            } else {
                state.condition = true
            }
        },
    },
});

export const { toggleConditon } = couterSlice.actions

export default couterSlice.reducer;