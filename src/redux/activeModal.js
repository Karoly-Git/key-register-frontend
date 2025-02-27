import { createSlice } from "@reduxjs/toolkit";

export const activeModalSlice = createSlice({
    name: "activeModal",
    initialState: {
        modalName: null
    },
    reducers: {
        setActiveModal: (state, action) => {
            state.modalName = action.payload;
        }
    }
});

export const { setActiveModal } = activeModalSlice.actions;
export default activeModalSlice.reducer;
