import { configureStore } from "@reduxjs/toolkit";
import activeTabReducer from './tabSlice';
import activeModalReducer from './modalSlice';
import sortingDataReducer from "./dataSlice";

export default configureStore({
    reducer: {
        tabSlice: activeTabReducer,
        modalSlice: activeModalReducer,
        dataSlice: sortingDataReducer
    }
});