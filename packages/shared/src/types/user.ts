export type AuthProvider = 'local' | 'wechat' | 'google';
export type PlanType = 'free' | 'pro' | 'premium';

export interface User {
  id: string;
  email?: string;
  phone?: string;
  name?: string;
  avatar?: string;
  provider: AuthProvider;
  plan: PlanType;
  planExpiry?: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}
