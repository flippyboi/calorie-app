import React from 'react';
import { useNavigate } from 'react-router-dom';

const isAuth = false;

export const RequireAuth = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate();

    if (!isAuth) {
        navigate('/login');
    }

    return <>{children}</>;
};
