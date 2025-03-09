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
        //modal: {
        activeModal: {
            //activeModal: null,
            name: '',
            data: {}
        }
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
            //state.modal.activeModal = action.payload;
            state.activeModal.name = action.payload;
        },
        setModalData: (state, action) => {
            state.activeModal.data = action.payload;
            console.log(state.activeModal.data);
        }
    }
});

export const { setActiveTableName, setActiveTableData, setTableStates, setTableSorting, setActiveModalName, setModalData } = appSlice.actions;
export default appSlice.reducer;
