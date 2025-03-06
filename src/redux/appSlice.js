import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: "appSlice",
    initialState: {
        activeTab: {
            name: 'keys',
            tableData: null,
        },
        tableStates: {
            keys: { sortBy: 'access_name', isAsc: true },
            accesses: { sortBy: 'access_name', isAsc: true },
            cabinets: { sortBy: 'cabinet_name', isAsc: true },
            locations: { sortBy: 'location_name', isAsc: true },
            sites: { sortBy: 'site_name', isAsc: true }
        },
        modal: {
            activeModal: null,
            modalData: {}
        }
    },
    reducers: {
        setActiveTab: (state, action) => {
            state.activeTab.name = action.payload;
        },
        setActiveTableData: (state, action) => {
            state.activeTab.tableData = action.payload;
        },
        setTableStates: (state, action) => {
            state.tableStates = action.payload;
        },
        setTableSorting: (state, action) => {
            const { tableName, sortBy, isAsc } = action.payload;
            state.tableStates[tableName] = { sortBy, isAsc };
        },
        setActiveModal: (state, action) => {
            state.modal.activeModal = action.payload;
        },
        setModalData: (state, action) => {
            state.modal.modalData = action.payload;
        }
    }
});

export const { setActiveTab, setActiveTableData, setTableStates, setTableSorting, setActiveModal, setModalData } = appSlice.actions;
export default appSlice.reducer;
