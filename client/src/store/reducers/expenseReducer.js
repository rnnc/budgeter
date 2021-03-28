import { ADD_EXPENSE, REMOVE_EXPENSE } from '../types';

const initialState = {
  expenses: []
};

export default function (state = initialState, action) {

  const { type, payload } = action;

  switch (type) {
    case ADD_EXPENSE:
      return payload;
    case REMOVE_EXPENSE:
      return {
        expenses: expenses.map()
      }
    default:
      return state;
  }
}
