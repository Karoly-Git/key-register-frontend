import { configureStore } from "@reduxjs/toolkit";
import activeTabReducer from './activeTab';
import activeModalReducer from './activeModal';
import sortingDataReducer from "./sortingData";

export default configureStore({
    reducer: {
        activeTab: activeTabReducer,
        activeModal: activeModalReducer,
        sortingData: sortingDataReducer
    }
});