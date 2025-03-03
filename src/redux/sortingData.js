import { createSlice } from "@reduxjs/toolkit";

export const sortingDataSlice = createSlice({
    name: "sortingData",
    initialState: {
        sortBy: 'access_name',
        isAscending: true
    },
    reducers: {
        setSortBy: (state, action) => {
            state.sortBy = action.payload;
        },
        setIsAscending: (state, action) => {
            state.isAscending = action.payload;
        },
    }
});

export const { setSortBy, setIsAscending } = sortingDataSlice.actions;
export default sortingDataSlice.reducer;
