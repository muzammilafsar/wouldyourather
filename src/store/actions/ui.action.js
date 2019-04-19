export const SET_LOADER = 'SET_LOADER';

export function setLoader(payload) {
    return {
        type: SET_LOADER,
        payload: payload
    }
}