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
        setDarkMode: (state) => {
            state.darkMode = !state.darkMode;
        },
        reset: () => initialState,
    }
});

export const { setDarkMode, reset } = stateDataSlice.actions;
export default stateDataSlice.reducer;