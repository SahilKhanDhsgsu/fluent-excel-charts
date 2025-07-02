import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import chartSlice from './slices/chartSlice';
import fileSlice from './slices/fileSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    chart: chartSlice,
    file: fileSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;