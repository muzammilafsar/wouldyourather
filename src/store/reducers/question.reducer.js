import { SAVE_QUESTIONS } from "../actions/question.action";

const initialState = {
    questions: {}
}
export default function quesReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_QUESTIONS:
            return {
                ...state,
                questions: action.payload
            }
        
        default:
            return state;
    }
}