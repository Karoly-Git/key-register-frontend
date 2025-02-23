import { configureStore } from "@reduxjs/toolkit";
import activeTabReducer from './activeTab';

export default configureStore({
    reducer: {
        activeTab: activeTabReducer,
    }
});