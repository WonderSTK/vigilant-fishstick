import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './slices/countrySlice';
import themeReducer from './slices/themeSlice';
import dataReducer from './slices/dataSlice';

export const store = configureStore({
  reducer: {
    country: countryReducer,
    theme: themeReducer,
    data: dataReducer,
  },
});

