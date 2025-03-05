import { configureStore } from "@reduxjs/toolkit";
import activeTabReducer from './activeTab';
import activeModalReducer from './modalSlice';
import sortingDataReducer from "./dataSlice";

export default configureStore({
    reducer: {
        activeTab: activeTabReducer,
        modalSlice: activeModalReducer,
        dataSlice: sortingDataReducer
    }
});