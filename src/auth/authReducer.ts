import { AuthActions, ActionTypes } from '../types/types';

export interface AuthState {
    name: string;
    logged: boolean;
}

export const authReducer = (state: AuthState, action: AuthActions): AuthState => {
    switch (action.type) {
        case ActionTypes.LOGIN:
            console.log('login');
            return {
                ...state,
                name: action.payload.name,
                logged: true,
            };
        case ActionTypes.LOGOUT:
            return {
                ...state,
                name: '',
                logged: false,
            };
        default:
            return state;
    }
};
