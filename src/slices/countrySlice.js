import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCountry: localStorage.getItem('selectedCountry') || 'USA',
};

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    setCountry: (state, action) => {
      state.selectedCountry = action.payload;
      localStorage.setItem('selectedCountry', action.payload);
    },
  },
});

export const { setCountry } = countrySlice.actions;

export default countrySlice.reducer;

