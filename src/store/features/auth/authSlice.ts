import { createSlice } from '@reduxjs/toolkit';
import { loginThunk } from '@/store/features/auth/authApi';
import { LOCAL_STORAGE_KEY } from '@/constants';

interface AuthState {
  isAuthenticated: boolean;
  roles: string[];
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  roles: [],
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginThunk.pending, state => {
        state.loading = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.loading = false;
        localStorage.setItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN, action.payload.accessToken);
        localStorage.setItem(LOCAL_STORAGE_KEY.REFRESH_TOKEN, action.payload.refreshToken);
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default authSlice.reducer;
