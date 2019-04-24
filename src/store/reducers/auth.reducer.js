import { SET_AUTH, SET_AUTH_DATA, SAVE_USERS } from "../actions/auth.action";

const initialState = {
    authStatus: false,
    authData: {},
    users: {}
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
        case SAVE_USERS:
            return {
                ...state,
                users: action.payload,
                authData: action.payload[state.authData.id]
            }
        default:
            return state;
    }
}