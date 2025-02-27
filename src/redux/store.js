import { configureStore } from "@reduxjs/toolkit";
import activeTabReducer from './activeTab';
import activeModalReducer from './activeModal';

export default configureStore({
    reducer: {
        activeTab: activeTabReducer,
        activeModal: activeModalReducer
    }
});