import { setLoader } from "./ui.action";
import { _getUsers } from "../../_DATA";

export const SET_AUTH = 'SET_AUTH';
export const SET_AUTH_DATA = 'SET_AUTH_DATA';
export const SAVE_USERS = 'SAVE_USERS';
export function setAuth(payload) {
    return {
        type: SET_AUTH,
        payload
    }
}
export function setAuthData(payload) {
    return {
        type: SET_AUTH_DATA,
        payload
    }
}
export function saveUsers(payload) {
    return {
        type: SAVE_USERS,
        payload
    }
}
export function getUsers(){
    return dispatch => {
        dispatch(setLoader(true));
        _getUsers().then(val => {
            dispatch(saveUsers(val));
            dispatch(setLoader(false));
        })
    }
}