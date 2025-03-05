import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "modalSlice",
    initialState: {
        modalName: null,
        modalData: null
    },
    reducers: {
        setActiveModal: (state, action) => {
            state.modalName = action.payload;
        },
        setModalData: (state, action) => {
            state.modalData = action.payload;
        }
    }
});

export const { setActiveModal, setModalData } = modalSlice.actions;
export default modalSlice.reducer;
