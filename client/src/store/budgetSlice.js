import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';

export const getBudgets = createAsyncThunk(
  "budgets/get",
  async (userInfo, { dispatch, getState }) => {
    return axios.get("");
  }
)

const budgetSlice = createSlice({
  name: "budgets",
  initialState: {
    budgets: [],
    status: null,
    error: null
  },
  reducers: {

  },
  extraReducers: {
    [getBudgets.pending]: (state, action) => {
      state.status = "loading"
      state.error = null;
    },
    [getBudgets.fulfilled]: (state, action) => {
      state.status = "success";
      state.budgets = action.payload;
    },
    [getBudgets.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    }
  }
})

export default budgetSlice.reducer;