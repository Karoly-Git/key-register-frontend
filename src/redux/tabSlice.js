import { createSlice } from "@reduxjs/toolkit";

export const activeTabSlice = createSlice({
    name: "activeTabSlice",
    initialState: {
        activeTabName: 'keys'
    },
    reducers: {
        setActiveTab: (state, action) => {
            state.activeTabName = action.payload;
        }
    }
});

export const { setActiveTab } = activeTabSlice.actions;
export default activeTabSlice.reducer;
