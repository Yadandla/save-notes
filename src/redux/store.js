import { configureStore } from "@reduxjs/toolkit";
import noteReducer from './notesSlice'

const store = configureStore({
    reducer: {
        note: noteReducer,
    }
})
export default store;