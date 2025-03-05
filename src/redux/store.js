import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice"; // Ensure this matches the filename of the combined slice

export default configureStore({
    reducer: {
        app: appReducer // Changed from appSlice to app for cleaner usage
    }
});
