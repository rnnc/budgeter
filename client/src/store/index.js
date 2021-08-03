/* import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
) */

import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from './expenseSlice';
import budgetReducer from './budgetSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
    budgets: budgetReducer,
    expenses: expenseReducer
  },
  devTools: true
})

export default store;