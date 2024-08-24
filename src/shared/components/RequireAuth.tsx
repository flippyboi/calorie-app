import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuth = true;

export const RequireAuth = ({ children }: { children: React.ReactNode }) => {
    if (!isAuth) {
        return <Navigate to="/login" />;
    }

    return children;
};
