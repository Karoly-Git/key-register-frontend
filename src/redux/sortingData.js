import { createSlice } from "@reduxjs/toolkit";

export const sortingDataSlice = createSlice({
    name: "sortingData",
    initialState: {
        tableStates: {
            keys: {
                sortBy: 'access_name',
                isAsc: true,
            },
            accesses: {
                sortBy: 'access_name',
                isAsc: true,
            },
            cabinets: {
                sortBy: 'cabinet_name',
                isAsc: true,
            },
            locations: {
                sortBy: 'location_name',
                isAsc: true,
            },
            sites: {
                sortBy: 'site_name',
                isAsc: true,
            }
        }
    },
    reducers: {
        setTableStates: (state, action) => {
            state.tableStates = action.payload;
        },
        setTableSorting: (state, action) => {
            const { tableName, sortBy, isAsc } = action.payload;
            //if (state.tableStates[tableName]) {
            state.tableStates[tableName] = { sortBy, isAsc };
            //}
        },
    }
});

export const { setTableStates, setTableSorting } = sortingDataSlice.actions;
export default sortingDataSlice.reducer;
