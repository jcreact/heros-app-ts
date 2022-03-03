import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../auth/authContext';

interface PublicRouteProps {
    children: JSX.Element;
}

export const PublicRoute = ({ children }: PublicRouteProps) => {
    const { user } = useContext(AuthContext);

    const path = localStorage.getItem('lastPath') || '/marvel';

    return user.logged ? <Navigate to={path} /> : children;
};
