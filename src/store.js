import { configureStore } from '@reduxjs/toolkit';
import hackathonReducer from './redux/hackathonSlice'

export const store = configureStore({
    reducer: {
        hackathons: hackathonReducer,
    },
});