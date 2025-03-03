import { createSlice } from "@reduxjs/toolkit";

export const sortingDataSlice = createSlice({
    name: "sortingData",
    initialState: {
        isAscending: true,
        tablesSortedBy: {
            keys: 'access_name',
            accesses: 'access_name',
            cabinets: 'cabinet_name',
            locations: 'location_name',
            sites: 'site_name'
        }
    },
    reducers: {
        setIsAscending: (state, action) => {
            state.isAscending = action.payload;
        },
        setTablesSortedBy: (state, action) => {
            state.tablesSortedBy = action.payload;
        },
    }
});

export const { setIsAscending, setTablesSortedBy } = sortingDataSlice.actions;
export default sortingDataSlice.reducer;
