import { create } from 'zustand';
import { api } from '../api/client';
import type { User } from '@resume/shared';

interface AuthStore {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  checkAuth: () => boolean;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  loading: false,
  login: async (email, password) => {
    set({ loading: true });
    const { data } = await api.post('/auth/login', { email, password });
    localStorage.setItem('accessToken', data.data.tokens.accessToken);
    localStorage.setItem('refreshToken', data.data.tokens.refreshToken);
    set({ user: data.data.user, loading: false });
  },
  register: async (email, password, name) => {
    set({ loading: true });
    const { data } = await api.post('/auth/register', { email, password, name });
    localStorage.setItem('accessToken', data.data.tokens.accessToken);
    localStorage.setItem('refreshToken', data.data.tokens.refreshToken);
    set({ user: data.data.user, loading: false });
  },
  logout: () => { localStorage.removeItem('accessToken'); localStorage.removeItem('refreshToken'); set({ user: null }); },
  checkAuth: () => !!localStorage.getItem('accessToken'),
}));
