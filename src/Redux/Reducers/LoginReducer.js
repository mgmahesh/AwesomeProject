
import { LoginActions } from "../enums";

const initialState = {
    userName: '',
    password: ''
};

export const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LoginActions.LoginUser:
            return { ...state, userName: action.payload.userName, password: action.payload.password }
        default:
            return state;
    }
};