import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';

interface PrivateRouteProps {
    children: JSX.Element;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const { user } = useContext(AuthContext);
    const { pathname, search } = useLocation();

    localStorage.setItem('lastPath', `${pathname}${search}`);

    return user.logged ? children : <Navigate to="/login" />;
};
