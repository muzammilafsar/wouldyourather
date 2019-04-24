import { setLoader } from "./ui.action";
import { _saveQuestion, _saveQuestionAnswer, _getQuestions } from "../../_DATA";
import { getUsers } from "./auth.action";
export const SAVE_QUESTIONS = 'SAVE_QUESTIONS';
export function saveQuestions(payload) {
    return {
        type: SAVE_QUESTIONS,
        payload: payload
    }
}   
export function saveQuestion(data) {
    return dispatch => {
        dispatch(setLoader(true));
        _saveQuestion(data).then(val => {
            dispatch(setLoader(false));
        })

    }
}
export function getQuestions() {
    console.log('gett')
    return dispatch => {
        dispatch(setLoader(true));
        _getQuestions().then(val => {
            dispatch(saveQuestions(val));
            dispatch(setLoader(false));
        })
    }
} 
export function saveQuestionAnswer(data) {
    return dispatch => {
        dispatch(setLoader(true));
        _saveQuestionAnswer(data).then(val => {
            dispatch(setLoader(false));
            dispatch(getQuestions());
            dispatch(getUsers());
        })

    }
}   