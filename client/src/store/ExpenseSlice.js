import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';

export const getExpenses = createAsyncThunk(
  "expenses/get",
  async (userInfo, thunkAPI) => {
    try {
      const { } = userInfo;
      const response = await Axios.get("")
    }
    catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
)

const initialState = {
  expenses: []
};

const expenseSlice = createSlice({
  name: "expenses",
  reducers: {
    addExpense(state, payload) {
      state.expenses.push(payload)
    }
  }
});

export default expenseSlice.reducer;