import { createSlice } from '@reduxjs/toolkit';
import { meThunk } from '@/store/features/user/userApi';

interface User {
  id: number;
  email: string;
  name: string;
  loading: boolean;
  error: string | null;
}

const initialState: User = {
  id: 0,
  email: '',
  name: '',
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(meThunk.pending, state => {
        state.loading = true;
      })
      .addCase(meThunk.fulfilled, (state, action) => {
        state.id = action.payload.id;
        state.email = action.payload.email;
        state.name = action.payload.name;
      })
      .addCase(meThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default userSlice.reducer;
