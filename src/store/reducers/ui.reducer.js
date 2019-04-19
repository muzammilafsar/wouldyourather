import { SET_LOADER } from "../actions/ui.action";


export function uiReducer(state={ loader: false},action) {
    switch(action.type){
        case SET_LOADER:
        return {
            ...state,
            loader: action.payload
        }
        default:
        return state;
    }
}