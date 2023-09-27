import { LoginActions } from "../enums";

export const SetLoginCredentials = (credentials) => ({
    type: LoginActions.LoginUser,
    payload: credentials
});