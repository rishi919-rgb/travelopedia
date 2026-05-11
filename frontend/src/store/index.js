import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import poiReducer from './slices/poiSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    poi: poiReducer,
  },
});

export default store;
