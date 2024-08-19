import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '@/config/axios';
import { LoginPayload } from '@/store/features/auth/type';

const login = async (payload: LoginPayload) => {
  const response = await axios.post('/auth/login', payload);
  return response.data;
};

export const loginThunk = createAsyncThunk('auth/login', login);
