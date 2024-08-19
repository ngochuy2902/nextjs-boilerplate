import axios from '@/config/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const me = async () => {
  const response = await axios.get('/users/me');
  return response.data;
};

export const meThunk = createAsyncThunk('auth/me', me);
