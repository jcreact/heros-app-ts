import { useEffect, useReducer } from 'react';

import ThemeApp from './theme/ThemeApp';
import { AppRouter } from './routers/AppRouter';
import { AuthContext, initialAuthState } from './auth/authContext';
import { authReducer, AuthState } from './auth/authReducer';

const init = (): AuthState => {
    return JSON.parse(localStorage.getItem('user') as string) || initialAuthState;
};

export function HerosApp() {
    const [user, dispatch] = useReducer(authReducer, initialAuthState, init);

    useEffect(() => user && localStorage.setItem('user', JSON.stringify(user)), [user]);

    return (
        <AuthContext.Provider
            value={{
                user,
                dispatch,
            }}
        >
            <ThemeApp>
                <AppRouter />
            </ThemeApp>
        </AuthContext.Provider>
    );
}

export default HerosApp;
