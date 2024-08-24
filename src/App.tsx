import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RequireAuth } from './shared/components/RequireAuth';
import { Main } from './pages/Main/Main';
import { Layout } from './shared/components/Layout';
import Recipes from './pages/Recipes/Recipes';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';

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
                element: <Recipes />,
            },
            {
                path: '/profile',
                element: (
                    <RequireAuth>
                        <Profile />
                    </RequireAuth>
                ),
            },
            {
                path: '/login',
                element: <Login />,
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
