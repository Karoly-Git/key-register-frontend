import { createSlice } from "@reduxjs/toolkit";

export const activeTabSlice = createSlice({
    name: "activeTab",
    initialState: {
        tabName: 'keys'
    },
    reducers: {
        setActiveTab: (state, action) => {
            state.tabName = action.payload;
        }
    }
});

export const { setActiveTab } = activeTabSlice.actions;
export default activeTabSlice.reducer;
