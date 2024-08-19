import { createSlice } from '@reduxjs/toolkit';

interface uiState {
  showSidebar: boolean;
}

const initialState: uiState = {
  showSidebar: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggedSidebar: state => {
      state.showSidebar = !state.showSidebar;
    },
  },
});

export const { toggedSidebar } = uiSlice.actions;
export default uiSlice.reducer;
