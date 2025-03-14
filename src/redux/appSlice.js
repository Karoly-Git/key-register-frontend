import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: "appSlice",
    initialState: {
        activeTable: {
            name: 'keys',
            data: [],
        },
        tableStates: {
            keys: { sortBy: 'access_name', isAsc: true },
            accesses: { sortBy: 'access_name', isAsc: true },
            cabinets: { sortBy: 'cabinet_name', isAsc: true },
            locations: { sortBy: 'location_name', isAsc: true },
            sites: { sortBy: 'site_name', isAsc: true }
        },
        activeModal: {
            name: '',
            data: {}
        },
        filterValue: ''
    },
    reducers: {
        setActiveTableName: (state, action) => {
            state.activeTable.name = action.payload;
        },
        setActiveTableData: (state, action) => {
            state.activeTable.data = action.payload;
        },
        setTableStates: (state, action) => {
            state.tableStates = action.payload;
        },
        setTableSorting: (state, action) => {
            const { tableName, sortBy, isAsc } = action.payload;
            state.tableStates[tableName] = { sortBy, isAsc };
        },
        setActiveModalName: (state, action) => {
            state.activeModal.name = action.payload;
        },
        setModalData: (state, action) => {
            state.activeModal.data = {
                ...state.activeModal.data,
                ...action.payload
            };
            console.log(state.activeModal.data);
        },
        resetModalData: (state) => {
            state.activeModal.data = {};
            console.log(state.activeModal.data);
        },
        setFilterValue: (state, action) => {
            state.filterValue = action.payload;
        }
    }
});

export const {
    setActiveTableName,
    setActiveTableData,
    setTableStates,
    setTableSorting,
    setActiveModalName,
    setModalData,
    resetModalData,
    setFilterValue
} = appSlice.actions;

export default appSlice.reducer;
