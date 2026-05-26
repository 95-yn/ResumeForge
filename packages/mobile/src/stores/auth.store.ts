import Taro from '@tarojs/taro';
import { create } from 'zustand';
import { request } from '../api/client';
import type { AuthResponse, ApiResponse } from '@resume/shared';

interface AuthStore {
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: !!Taro.getStorageSync('accessToken'),
  login: async (email, password) => {
    const res = await request<ApiResponse<AuthResponse>>('/auth/login', { method: 'POST', data: { email, password } });
    Taro.setStorageSync('accessToken', res.data.tokens.accessToken);
    Taro.setStorageSync('refreshToken', res.data.tokens.refreshToken);
    set({ isLoggedIn: true });
  },
  register: async (email, password, name) => {
    const res = await request<ApiResponse<AuthResponse>>('/auth/register', { method: 'POST', data: { email, password, name } });
    Taro.setStorageSync('accessToken', res.data.tokens.accessToken);
    Taro.setStorageSync('refreshToken', res.data.tokens.refreshToken);
    set({ isLoggedIn: true });
  },
  logout: () => { Taro.removeStorageSync('accessToken'); Taro.removeStorageSync('refreshToken'); set({ isLoggedIn: false }); },
}));
