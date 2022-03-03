import { createContext, Dispatch } from 'react';
import { AuthState } from './authReducer';
import { AuthActions } from '../types/types';

export const initialAuthState: AuthState = {
    name: '',
    logged: false,
};

export const AuthContext = createContext<{ user: AuthState; dispatch: Dispatch<AuthActions> }>({
    user: initialAuthState,
    dispatch: () => {},
});
