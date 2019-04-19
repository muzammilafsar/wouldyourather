export const SET_AUTH = 'SET_AUTH';
export const SET_AUTH_DATA = 'SET_AUTH_DATA';

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