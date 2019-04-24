import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import { uiReducer } from './ui.reducer';
import quesReducer from './question.reducer';
export default combineReducers({
    auth: authReducer,
    ui: uiReducer,
    ques: quesReducer
});