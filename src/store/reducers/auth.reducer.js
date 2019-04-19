import { SET_AUTH, SET_AUTH_DATA } from "../actions/auth.action";

const initialState = {
    authStatus: false,
    authData: {}
}
export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                authStatus: action.payload
            }
        case SET_AUTH_DATA:
            return {
                ...state,
                authData: action.payload
            }
        default:
            return state;
    }
}