type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
        ? {
              type: Key;
          }
        : {
              type: Key;
              payload: M[Key];
          };
};

export const enum ActionTypes {
    LOGIN = '[auth] login',
    LOGOUT = '[auth] logout',
}

type AuthPayload = {
    [ActionTypes.LOGIN]: {
        name: string;
    };
    [ActionTypes.LOGOUT]: undefined;
};

export type AuthActions = ActionMap<AuthPayload>[keyof ActionMap<AuthPayload>];
