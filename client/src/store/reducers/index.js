import { combineReducers } from 'redux';
import expenseReducer from './authReducer';

export default combineReducers({
  expenses: expenseReducer
});