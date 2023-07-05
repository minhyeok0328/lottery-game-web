import { createBrowserRouter } from 'react-router-dom';
import Main from '@/pages/Main';
import ComponentTest from '@/pages/ComponentTest';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>
  },
  {
    path: '/test',
    element: <ComponentTest/>
  }
]);

export default router;
