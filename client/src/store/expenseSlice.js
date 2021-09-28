import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';

export const getExpenses = createAsyncThunk(
  "expenses/get",
  async (userInfo, { dispatch, getState }) => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data;
  }
)

export const add_Expense = createAsyncThunk(
  "expenses/add",
  async (userInfo, { dispatch, getState }) => {
    return axios.post("");

  }
)

export const remove_Expense = createAsyncThunk(
  "expenses/remove",
  async (userInfo, { dispatch, getState }) => {
    return axios.post("");
  }
)

export const update_Expense = createAsyncThunk(
  "expenses/update",
  async (userInfo, { dispatch, getState }) => {
    return axios.post("");
  }
)

const expenseSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: [],
    status: null,
    error: null
  },
  reducers: {
    addExpense: (state, action) => {
      if (Array.isArray)
        state.expenses.push(...action.payload)
      else
        state.expenses.push(action.payload)
    },
    removeExpense: (state, action) => {
      const new_expenses = state.expenses.filter(
        expense => expense.id !== action.payload
      );
      state.expenses = new_expenses;
    },
    updateExpense: (state, action) => {
      const u_index = state.expenses.findIndex(
        expense => expense.id === action.payload.id
      );
      state.expenses.splice(u_index, 1, action.payload);
    },
    clearExpenses: (state, action) => {
      state.expenses = [];
    }
  },
  extraReducers: {
    [getExpenses.pending]: (state, action) => {
      state.status = "loading"
      state.error = null;
    },
    [getExpenses.fulfilled]: (state, action) => {
      state.status = "success";
      state.expenses = action.payload;
    },
    [getExpenses.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    }
  }
});

export const { addExpense, removeExpense, clearExpenses } = expenseSlice.actions;

export default expenseSlice.reducer;