import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "modalSlice",
    initialState: {
        activeModal: null,
        modalData: null
    },
    reducers: {
        setActiveModal: (state, action) => {
            state.activeModal = action.payload;
        },
        setModalData: (state, action) => {
            state.modalData = action.payload;
            console.log(state.modalData);
        }
    }
});

export const { setActiveModal, setModalData } = modalSlice.actions;
export default modalSlice.reducer;
