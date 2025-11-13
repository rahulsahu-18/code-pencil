import { configureStore } from '@reduxjs/toolkit';
import compilerSlice from './slice/compilerSlice'
import userSlice from './slice/userSlice'
import api from './slice/api';
export const store = configureStore({
    reducer:{
        compilerSlice,
        userSlice,
        [api.reducerPath]:api.reducer
    },
    middleware:(getDefaultMiddleware) => 
        getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>;