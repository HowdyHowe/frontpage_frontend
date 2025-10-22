import { createSlice } from "@reduxjs/toolkit"

interface stateData{
    darkMode: boolean,
};

const initialState: stateData = {
    darkMode: false
};

const stateDataSlice = createSlice({
    name: "StateData",
    initialState,
    reducers: {
        reset: () => initialState,
    }
});

export const {  } = stateDataSlice.actions;
export default stateDataSlice.reducer;