import { Outlet } from 'react-router-dom';
import { BottomNav } from './BottomNav';

export const Layout = () => {
    return (
        <>
            <Outlet />
            <BottomNav />
        </>
    );
};
