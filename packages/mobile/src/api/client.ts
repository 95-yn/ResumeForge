import Taro from '@tarojs/taro';

const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3001/api' : '/api';

export async function request<T>(url: string, options: { method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'; data?: unknown } = {}): Promise<T> {
  const token = Taro.getStorageSync('accessToken');
  const res = await Taro.request({
    url: `${BASE_URL}${url}`,
    method: options.method ?? 'GET',
    data: options.data as object,
    header: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
  });
  if (res.statusCode === 401) { Taro.removeStorageSync('accessToken'); Taro.redirectTo({ url: '/pages/login/index' }); throw new Error('Unauthorized'); }
  if (res.statusCode >= 400) throw new Error(res.data?.message ?? 'Request failed');
  return res.data as T;
}
