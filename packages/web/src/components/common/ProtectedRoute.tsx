import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/auth.store';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuth = useAuthStore((s) => s.checkAuth)();
  if (!isAuth) return <Navigate to="/login" replace />;
  return <>{children}</>;
}
