import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { LoginScreen } from '../components/login/LoginScreen';
import { HomeRoutes } from './HomeRoutes';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/*" element={<HomeRoutes />} />
            </Routes>
        </BrowserRouter>
    );
};
