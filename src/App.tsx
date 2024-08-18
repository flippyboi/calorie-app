import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RequireAuth } from './shared/components/RequireAuth';
import { Main } from './pages/Main/Main';
import { Layout } from './shared/components/Layout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: (
                    <RequireAuth>
                        <Main />
                    </RequireAuth>
                ),
            },
            {
                path: '/statistics',
                element: (
                    <RequireAuth>
                        <div>statistics</div>
                    </RequireAuth>
                ),
            },
            {
                path: '/recipes',
                element: <div>recipes</div>,
            },
            {
                path: '/profile',
                element: (
                    <RequireAuth>
                        <div>profile</div>
                    </RequireAuth>
                ),
            },
            {
                path: '/login',
                element: <div>login</div>,
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
