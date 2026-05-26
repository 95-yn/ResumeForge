import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Templates } from './pages/Templates';
import { Editor } from './pages/Editor';
import { ProtectedRoute } from './components/common/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'dashboard', element: <ProtectedRoute><Dashboard /></ProtectedRoute> },
      { path: 'templates', element: <ProtectedRoute><Templates /></ProtectedRoute> },
      { path: 'editor/:resumeId', element: <ProtectedRoute><Editor /></ProtectedRoute> },
      { index: true, element: <ProtectedRoute><Dashboard /></ProtectedRoute> },
    ],
  },
]);
