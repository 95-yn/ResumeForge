import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Templates } from './pages/Templates';
import { Editor } from './pages/Editor';
import { EditorV2 } from './pages/EditorV2';
import { ProtectedRoute } from './components/common/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Templates /> },
      { path: 'login', element: <Login /> },
      { path: 'dashboard', element: <ProtectedRoute><Dashboard /></ProtectedRoute> },
      { path: 'templates', element: <Templates /> },
      { path: 'editor', element: <Editor /> },
      { path: 'editor/:resumeId', element: <ProtectedRoute><Editor /></ProtectedRoute> },
      { path: 'design', element: <EditorV2 /> },
      { path: 'design/:resumeId', element: <ProtectedRoute><EditorV2 /></ProtectedRoute> },
    ],
  },
]);
